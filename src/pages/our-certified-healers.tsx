import Image from 'next/image';
import Link from 'next/link';
import { getLayout } from '@/components/layouts/layout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
export const getStaticProps = async ({ locale }: any) => {
  const healers = await fetch(
    process.env.NEXT_PUBLIC_WP_API + '/wp/v2/healer-profile?per_post=100'
  ).then((r) => r.json());
  const { NEXT_PUBLIC_CMS } = process.env;

  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/our-certified-healers`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      healers: healers,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
function OurcertifiedHealers(props: any) {
  return (
    <>
      <SeoByRankMath {...props.seoData} />
      <div className="container mx-auto   bg-white px-4 lg:px-36">
        <h1 className="my-8 text-center text-3xl font-bold">
          OUR CERTIFIED HEALERS
        </h1>
        <div className="grid gap-8 lg:grid-cols-3">
          {props.healers.map((healer: any) => (
            <div className="rounded-2xl border p-4 shadow-xl " key={healer.id}>
              {healer.x_metadata.healing_membership !== 'Free Member' && (
                <div className="flex justify-end ">
                  <p className="flex items-center gap-1 rounded-sm bg-[#DCB900] p-1 text-xs text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    Premium Memeber
                  </p>
                </div>
              )}

              <div className="mt-4 flex justify-center">
                <Image
                  className="rounded-full object-contain"
                  width={100}
                  height={100}
                  alt={healer.title.rendered}
                  src={healer.x_featured_media_large}
                />
              </div>
              <div className="my-2 text-center font-semibold">
                <p>{healer.title.rendered}</p>
              </div>
              <div className="my-2 text-center text-sm font-semibold text-[#053560]">
                {Object.keys(healer.x_metadata.healer_therapies)
                  .map((key) => {
                    if (healer.x_metadata.healer_therapies[key] === 'true') {
                      return key;
                    }
                  })
                  .filter((t) => t !== undefined)
                  .map((service) => (
                    <span className="p-1">{service}</span>
                  ))}
              </div>
              <div className="flex justify-center">
                <Link href={`/healer-profile/${healer.slug}`}>
                  <button className="rounded-full bg-[#053560] px-4 py-2 text-white outline-none">
                    View Full Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

OurcertifiedHealers.getLayout = getLayout;
export default OurcertifiedHealers;
