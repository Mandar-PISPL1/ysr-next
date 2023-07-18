import { UserAddress } from '@/types';
function removeFalsy(obj: any) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));
}

export function formatAddress(address: UserAddress) {
  if (!address) return;
  const temp = [
    'first_name',
    'last_name',
    'street_address',
    'address_1',
    'address_2',
    'city',

    'state',
    'zip',
    'country',
  ].reduce((acc, k) => ({ ...acc, [k]: (address as any)[k] }), {});
  const formattedAddress = removeFalsy(temp);
  return Object.values(formattedAddress).join(', ');
}
