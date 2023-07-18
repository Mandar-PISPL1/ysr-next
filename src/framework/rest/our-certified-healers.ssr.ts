import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const healers = await fetch(
    process.env.NEXT_PUBLIC_WP_API + '/wp/v2/healer-profile?per_post=100'
  ).then((r) => r.json());
  return {
    props: {
      healers: healers,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
