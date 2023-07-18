import Blog from '@/components/home/Blog';
import Seo from '@/components/seo/seo';
import { getLayout } from '@/components/layouts/layout';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const posts = await fetch(
    process.env.NEXT_PUBLIC_WP_API + '/wpr/v1/posts'
  ).then((r) => r.json());
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/spiritual-blog`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      posts: posts,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
function SpiritualBlog(props: any) {
  return (
    <>
      <SeoByRankMath {...props.seoData} />

      <div className="container mx-auto  bg-white px-4  lg:px-28">
        <Blog posts={props.posts} />
      </div>
    </>
  );
}

SpiritualBlog.getLayout = getLayout;

export default SpiritualBlog;
