import type { Address } from '@/types';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { RadioGroup } from '@headlessui/react';
import { useAtom, WritableAtom } from 'jotai';
import AddressCard from '@/components/address/address-card';
import { AddressHeader } from '@/components/address/address-header';
import { useTranslation } from 'next-i18next';
import CreateOrUpdateAddressForm, {
  AddressForm,
} from '../address/address-form';
import { useUpdateUser } from '@/framework/user';
import { AddressType } from '@/framework/utils/constants';

interface AddressesProps {
  addresses: Address[] | undefined;
  label: string;
  atom: WritableAtom<Address | null, Address>;
  className?: string;
  count: number;
  type: string;
}
type FormValues = {
  title: string;
  type: AddressType;
  address: {
    first_name: string;
    last_name: string;
    country: string;
    city: string;
    state: string;
    zip: string;
    street_address: string;
    email: string;
  };
};

export const GuestAddressGrid: React.FC<AddressesProps> = ({
  addresses,
  label,
  atom,
  className,
  count,
  type,
}) => {
  const { t } = useTranslation('common');
  const { mutate: updateProfile } = useUpdateUser();

  const [selectedAddress, setAddress] = useAtom(atom);
  const { openModal } = useModalAction();

  function onAdd() {
    openModal('ADD_OR_UPDATE_GUEST_ADDRESS', { type, atom });
  }

  function onEdit(address: any) {
    openModal('ADD_OR_UPDATE_GUEST_ADDRESS', { type, atom, address });
  }

  function onSubmit(values: FormValues) {
    const formattedInput = {
      // id: address?.id,
      // customer_id: customerId,
      id: '1',
      title: values.title,
      type: values.type,
      address: {
        ...values.address,
      },
    };
    updateProfile({
      id: '1',
      address: [formattedInput],
    });
  }
  return (
    <div className={className}>
      <AddressHeader onAdd={onAdd} count={count} label={label} />

      {/* <AddressForm
        onSubmit={onSubmit}
        defaultValues={{
          title: 'Billing',
          type: type,
          address: {
            ...addresses[0]?.address,
          },
        }}
      /> */}

      {addresses && addresses?.length ? (
        <RadioGroup as="span" value={selectedAddress} onChange={setAddress}>
          <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {addresses?.map((address) => (
              <RadioGroup.Option value={address} key={address?.id}>
                {({ checked }) => (
                  <AddressCard
                    checked={checked}
                    address={address}
                    onEdit={() => onEdit(address)}
                  />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <span className="relative rounded border border-border-200 bg-gray-100 px-5 py-6 text-center text-base">
            {t('text-no-address')}
          </span>
        </div>
      )}
    </div>
  );
};
export default GuestAddressGrid;
