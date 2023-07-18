import type { Product } from '@/types';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import invariant from 'tiny-invariant';
import client from './client';
import { dehydrate } from 'react-query/hydration';
import { API_ENDPOINTS } from '@/framework/client/api-endpoints';
import { QueryClient } from 'react-query';
import { SettingsQueryOptions } from '@/types';
import Categories from '@/seed/CatData.json';

// This function gets called at build time
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of dynamic paths from an API or database
  const dynamicPaths = Categories.map((c) => c.slug);
  const { data } = await client.products.all({ limit: 50 });

  // Generate an array of path objects with the required params
  const paths = data.map((product) => ({
    params: { dynamic: product.categories[0].slug, slug: product.slug },
  }));

  const pathsArray = dynamicPaths.map((dynamic) => ({
    params: { dynamic, slug: 'sample-slug' },
  }));

  // Return the paths object with the required paths and params
  return {
    paths,
    fallback: 'blocking', // Set to 'false' to return 404 for non-existent paths
  };
};

type PageProps = {
  product: Product;
};
export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ params, locale }) => {
  const { slug } = params!; //* we know it's required because of getStaticPaths

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.SETTINGS, { language: locale }],
    ({ queryKey }) => client.settings.all(queryKey[1] as SettingsQueryOptions)
  );

  try {
    const product = await client.products.get({ slug, language: locale });
    return {
      props: {
        product,
        ...(await serverSideTranslations(locale!, ['common'])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
