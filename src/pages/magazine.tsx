import dynamic from 'next/dynamic';
const EmbeddedPDF = dynamic(() => import('@/components/Embed/EmbedPdf'), {
  ssr: false,
});
import { getLayout } from '@/components/layouts/layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';

function Magazines(props: any) {
  const { magazines } = props;
  const pdfUrl =
    'https://yourspiritualrevolution.org/wp-content/uploads/2022/09/Your-Spiritual-Revolution-September-2022.pdf';

  return (
    <div className="0 mx-auto w-full max-w-1920   bg-white px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-64">
      <SeoByRankMath {...props.seoData} />
      <section>
        <h1 className="my-4 text-center text-3xl text-[#166ab4]">
          Current Issue
        </h1>
        <section>
          <EmbeddedPDF url={pdfUrl} />
        </section>
      </section>
      <h2 className="my-4 text-center text-3xl text-[#166ab4]">Past Issues</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 ">
        {magazines && magazines.length > 0
          ? magazines.map((magazine: any) => (
              <Link href={`/blog/${magazine.slug}`}>
                <div className="hover:cursor-pointer">
                  <div className="flex items-center justify-center">
                    <Image
                      height={400}
                      className="rounded-md"
                      width={340}
                      src={magazine.featuredImg?.large}
                    />
                  </div>
                </div>
              </Link>
            ))
          : null}
      </div>

      <section>
        <div className="my-8 flex justify-center">
          <Image
            src={
              'https://yourspiritualrevolution.org/wp-content/uploads/elementor/thumbs/Reiki-Healing-Ad-Image-pqagozccmbyvc9md6e25kjain808d7ezugeky0602w.jpg'
            }
            width={1020}
            height={100}
          />
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const url = process.env.NEXT_PUBLIC_WP_API + '/wpr/v1/category/issues';
  const data = await fetch(url).then((r) => r.json());
  const { NEXT_PUBLIC_CMS } = process.env;

  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/spiritual-magazine/`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      magazines: data,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
Magazines.getLayout = getLayout;

export default Magazines;
