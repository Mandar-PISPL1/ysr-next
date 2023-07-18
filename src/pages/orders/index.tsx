import OrderList, { useSelectedOrder } from '@/components/orders/order-list';
import Seo from '@/components/seo/seo';
import ErrorMessage from '@/components/ui/error-message';
import { useOrders } from '@/framework/order';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import isEmpty from 'lodash/isEmpty';
import OrderDetails from '@/components/orders/order-details';
import OrderListMobile from '@/components/orders/order-list-mobile';
import NotFound from '@/components/ui/not-found';
import { getLayout as getSiteLayout } from '@/components/layouts/layout';
import DashboardSidebar from '@/components/dashboard/sidebar';
import Api from '@/config/WooCommerce';
import { useEffect, useState } from 'react';
import { useCustomerId } from '@/lib/hooks/user-customer';
export { getStaticProps } from '@/framework/general.ssr';

function NoOrderFound() {
  return (
    <div className="my-auto flex h-[80vh] w-full items-center justify-center rounded bg-light p-5 md:p-8">
      <NotFound text="text-no-order-found" />
    </div>
  );
}

export default function OrdersPage() {
  const [wpOrders, setWpOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getCustomerId } = useCustomerId();
  const [error, setError] = useState<{ message: string } | null>();
  const [selectedOrder] = useSelectedOrder();
  const customerId = getCustomerId();

  const fetchOrders = async () => {
    try {
      setIsLoading(true);

      const { data: orders } = await Api.get(`orders?customer=${customerId}`);
      setIsLoading(false);
      setWpOrders(orders);
    } catch (err) {
      setError({ message: 'There is some issue' });
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [customerId]);

  if (error) return <ErrorMessage message={error.message} />;
  // if (isLoading && !isEmpty(orders)) {
  if (isLoading && isEmpty(wpOrders)) {
    return (
      <div className="my-auto flex h-[80vh] w-full items-center justify-center rounded bg-light p-5 md:p-8">
        <Spinner simple className="h-10 w-10" />
      </div>
    );
  }

  // if (!isLoading && isEmpty(orders)) {
  if (!isLoading && isEmpty(wpOrders)) {
    return <NoOrderFound />;
  }
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="hidden w-full overflow-hidden lg:flex">
        <OrderList
          orders={wpOrders}
          isLoadingMore={false}
          loadMore={() => {}}
          hasMore={false}
        />
        {selectedOrder && (
          <OrderDetails
            order={
              wpOrders.find((order: any) => order.id === selectedOrder.id)!
            }
          />
        )}
      </div>
      <OrderListMobile
        isLoadingMore={false}
        onLoadMore={() => {}}
        hasNextPage={false}
        orders={wpOrders}
      />
    </>
  );
}

const getLayout = (page: React.ReactElement) =>
  getSiteLayout(
    <div className="mx-auto flex w-full max-w-1920 flex-col items-start bg-light py-10 px-5 lg:bg-gray-100 xl:flex-row xl:py-14 xl:px-8 2xl:px-14">
      <DashboardSidebar className="hidden shrink-0 ltr:mr-8 rtl:ml-8 xl:block xl:w-80" />
      {page}
    </div>
  );

OrdersPage.authenticationRequired = true;

OrdersPage.getLayout = getLayout;
