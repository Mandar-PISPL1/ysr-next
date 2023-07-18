import { RadioGroup } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Alert from '@/components/ui/alert';

import CashOnDelivery from '@/components/checkout/payment/cash-on-delivery';
import { useAtom } from 'jotai';
import {
  couponAtom,
  paymentGatewayAtom,
  PaymentMethodName,
  verifiedResponseAtom,
} from '@/store/checkout';
import cn from 'classnames';
import Razorpay from './razorpay';
import { useCart } from '@/store/quick-cart/cart.context';
import { calculateTotal } from '@/store/quick-cart/cart.utils';

interface PaymentMethodInformation {
  name: string;
  value: PaymentMethodName;
  icon: string;
  component: React.FunctionComponent;
}
function percentage(percent, total) {
  return ((percent / 100) * total).toFixed(2);
}
const PaymentGrid: React.FC<{ className?: string; theme?: 'bw' }> = ({
  className,
  theme,
}) => {
  const [verifiedResponse, setVerifiedResponse] = useAtom(verifiedResponseAtom);
  const { items, isEmpty: isEmptyCart } = useCart();

  const [gateway, setGateway] = useAtom<PaymentMethodName>(paymentGatewayAtom);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t } = useTranslation('common');

  const available_items = items?.filter(
    (item) => !verifiedResponse?.unavailable_products?.includes(item.id)
  );
  const base_amount = calculateTotal(available_items);
  const [_, applyCoupon] = useAtom(couponAtom);

  useEffect(() => {
    if (gateway === 'CASH_ON_DELIVERY') {
      const data = {
        ...verifiedResponse,
        shipping_charge: 50,
      };
      //@ts-ignore

      setVerifiedResponse(data);
      applyCoupon(null);
    } else {
      const prepaymentCoupon = {
        id: '9',
        description: 'Prepayment Discount 5%	',
        image: {
          id: 925,
          original:
            'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/925/5x2x.png',
          thumbnail:
            'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/925/conversions/5x2x-thumbnail.jpg',
        },
        type: 'fixed',
        amount: percentage(5, base_amount),

        is_valid: true,
      };
      applyCoupon({
        name: 'Pre Payment',
        slug: 'razorpay',
        ...prepaymentCoupon,
      });
      const data = {
        ...verifiedResponse,
        shipping_charge: 0,
        discount: percentage(5, base_amount),
      };
      //@ts-ignore
      setVerifiedResponse(data);
    }
  }, [gateway]);
  // Payment Methods Mapping Object

  const AVAILABLE_PAYMENT_METHODS_MAP: Record<
    PaymentMethodName,
    PaymentMethodInformation
  > = {
    RAZORPAY: {
      name: 'Razorpay',
      value: 'RAZORPAY',
      icon: '/payment/razorpay.png',
      component: Razorpay,
    },
    CASH_ON_DELIVERY: {
      name: t('text-cash-on-delivery'),
      value: 'CASH_ON_DELIVERY',
      icon: '',
      component: CashOnDelivery,
    },
  };

  const PaymentMethod = AVAILABLE_PAYMENT_METHODS_MAP[gateway];
  const Component = PaymentMethod?.component ?? Razorpay;
  return (
    <div className={className}>
      {errorMessage ? (
        <Alert
          message={t(`common:${errorMessage}`)}
          variant="error"
          closeable={true}
          className="mt-5"
          onClose={() => setErrorMessage(null)}
        />
      ) : null}

      <RadioGroup value={gateway} onChange={setGateway}>
        <RadioGroup.Label className="mb-5 block text-base font-semibold text-heading">
          {t('text-choose-payment')}
        </RadioGroup.Label>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {Object.values(AVAILABLE_PAYMENT_METHODS_MAP).map(
            ({ name, icon, value }) => (
              <RadioGroup.Option value={value} key={value}>
                {({ checked }) => (
                  <div
                    className={cn(
                      'relative flex h-full w-full cursor-pointer items-center justify-center rounded border border-gray-200 bg-light py-3 text-center',
                      checked && '!border-accent bg-light shadow-600',
                      {
                        '!border-gray-800 bg-light shadow-600':
                          theme === 'bw' && checked,
                      }
                    )}
                  >
                    {icon ? (
                      <>
                        {/* eslint-disable */}
                        <img
                          src={icon}
                          alt={name}
                          className="h-[30px] object-contain"
                        />
                      </>
                    ) : (
                      <span className="text-xs font-semibold text-heading">
                        {name}
                      </span>
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            )
          )}
        </div>
      </RadioGroup>
      <div>
        <Component />
      </div>
    </div>
  );
};

export default PaymentGrid;
