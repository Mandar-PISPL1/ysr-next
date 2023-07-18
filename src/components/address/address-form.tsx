import Button from '@/components/ui/button';
import Input from '@/components/ui/forms/input';
import Label from '@/components/ui/forms/label';
import Radio from '@/components/ui/forms/radio/radio';
import TextArea from '@/components/ui/forms/text-area';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';
import { useModalState } from '@/components/ui/modal/modal.context';
import { Form } from '@/components/ui/forms/form';
import { AddressType } from '@/framework/utils/constants';
import { useUpdateUser } from '@/framework/user';

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

const addressSchema = yup.object().shape({
  // type: yup
  //   .string()
  //   .oneOf([AddressType.Billing, AddressType.Shipping])
  //   .required('error-type-required'),

  address: yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    country: yup.string().required('error-country-required'),
    city: yup.string().required('error-city-required'),
    state: yup.string().required('error-state-required'),
    zip: yup.string().required('error-zip-required'),
    email: yup.string().email().required('Email address is required'),
    street_address: yup.string().required('error-street-required'),
  }),
});

export const AddressForm: React.FC<any> = ({
  onSubmit,
  defaultValues,
  isLoading,
}) => {
  const { t } = useTranslation('common');

  return (
    <Form<FormValues>
      onSubmit={onSubmit}
      className="grid h-full grid-cols-2 gap-5"
      //@ts-ignore
      validationSchema={addressSchema}
      useFormProps={{
        shouldUnregister: true,
        defaultValues,
      }}
      resetValues={defaultValues}
    >
      {({ register, formState: { errors } }) => (
        <>
          {/* <div>
            <Label>{t('text-type')}</Label>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Radio
                id="billing"
                {...register('type')}
                type="radio"
                value={AddressType.Billing}
                label={t('text-billing')}
              />
              <Radio
                id="shipping"
                {...register('type')}
                type="radio"
                value={AddressType.Shipping}
                label={t('text-shipping')}
              />
            </div>
          </div> */}

          <Input
            label={'First Name'}
            {...register('address.first_name')}
            error={t(errors.address?.first_name?.message!)}
            disabled={defaultValues.address.first_name ? true : false}
            variant="outline"
            className="col-span-2"
          />
          <Input
            label={'Last Name'}
            {...register('address.last_name')}
            error={t(errors.address?.last_name?.message!)}
            disabled={defaultValues.address.last_name ? true : false}
            variant="outline"
            className="col-span-2"
          />
          <Input
            label={'Email '}
            {...register('address.email')}
            type="email"
            error={t(errors.address?.email?.message!)}
            variant="outline"
            disabled={defaultValues.address.email ? true : false}
            className="col-span-2"
          />

          <Input
            label={t('text-country')}
            {...register('address.country')}
            error={t(errors.address?.country?.message!)}
            variant="outline"
          />

          <Input
            label={t('text-city')}
            {...register('address.city')}
            error={t(errors.address?.city?.message!)}
            variant="outline"
          />

          <Input
            label={t('text-state')}
            {...register('address.state')}
            error={t(errors.address?.state?.message!)}
            variant="outline"
          />

          <Input
            label={t('text-zip')}
            {...register('address.zip')}
            error={t(errors.address?.zip?.message!)}
            variant="outline"
          />

          <TextArea
            label={t('text-street-address')}
            {...register('address.street_address')}
            error={t(errors.address?.street_address?.message!)}
            variant="outline"
            className="col-span-2"
          />

          <Button
            className="col-span-2 w-full"
            loading={isLoading}
            disabled={isLoading}
          >
            {Boolean(defaultValues) ? `Update Address` : `Save Address`}
            {/* {t('text-address')} */}
          </Button>
        </>
      )}
    </Form>
  );
};

export function CheckoutFormAddress(props: any) {
  const { t } = useTranslation('common');
  const { addresses, type, userId } = props;
  const address = addresses[0];
  const { mutate: updateProfile } = useUpdateUser();

  function onSubmit(values: FormValues) {
    const formattedInput = {
      id: address?.id,
      // customer_id: customerId,
      title: address.title,
      type: address.type,
      address: {
        ...values.address,
      },
    };
    console.log(formattedInput);

    updateProfile({
      id: userId,
      address: [formattedInput],
    });
  }

  return (
    <div className="min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <h1 className="mb-4 text-center text-lg font-semibold  text-heading sm:mb-6">
        {address.title ? t('text-update') : t('text-add-new')} {address.title}{' '}
        {t('text-address')}
      </h1>
      <AddressForm
        onSubmit={onSubmit}
        defaultValues={{
          title: address?.title ?? '',
          type: address?.type ?? type,
          address: {
            ...address?.address,
          },
        }}
      />
    </div>
  );
}

export default function CreateOrUpdateAddressForm(props: any) {
  const { t } = useTranslation('common');
  const {
    data: { customerId, address, type },
  } = useModalState();

  const { mutate: updateProfile } = useUpdateUser();

  function onSubmit(values: FormValues) {
    const formattedInput = {
      id: address?.id,
      // customer_id: customerId,
      title: values.title,
      type: values.type,
      address: {
        ...values.address,
      },
    };
    updateProfile({
      id: customerId,
      address: [formattedInput],
    });
  }

  return (
    <div className="min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl">
      <h1 className="mb-4 text-center text-lg font-semibold text-heading sm:mb-6">
        {address ? t('text-update') : t('text-add-new')} {t('text-address')}
      </h1>
      <AddressForm
        onSubmit={onSubmit}
        defaultValues={{
          title: address?.title ?? props.address,
          type: address?.type ?? type,
          address: {
            ...address?.address,
          },
        }}
      />
    </div>
  );
}
