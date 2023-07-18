import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import { useCreateOrder, useOrderStatuses } from '@/framework/order';
import ValidationError from '@/components/ui/validation-error';
import Button from '@/components/ui/button';
import { formatOrderedProduct } from '@/lib/format-ordered-product';
import { useCart } from '@/store/quick-cart/cart.context';
import { checkoutAtom, discountAtom, walletAtom } from '@/store/checkout';
import {
  calculatePaidTotal,
  calculateTotal,
} from '@/store/quick-cart/cart.utils';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Api from '@/config/WooCommerce';
import { toast } from 'react-toastify';
import { useUser } from '@/framework/user';

export const PlaceOrderAction: React.FC<{ className?: string }> = (props) => {
  const { t } = useTranslation('common');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const { createOrder, isLoading } = useCreateOrder();
  const [isLoading, setIsLoading] = useState(false);
  const { locale, push }: any = useRouter();
  const { items } = useCart();
  const { me } = useUser();

  const { orderStatuses } = useOrderStatuses({
    limit: 1,
    language: locale,
  });

  const [
    {
      billing_address,
      shipping_address,
      delivery_time,
      coupon,
      verified_response,
      customer_contact,
      payment_gateway,
      token,
    },
  ] = useAtom(checkoutAtom);
  const [discount] = useAtom(discountAtom);
  const [use_wallet_points] = useAtom(walletAtom);

  useEffect(() => {
    setErrorMessage(null);
  }, [payment_gateway]);

  const available_items = items?.filter(
    (item) => !verified_response?.unavailable_products?.includes(item.id)
  );

  const subtotal = calculateTotal(available_items);
  const total = calculatePaidTotal(
    {
      totalAmount: subtotal,
      tax: verified_response?.total_tax!,
      shipping_charge: verified_response?.shipping_charge!,
    },
    Number(discount)
  );
  const makeRazorPayment = async (productId: any) => {
    // Make API call to the serverless API

    const data = await fetch('/api/razorpay', {
      method: 'POST',
      headers: {
        // Authorization: 'YOUR_AUTH_HERE'
      },
      body: JSON.stringify({ items: productId }),
    }).then((t) => t.json());
    const options = {
      name: data.name,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: data.amountDesc,
      // image: logoBase64,
      handler: function (response: any) {
        console.log({ response });
      },
      prefill: {
        name:
          billing_address?.address.first_name +
          ' ' +
          billing_address?.address.last_name,
        email: billing_address?.address.email,
        contact: customer_contact,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response: any) {
      toast.error('Payment failed. Please try again. Contact support for help');
    });
  };

  const handlePlaceOrder = () => {
    if (!customer_contact) {
      setErrorMessage('Contact Number Is Required');
      return;
    }
    if (!use_wallet_points && !payment_gateway) {
      setErrorMessage('Gateway Is Required');
      return;
    }

    if (payment_gateway === 'RAZORPAY') {
      const products_id = available_items?.map((item) =>
        formatOrderedProduct(item)
      );

      makeRazorPayment(products_id);
    }

    let input = {
      //@ts-ignore
      products: available_items?.map((item) => formatOrderedProduct(item)),
      status: orderStatuses[0]?.id ?? '1',
      amount: subtotal,
      coupon_id: coupon?.id ? Number(coupon?.id) : null,
      discount: discount ?? 0,
      paid_total: total,
      sales_tax: verified_response?.total_tax,
      delivery_fee: verified_response?.shipping_charge,
      total,
      delivery_time: delivery_time?.title,
      customer_contact,
      payment_gateway,
      use_wallet_points,
      billing_address: {
        ...(billing_address?.address && billing_address.address),
      },
      shipping_address: {
        ...(shipping_address?.address && shipping_address.address),
      },
    };

    delete input.billing_address.__typename;
    delete input.shipping_address.__typename;

    //@ts-ignore
    sendOrder(generateDataForWOOCommerce(input));
    // (generateDataForWOOCommerce(input));
    // createOrder(input);
  };

  function sendOrder(data: any) {
    setIsLoading(true);
    Api.post('orders', data)
      .then((response: any) => {
        toast.success('Order has been received');
        setIsLoading(false);
        push(`/orders/${response.data.id}`);
        // console.log(response.data);
      })
      .catch((error: any) => {
        toast.error('There was some error please try again');
        setIsLoading(false);

        // console.log(error.response.data);
      });
  }

  function payment_method_instance(payment_gateway: string) {
    if (payment_gateway === 'CASH_ON_DELIVERY') {
      return {
        payment_method: 'cod',
        payment_method_title: 'Cash on delivery',
      };
    }
    if (payment_gateway === 'RAZORPAY') {
      return {
        payment_method: 'razorpay',
        payment_method_title:
          'Credit Card/Debit Card/NetBanking - <small>5% Extra Discount</small>',
      };
    }
    return {
      payment_method: 'cod',
      payment_method_title: 'Direct Bank Transfer',
    };
  }
  function line_items(products: any[]) {
    return products.map((product) => ({
      product_id: product.product_id,
      variation_id: product.variation_option_id
        ? product.variation_option_id
        : product.product_id,
      quantity: product.order_quantity,
    }));
  }

  function shipping_lines(payment_gateway: string) {
    if (payment_gateway === 'CASH_ON_DELIVERY') {
      return [
        {
          method_id: 'flat_rate',
          method_title: 'COD Charges',
          total: '50.00',
        },
      ];
    }
  }
  function billing(billing_address: any) {
    return {
      first_name: billing_address?.first_name,
      last_name: billing_address?.last_name,
      address_1: billing_address?.street_address,
      address_2: '',
      city: billing_address?.city,
      state: billing_address?.state,
      postcode: billing_address?.zip,
      country: billing_address?.zip,
      email: billing_address?.email,
      phone: customer_contact,
    };
  }
  function shipping(billing_address: any) {
    return {
      first_name: billing_address?.first_name,
      last_name: billing_address?.last_name,
      address_1: billing_address?.street_address,
      address_2: '',
      city: billing_address?.city,
      state: billing_address?.state,
      postcode: billing_address?.zip,
      country: billing_address?.zip,
    };
  }

  function generateDataForWOOCommerce(input: any) {
    let data = {
      ...payment_method_instance(input.payment_gateway),
      set_paid: false,
      billing: billing(input.billing_address),
      shipping: shipping(input.shipping_address),
      line_items: line_items(input.products),
      shipping_lines: shipping_lines(input.payment_gateway),
    };
    if (me) {
      data.customer = me.id;
      data.customer_id = me.id;
    }

    return data;
  }
  const isDigitalCheckout = available_items.find((item) =>
    Boolean(item.is_digital)
  );

  const formatRequiredFields = isDigitalCheckout
    ? [customer_contact, payment_gateway, available_items]
    : [
        customer_contact,
        payment_gateway,
        billing_address,
        shipping_address,
        // delivery_time,
        available_items,
      ];
  const isAllRequiredFieldSelected = formatRequiredFields.every(
    (item) => !isEmpty(item)
  );
  return (
    <>
      <Button
        loading={isLoading}
        className={classNames('mt-5 w-full', props.className)}
        onClick={handlePlaceOrder}
        disabled={!isAllRequiredFieldSelected}
        {...props}
      />
      {errorMessage && (
        <div className="mt-3">
          <ValidationError message={errorMessage} />
        </div>
      )}
      {!isAllRequiredFieldSelected && (
        <div className="mt-3">
          <ValidationError message={t('text-place-order-helper-text')} />
        </div>
      )}
    </>
  );
};
