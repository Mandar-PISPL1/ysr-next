import Cookies from 'js-cookie';
import { CUSTOMER_ID } from '@/lib/constants';
export function useCustomerId() {
  return {
    setCustomerId(customer_id: string) {
      Cookies.set(CUSTOMER_ID, customer_id, { expires: 1 });
    },
    getCustomerId() {
      return Cookies.get(CUSTOMER_ID);
    },
    removeCustomerId() {
      Cookies.remove(CUSTOMER_ID);
    },
    hasCustomerId() {
      const token = Cookies.get(CUSTOMER_ID);
      if (!token) return false;
      return true;
    },
  };
}
