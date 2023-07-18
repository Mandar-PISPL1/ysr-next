import Cookies from 'js-cookie';
import { USERNAME_KEY } from '@/lib/constants';
export function useUserName() {
  return {
    setUserName(username: string) {
      Cookies.set(USERNAME_KEY, username, { expires: 1 });
    },
    getUserName() {
      return Cookies.get(USERNAME_KEY);
    },
    removeUserName() {
      Cookies.remove(USERNAME_KEY);
    },
    hasUserName() {
      const token = Cookies.get(USERNAME_KEY);
      if (!token) return false;
      return true;
    },
  };
}
