import { getLayout } from '@/components/layouts/layout';
import { Grid } from '@/components/products/grid';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import CartCounterButton from '@/components/cart/cart-counter-button';
import SearchCount from '@/components/search-view/search-count';
import Sorting from '@/components/search-view/sorting';
import ShopSidebar from '@/components/shop/ShopSidebar';
import StickyBox from 'react-sticky-box';
import { useRouter } from 'next/router';

function Shop() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(['']);
  const [products, setProducts] = useState([]);
  const fetchInitial = async () => {
    try {
      let url = process.env.NEXT_PUBLIC_WP_API + `/api/product-filter`;

      fetchUrl(url);
    } catch (err) {
      setIsLoaded(false);
      toast.error(`There is some error`);
      console.log(err);
    }
  };

  const fetchUrl = async (url: string) => {
    setIsLoading(true);

    try {
      const resp = await fetch(url).then((r) => r.json());

      setProducts(resp);
      setIsLoading(false);

      setIsLoaded(true);
    } catch (error) {
      console.log('There is some error');
      toast.error('There is somer error try again!');
    }
  };
  useEffect(() => {
    if (searchText.length > 4) fetchInitial();
  }, [searchText]);
  useEffect(() => {
    let url = process.env.NEXT_PUBLIC_WP_API + `/api/product-filter`;
    const queryString = Object.keys(router.query)
      .map((key) => {
        return `${key}=${router.query[key]}`;
      })
      .join('&');
    if (queryString.length > 0) {
      url = url + `?${queryString}`;
    }

    fetchUrl(url);
  }, [router.query]);
  const addCategoriesToState = (isChecked: Boolean, cat_slug: string) => {
    const slug = cat_slug.replace('&amp;', '');

    const isInCategory = selectedCategories.indexOf(slug) > -1;

    if (isChecked) {
      if (!isInCategory) {
        setSelectedCategories((prev) => [...prev, slug]);
      }
    } else {
      let removedCategories = selectedCategories.filter((r) => r !== slug);
      setSelectedCategories(removedCategories);
    }
  };
  useEffect(() => {
    fetchInitial();
  }, []);
  return (
    <div className="0 mx-auto w-full max-w-1920   bg-white px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-32">
      <h1 className="my-8 text-center text-3xl font-semibold">Shop</h1>
      <section className="grid gap-16 lg:grid-cols-12">
        <div className="col-span-3 hidden flex-col gap-4 bg-white lg:flex">
          <div className="hidden w-80 shrink-0 lg:block">
            <StickyBox offsetTop={140} offsetBottom={30}>
              <ShopSidebar />
            </StickyBox>
          </div>
        </div>

        <div className="col-span-9">
          <div className="mb-7 flex flex-col items-end justify-end md:flex-row">
            {/* //FIXME: */}

            <div className="mt-4 max-w-xs md:mt-0">
              <Sorting variant="dropdown" />
            </div>
          </div>
          {isLoading && <Spinner />}
          {!isLoading && isLoaded && products.length > 0 && (
            <Grid products={products} />
          )}
          {products.length === 0 && <>No Products Were Found</>}
        </div>
      </section>
      <CartCounterButton />
    </div>
  );
}

Shop.getLayout = getLayout;
export default Shop;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
