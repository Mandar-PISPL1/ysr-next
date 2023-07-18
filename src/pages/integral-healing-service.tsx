import Healers from '@/components/healingServices/Healers';
import Testimonials from '@/components/healingServices/Testimonials';
import PricingOptions from '@/components/healingServices/intergral-healing/PricingOptions';
import { getLayout } from '@/components/layouts/layout';
import Accordion from '@/components/ui/accordion';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { faqs, integralModalitesArr } from '../seed/integral-healing';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import StillHaveQuery from '@/components/healingServices/Query';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
function IntegralHealing(props: any) {
  const { goldProduct, silverProduct, broonzeProduct } = props;
  const { openModal } = useModalAction();
  function onModalClick(data: any) {
    openModal('INTEGRAL_HEALING_MODAL', data);
  }
  return (
    <section className="bg-white">
      <SeoByRankMath {...props.seoData} />
      <section
        style={{
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/02/integral-healing-banner.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%',
        }}
        className="  bg-cover   bg-center bg-no-repeat pb-0  lg:min-h-[400px]"
      >
        <section className=" flex justify-center lg:py-32 lg:px-32">
          <section className="text-center text-white opacity-100">
            <h1 className="text-[45px] font-semibold">Integral Healing</h1>
            <p className="my-5 text-[20px] font-semibold">
              Heal your physical, mental, emotional & spiritual distress with a
              holistic approach through Integral healing.
            </p>
          </section>
        </section>
      </section>
      <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
          <div className=" lg:col-span-6">
            <Image
              width={500}
              height={600}
              src="https://yourspiritualrevolution.org/wp-content/uploads/2021/07/second-image.jpg"
              className="rounded-lg"
            />
          </div>
          <div className="lg:col-span-6">
            <h1 className="text-3xl font-bold">What is Integral healing?</h1>
            <p className="my-4 text-[18px]">
              A human body is an extraordinarily complex structure, functioning
              on many systems running simultaneously as one unit. Since the
              working of this system is dependent on the functionality of
              others, dysfunction in any part causes distress and impacts the
              working of other parts. Imbalanced feelings and emotions add an
              invisible subtle structure of aura, imbalanced chakra, and our
              body becomes an overly complex machine built by nature.
            </p>
            <p className="my-4 text-[18px]">
              And to ensure the health & wellness of such a complex structure,
              many therapies and modalities have emerged as solutions to tackle
              specific issues from a unique perspective. Looking at the human
              body from this integral perspective, we at Your Spiritual
              Revolution offer a unique Health and Wellness Integral Healing
              Package that includes several healing modalities for physical,
              mental, and spiritual health and wellness. All our healers are
              personally selected and tested by founder Amitt Parikh. We work
              with only advanced healers with several years of professional
              experience, successful healings apart from being highly
              spiritually evolved.
            </p>
          </div>
          <p className="col-span-12 my-4 text-[18px]">
            Health & Wellness healing is a form of alternative therapies that
            promotes overall good health. It is associated with the well-being
            of all aspects of health, like physical health, mental health,
            emotional health & spiritual health. It helps us address and rectify
            the issues that we neglect in general. Health & wellness healing
            removes blockages from the path of good health and prosperity.
            Health and wellness-related issues can be addressed and taken care
            of in any way. Yet, removal of problems & blockages through healing
            is the most profound and effective way. There are many ways of
            removing blockages from health and wellness through healing like
            Aura Healing, Chakra Healing, Emotion Code, Body Code, Reiki
            Healing, Pranic Healing, Theta Healing
          </p>
        </div>
      </div>
      <div className="  bg-[#F6FBFF] py-8 2xl:px-52">
        <h4 className="text-center text-3xl font-semibold text-[#0A2D4D]">
          Included Healing Modalities
        </h4>
        <div className="grid grid-cols-2 gap-6 p-6 lg:grid-cols-5">
          {integralModalitesArr.map((modal) => (
            <div onClick={() => onModalClick({ ...modal })}>
              <img
                src={modal.main_src}
                width={150}
                height={200}
                className="cursor-pointer transition-all
                 delay-150 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto   w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="my-8  ">
          <PricingOptions
            allProducts={[{ goldProduct, silverProduct, broonzeProduct }]}
          />
        </div>

        <div className="grid justify-center gap-8">
          <Healers />
          <Testimonials />
        </div>
      </div>

      <section className="my-8">
        <div className="bg-[#E9F5FF] py-8 lg:px-52">
          <div className="grid justify-center gap-8 md:grid-cols-3">
            <div className="text-[#166AB4]">
              <p>We have a panel of</p>
              <p className="text-[30px] font-semibold">10+ Certified Healers</p>
            </div>
            <div className="text-[#166AB4]">
              <p>Working</p>
              <p className="text-[30px] font-semibold">Since 2007</p>
            </div>
            <div className="text-[#166AB4]">
              <p>We Are</p>
              <p className="text-[30px] font-semibold">
                ISO 9001:2015 Certified
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-2 2xl:px-52">
        <p className="text-center text-[24px] font-semibold text-[#616AB4]">
          Frequently Asked Questions
        </p>
        <div className="py-4">
          <div className="grid gap-2 md:grid-cols-2">
            <Accordion items={[...faqs]} translatorNS="en" />
          </div>
        </div>
      </section>
      <div className="bg-white">
        <StillHaveQuery />
        <section className="bg-[#F8FCFF] py-4 px-6 2xl:px-52">
          <p className="text-[34px] font-semibold">
            Significance of Integral Healing In Your Life
          </p>
          <div className="my-4 grid gap-8 text-[18px]">
            <p>
              The human body is a complex structure that functions on many
              systems that run simultaneously. The functioning of each system is
              dependent on others, and dysfunction in part of the body impacts
              the working of other parts. Also, if you have imbalanced feelings,
              add an invisible aura around you. Imbalanced chakras make our body
              a complex machine.
            </p>
            <p>
              There are many therapies and modalities that help in tackling
              specific issues. We offer unique integral healing that consists of
              healing modalities for physical, mental, and spiritual health as
              well as wellness.
            </p>
            <p>
              Our integrated therapists are personally chosen and tested by
              founder Amitt Parikh. We work with advanced healers for living
              integrity that are professionals with years of experience. They
              have a successful track record for healing apart from being highly
              spiritually evolved.
            </p>
          </div>
        </section>
        <section className="   flex flex-wrap gap-8 bg-[#F8FCFF]">
          <div className="max-w-min">
            <img
              className="lg:max-h-[500px] lg:max-w-[500px]"
              src="https://yourspiritualrevolution.org/wp-content/uploads/2021/07/last-cta-image.jpg"
            />
          </div>
          <div className="px-4 py-6">
            <p className="text-[50px] font-bold ">
              Take your step towards <br /> Integral Evolution now!
            </p>
            <p className="text-[30px] font-semibold">
              Enroll now and evolve spiritually
            </p>
            <button
              style={{
                backgroundImage: `linear-gradient(90deg, #0A2D4D 0%, #166AB4 100%)`,
                backgroundColor: 'transparent',
                fontWeight: '500',
                padding: `20px 160px  `,
              }}
              className="my-4 rounded-md text-[28px] text-white"
            >
              Buy Now
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const url = `https://yourspiritualrevolution.org/wp-json/wp/v2/pages/26796`;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/integral-healing-service/`;
  const data = await fetch(url).then((r) => r.json());
  const seoData = await fetch(seoURL).then((r) => r.json());
  const broonzeProductUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/integral-healing-bronze/`;
  const silverProductUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/integral-healing-silver/`;
  const goldProductUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/integral-healing-gold/`;
  const broonzeProduct = await fetch(broonzeProductUrl).then((r) => r.json());
  const silverProduct = await fetch(silverProductUrl).then((r) => r.json());
  const goldProduct = await fetch(goldProductUrl).then((r) => r.json());
  return {
    props: {
      data,
      goldProduct,
      silverProduct,
      broonzeProduct,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
IntegralHealing.getLayout = getLayout;
export default IntegralHealing;
