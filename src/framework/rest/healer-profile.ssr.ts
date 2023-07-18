import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const url =
    process.env.NEXT_PUBLIC_WP_API + `/wp/v2/healer-profile?slug=${slug}`;

  try {
    // const seo = await fetch(rankMathHeadUrl).then((r) => r.json());

    const healer = await fetch(url).then((r) => r.json());

    if (healer.status) {
      return {
        props: {
          post: null,
          notFound: true,
          ...(await serverSideTranslations(locale!, ['common'])),
        },
      };
    }
    const isPremium =
      healer[0].x_metadata.healing_membership === 'Premium Member'
        ? true
        : false;

    const postTosend = {
      ...healer[0],
      //   seo,

      //   nextSeoData: genNextSeo({ seo, tags: post.tags, slug: post.slug }),
    };
    const { NEXT_PUBLIC_CMS } = process.env;

    const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/healer-profile/${slug}`;
    const seoData = await fetch(seoURL).then((r) => r.json());

    return {
      props: {
        healer: postTosend,
        seoData: {
          meta_tags: extractMetaTags(seoData.head),
          jsonLtdScheam: extractScriptTags(seoData.head),
        },
        isPremium,

        ...(await serverSideTranslations(locale!, ['common'])),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        post: null,
        notFound: true,
        ...(await serverSideTranslations(locale!, ['common'])),
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_WP_API + '/wp/v2/healer-profile?per_page=12'
  ).then((r) => r.json());

  const paths = posts.map((post: any) => {
    return {
      params: { slug: post.slug.toString() },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};
