import { useModalAction } from '@/components/ui/modal/modal.context';

import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { useToken } from '@/lib/hooks/use-token';
import { useState } from 'react';
import { useCustomerId } from '@/lib/hooks/user-customer';

// const isCheckout = router.pathname.includes('checkout');
// const { mutate: login, isLoading, serverError, setServerError } = useLogin();
async function loginToWp({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const { closeModal } = useModalAction();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { setToken } = useToken();
  const { setCustomerId } = useCustomerId();
  let [serverError, setServerError] = useState<string | null>(null);
  let [isLoading, setIsLoading] = useState<Boolean | any>(false);
  const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT + `token`;
  const formData = { username, password };
  try {
    setIsLoading(true);
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((r) => r.json());
    setIsLoading(false);

    if (data.code && data.data.status) {
      setServerError(data.message);
      return;
    }

    if (data.token) {
      setToken(data.token);

      await fetchCustomer(data.user_nicename);

      return;
    }
  } catch (err) {
    console.log(`err`, err);
  }
  async function fetchCustomer(userName: string) {
    if (userName) {
      try {
        const url =
          process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
          `customer-info/${userName}`;
        fetch(url)
          .then((r) => r.json())
          .then((customer_info) => {
            setCustomerId(customer_info.id);
            setAuthorized(true);
            closeModal();
          })
          .catch((err) => {
            setServerError('Error While Fetching Customer Details');
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }

  return {};
}
