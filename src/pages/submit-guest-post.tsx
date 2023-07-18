import { getLayout } from '@/components/layouts/layout';
import { GetStaticProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/submit-guest-post`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
function Submitguestpost(props: any) {
  return (
    <>
      <SeoByRankMath {...props.seoData} />
      <div>
        <Image
          src={`https://yourspiritualrevolution.org/wp-content/uploads/2022/12/Submit-Guest-Post-Banner.jpg`}
          width={2040}
          height={600}
          className="pb-0"
        />
      </div>

      <div className="mx-auto w-full max-w-1920 bg-white px-4 lg:px-32 xl:px-64  ">
        <section>
          <h4 className="my-8 text-center text-xl font-bold underline lg:text-3xl">
            Join us as a Guest Post-Writer today!
          </h4>
          <p>
            Your Spiritual Revolution brings you a huge opportunity to write,
            get published and increase your reach! If you’re interested in
            spreading the word about your business, or brand or if you’re
            looking to give out insights and impart knowledge to our worldwide
            audience, join us today.
          </p>
          <p className="my-4">
            We are accepting Guest Postings on our website in multiple
            categories. You can share your unique content with us through paid
            guest posts. We will provide you with additional backlinks along
            with worldwide readership. Read on to learn more about our
            submission guidelines and how you can benefit from this
            collaboration.
          </p>
        </section>
        <section className="my-8">
          <h4 className="my-8 text-center text-xl font-bold underline lg:text-3xl">
            We are accepting unique content in the below categories
          </h4>
          <p>
            We’re keen on posting original and quality content that can leave an
            everlasting impact and benefit both you and our readers. Here’s a
            brief list of topics you can write about
          </p>
          <p className="my-4">
            <div className="grid gap-0 px-8 lg:grid-cols-3 lg:gap-8 lg:px-0 ">
              <ul>
                {c1.map((t) => (
                  <li className="my-2 list-disc">{t}</li>
                ))}
              </ul>
              <ul>
                {c2.map((t) => (
                  <li className="my-2 list-disc">{t}</li>
                ))}
              </ul>
              <ul>
                {c3.map((t) => (
                  <li className="my-2 list-disc">{t}</li>
                ))}
              </ul>
            </div>
          </p>
        </section>
        <section>
          <h3 className="my-8 text-center text-xl font-bold underline lg:text-3xl">
            Guest Posting Options
          </h3>
          <p className="my-4 leading-7">
            We believe in inclusivity and welcome everyone. If you are a blogger
            or a business owner or someone willing to share your journey and
            experiences with others, this is the best space for you. As a
            contributing writer on Your Spiritual Revolution, you’ll get access
            to our worldwide readers and also increase your viewership.
          </p>
          <div className="grid items-center  justify-center gap-8 lg:flex">
            {w.map((plan) => (
              <div className="   self-center border shadow-2xl">
                <div
                  style={{
                    backgroundImage: `linear-gradient(180deg, #166AB4 0%, #0B355A 100%)`,
                  }}
                  className="py-4 text-center text-2xl font-semibold uppercase text-white"
                >
                  {plan.title}
                </div>
                <div className="my-4 text-center text-xl font-semibold text-[#0A2D4D]">
                  WHAT WILL YOU GET
                </div>
                <div className="flex  justify-center  px-4">
                  <ul className="flex flex-col gap-4 py-4">
                    {benefits.map((b) => (
                      <li
                        className={`flex items-center gap-4  ${
                          plan.benefits.indexOf(b) > -1 ? null : 'text-muted'
                        } `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={`h-4 w-4 flex-shrink-0 ${
                            plan.benefits.indexOf(b) > -1
                              ? 'text-green-600 '
                              : 'text-muted'
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="  flex justify-center border-t py-2">
                  <button className="my-1 rounded-md bg-[#0A2D4D] px-16 py-3 text-white">
                    POST YOUR ARTICLE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <br />
        <p className="my-8 text-center lg:text-xl">
          <strong> Note</strong>: We are also providing a do-follow link to
          existing articles. Contact us for more details.
        </p>
        <section className="  font-sans ">
          <section className="bg-[#E4E4E4] px-4 lg:py-8 lg:px-16 lg:text-[18px]">
            <h4 className=" py-4 font-semibold lg:text-2xl">
              Our Submission Guidelines
            </h4>
            <p>
              Kindly follow these guidelines if you wish to write for Your
              Spiritual Revolution.
            </p>
            <ul className="py-4 pl-8">
              {guidelines.map((g) => (
                <li className="my-2 list-disc">{g}</li>
              ))}
            </ul>
            <p className="py-4">
              <span className="font-bold text-red-600"> NOTE:</span> Once you
              submit the article, we reserve the right to edit the content for
              grammatical errors. We also reserve the right to reject or modify
              the content without any prior notification.
            </p>
          </section>
          <section className="my-16 bg-[#E4E4E4] px-4 py-4 lg:py-8 lg:px-16 lg:text-[18px]">
            <h5 className="mb-6 lg:text-2xl  ">We Can Write For You</h5>
            <p>
              Want to publish an article but don’t know where to start? We got
              you covered! Get SEO-optimized, 100% unique & high-quality
              articles written by our experienced content writers. We can curate
              customized articles for you to publish on Your Spiritual
              Revolution along with additional backlinks on the post.
            </p>
            <p className="my-4">
              Contact us for more details at{' '}
              <a
                className="text-blue-600"
                href="mailto:amitt@YourSpiritualRevolution.org"
              >
                amitt@YourSpiritualRevolution.org
              </a>
            </p>
          </section>
        </section>

        {/* <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: props?.data?.content.rendered }}
        /> */}
      </div>
    </>
  );
}
const guidelines = [
  `For free guest-post: the article should be between 500-600 words only.
  `,
  `For link exchange- the article can be up to 1000 words.
  `,
  `For paid guest posts: the article can be up to 1000-2000 words.
  `,
  `Your article should be well written in English language only. It should be free from grammatical errors.
  `,
  `The content should be 100% original and unique. Your article should not be published anywhere else. We don’t publish any kind of plagiarized content.
  `,
  `Ensure that the articles are relevant to the topics given above.
  `,
  `Ensure to give a suitable and attractive title and add relevant keywords to the post. Also, structure the article with proper headings and sub-headings.
  `,
  `The articles need to be submitted in MS Word, Doc or. Docx format only.
  `,
  `You can add an author bio underneath the article and links to your website and social media pages.
  `,
  `You can also share your contribution on your website, social media pages, in your newsletter, or in an email and tag @yourspiritualrevolution.
  `,
];

const w = [
  {
    title: 'FREE GUEST-POST',
    subTitle: 'WHAT WILL YOU GET',
    benefits: [
      'Article Submission (up to 600 words only).',
      'Access to worldwide readers.',
      'Free promotion on the website and social media.',
    ],
  },
  {
    title: 'LINK EXCHANGE',
    subTitle: 'WHAT WILL YOU GET',
    benefits: [
      'Article Submission (up to 600 words only).',
      'Access to worldwide readers.',
      'Free promotion on the website and social media.',
      'Link exchange on your website/ social media platform.',
    ],
  },
  {
    title: 'PAID GUEST-POST',
    subTitle: 'WHAT WILL YOU GET',
    benefits: [
      'Article Submission (up to 600 words only).',
      'Access to worldwide readers.',
      'Free promotion on the website and social media.',
      'Link exchange on your website/ social media platform.',
      'Two Backlinks.',
      'Permanent do-follow link.',
    ],
  },
];
const benefits = [
  'Article Submission (up to 600 words only).',
  'Access to worldwide readers.',
  'Free promotion on the website and social media.',
  'Link exchange on your website/ social media platform.',
  'Two Backlinks.',
  'Permanent do-follow link.',
];
const c1 = [
  `
Spirituality
`,
  `Health & Wellness
`,
  `Holistic Lifestyle
`,
  `Energy Healing
`,
  `Alternative Therapies
`,
  `Crystals & Gemstones
`,
];

const c2 = [
  `
  Science and Spirituality
  `,
  `Meditation and Yoga

`,
  `Self-Help & Self Development

`,
  `Human Psychology

`,
  `Beauty & Jewelry

`,
  `Home Decor

`,
];
const c3 = [
  `Spiritual Arts

  `,
  `Spiritual Books & Magazines


`,
  `Mysticism

`,
  `Spiritual Enlightenment


`,
  `Mind-Body Dualism


`,
];
Submitguestpost.getLayout = getLayout;
export default Submitguestpost;
