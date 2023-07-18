import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_WP_API + '/wpr/v1/posts'
  ).then((r) => r.json());
  return {
    props: {
      posts: posts,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
