import Healers from '@/components/healingServices/Healers';
import { getLayout } from '@/components/layouts/layout';
import Accordion from '@/components/ui/accordion';
import SeoByRankMath from '@/components/products/SEO';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
function DistanePanicHealing(props: any) {
  const { product } = props;
  const { addItemToCart, isInCart } = useCart();
  const router = useRouter();
  const item = generateCartItem(product, product);
  const buyNowClickHandler = () => {
    if (!isInCart(item.id)) {
      addItemToCart(item, 1);
      router.push('/checkout');
    }
  };
  return (
    <>
      <SeoByRankMath {...props.seoData} />

      <section className="bg-white">
        <section
          style={{
            background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/banner-2.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100%',
          }}
          className="  min-h-[600px]     bg-no-repeat  pb-0"
        >
          <section className=" flex justify-center py-40 lg:px-32">
            <section className="text-center text-black opacity-100">
              <h1 className="text-[30px] font-semibold ">
                HEAL IMBALANCES OF YOUR MIND, BODY & SOUL BY <br />
                CHANNELING DIVINE ENERGY THROUGH PRANIC HEALING.
              </h1>
            </section>
          </section>
        </section>
        <section className=" ">
          <div className="bg-[#E9F5FF] px-52 py-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-[#166AB4]">
                <p>We have a panel of</p>
                <p className="text-[30px] font-semibold">
                  10+ Certified Healers
                </p>
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
        <section className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <img src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/1.jpg" />
            </div>
            <div className="grid text-[18px]">
              <p className="text-[28px] font-semibold text-darkBlue">
                What Is Distance Pranic Healing?
              </p>
              <p>
                Pranic Healing is a non-touch energy treatment that accelerates
                the body’s balance, relieves any form of mental stress, and
                heals the soul integrally. Referred to as life-force, pranic
                healing is an invincible force of energy.{' '}
              </p>
              <p>
                Bringing together the cosmic energy it is performed with
                profound energy healing skills, with an approach to accelerate
                the Pranic force of the body and harmonize the energy
                frequencies. Pranic force, the energy procured from the sun,
                wind & ground effectively heals physical, emotional & spiritual
                imbalances. It shows light to the soul, brings it out of the
                darkness, combats insecurities and blockages that a soul faces.
                With pranic force in the body and performs healing, clearing all
                the blockages through energy transformations.
              </p>
              <p>
                Thus, a perfect balance of modern & ancient approaches towards
                healing, distance pranic healing effectively deals with
                emotional, physical, and mental imbalances.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center gap-4 text-[18px]">
              <p className="text-[28px] font-semibold text-darkBlue">
                How can Distance Pranic Healing help you?
              </p>
              <p>
                Pranic healing involves a non-touch energy transfer that
                rectifies the imbalances. It overcomes negative energy and
                instills ecstasy that aims to improve your daily routine and
                accelerates good health in the long run.
              </p>
              <p>
                Successful completion of Pranic Healing boosts self-esteem,
                reduces stress levels, enhances spiritual growth, and improves
                memory & concentration. It takes care of emotional imbalances
                along with reducing anxiety, stress & insecurities.
              </p>
            </div>
            <div>
              <img src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/2.jpg" />
            </div>
          </div>
        </section>
        <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52"></div>
        <section className="2xl:px-52">
          <p className="text-center text-[30px] font-semibold text-darkBlue">
            Benefits of Pranic Healing
          </p>
          <p className="my-6 text-center">
            Your Spiritual Revolution offers holistic growth through Pranic
            Healing that aims to re-energize the body’s balance, restore inner
            peace, and show light to the soul.
          </p>
          <div className="grid grid-cols-4 gap-5">
            <div className="card rounded-xl bg-bgBlue   py-5 px-4 shadow-2xl">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="_1"
                  data-name="1"
                  className="h-8 w-8"
                  viewBox="0 0 99.568 99.568"
                >
                  <path
                    id="Path_12459"
                    data-name="Path 12459"
                    d="M104.053,20.313a1.847,1.847,0,0,0-1.328-.562c-29.828,0-46.567-14.159-46.733-14.3a1.848,1.848,0,0,0-2.417,0c-.164.142-16.811,14.3-46.731,14.3A1.846,1.846,0,0,0,5,21.659c.024.671,2.873,67.418,49.2,82.816a1.841,1.841,0,0,0,1.162,0c46.329-15.4,49.178-82.145,49.2-82.816A1.84,1.84,0,0,0,104.053,20.313ZM54.784,100.778c-39.094-13.5-45.151-66.63-45.977-77.36C34.649,22.911,50.435,12.488,54.784,9.2c4.35,3.288,20.137,13.711,45.981,14.218C99.943,34.146,93.912,87.272,54.784,100.778Z"
                    transform="translate(-5 -5)"
                    fill="#166ab4"
                  ></path>
                  <path
                    id="Path_12460"
                    data-name="Path 12460"
                    d="M93.381,22.843A1.828,1.828,0,0,0,92.09,22.2C72.066,21,58.661,13.79,52.447,9.586a1.835,1.835,0,0,0-2.065,0C44.168,13.79,30.744,21,10.738,22.2a1.868,1.868,0,0,0-1.309.645A1.928,1.928,0,0,0,9,24.244c1.881,16.927,9.68,57.6,41.764,69.735a1.938,1.938,0,0,0,1.291,0c32.01-12.1,39.865-52.809,41.745-69.735A1.85,1.85,0,0,0,93.381,22.843ZM68.009,55.129a.2.2,0,0,1-.2.2H55.766a.2.2,0,0,0-.2.2V67.576a.2.2,0,0,1-.2.2H47.468a.2.2,0,0,1-.2-.2V55.535a.2.2,0,0,0-.2-.2H35.022a.2.2,0,0,1-.2-.2V47.238a.2.2,0,0,1,.2-.2H47.063a.2.2,0,0,0,.2-.2V34.791a.2.2,0,0,1,.2-.2H55.36a.2.2,0,0,1,.2.2V46.832a.2.2,0,0,0,.2.2H67.806a.2.2,0,0,1,.2.2Z"
                    transform="translate(-1.63 -1.399)"
                    fill="#166ab4"
                  ></path>
                </svg>
              </div>
              <p className="my-1 text-[20px] font-semibold text-darkBlue">
                Boosts immunity and stamina
              </p>
              <p>
                Pranic Healing helps you increase stamina and build a strong
                immune system.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto   w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
          <div className="text-center text-[30px] font-semibold text-darkBlue ">
            How will Distance Pranic Healing take place?
          </div>
          <div className="my-8 grid grid-cols-3 gap-6">
            <div className=" rounded-2xl px-4 py-8 shadow-900">
              <div className="mb-6 flex gap-2 text-[18px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkBlue  text-white">
                  01
                </div>
                <p>Identify Energy Blockages</p>
              </div>
              <div>
                Our healers & practitioners will first identify the reasons &
                causes for the energy blockages & imbalances and how it impacts
                your health & wellbeing.
              </div>
            </div>
            <div className=" rounded-2xl px-4 py-8 shadow-900">
              <div className="mb-6 flex gap-2 text-[18px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkBlue  text-white">
                  01
                </div>
                <p>Identify Energy Blockages</p>
              </div>
              <div>
                Our healers & practitioners will first identify the reasons &
                causes for the energy blockages & imbalances and how it impacts
                your health & wellbeing.
              </div>
            </div>
            <div className=" rounded-2xl px-4 py-8 shadow-900">
              <div className="mb-6 flex gap-2 text-[18px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-darkBlue  text-white">
                  01
                </div>
                <p>Identify Energy Blockages</p>
              </div>
              <div>
                Our healers & practitioners will first identify the reasons &
                causes for the energy blockages & imbalances and how it impacts
                your health & wellbeing.
              </div>
            </div>
          </div>
          <div className="grid justify-center gap-8">
            <Healers />
          </div>
        </div>

        <section className="my-8">
          <div className="my-6 py-6 text-center text-[25px] font-semibold">
            <p className="text-[34px]">
              Find the right energy & balance for your life with <br />{' '}
              spiritually enlightening vibrational frequencies
            </p>
          </div>
          <div className="grid px-32 lg:grid-cols-12">
            <div className="col-span-6 flex justify-center">
              <img
                src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/distance-pranic-healing.jpg"
                className="rounded-lg shadow-downfall-lg"
                width={500}
              />
            </div>
            <div className="col-span-6">
              <p className="mb-6 text-[25px] font-semibold">
                Distance Pranic Healing
              </p>
              <p className="my-4 text-[20px]">
                Connect with your inner-self through Pranic Healing.
              </p>
              <p className="my-4 text-[18px]">
                Powerful Healing for 7 days (7 Sessions)
              </p>
              <p className="my-4 text-[18px]">
                Price: ₹7,999 (Incl. GST) / US $129
              </p>

              <button
                onClick={buyNowClickHandler}
                className="my-4 w-2/3 rounded-full bg-[#166AB4] py-4 text-[20px] text-white"
              >
                Buy Now
              </button>
            </div>
          </div>
        </section>
        <section className="2xl:px-52">
          <p className="text-center text-[24px] font-semibold text-[#616AB4]">
            Frequently Asked Questions
          </p>
          <div className="py-4">
            <div className="grid grid-cols-2">
              <Accordion
                items={[
                  {
                    content: `Dynamic Healer SWipper Will Go Here
              `,
                    title: `Dynamic Healer SWipper Will Go Here
              `,
                  },
                ]}
                translatorNS="en"
              />
            </div>
          </div>
        </section>
        <div className="bg-white">
          <section className="my-8 text-center font-semibold">
            <p className="text-[24px] font-semibold text-[#0A2D4D]">
              Still have a Question?
            </p>
            <p className="my-6">
              If you have any other question that has not been answered in the
              FAQ, please <br /> email us at:{' '}
              <a
                href="mailto: amitt@YourSpiritualRevolution.org"
                className="text-red-500"
              >
                amitt@YourSpiritualRevolution.org
              </a>
            </p>
            <p>
              WhatsApp:
              <a
                className="text-red-500"
                href="https://wa.me/+918591706800/?text=I am interested to know more about Integral Health and Wellness Healing"
              >
                8591706800
              </a>{' '}
            </p>
          </section>
        </div>

        <section
          style={{
            background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/banner-2.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100%',
          }}
          className="  flex   min-h-[300px] items-center justify-center  bg-no-repeat  pb-0"
        >
          <div className="grid gap-8">
            <p className="text-[30px] font-semibold    text-dark">
              Embrace Positivity, Enhance Energy And Evolve Spiritually.
            </p>
            <div className="flex justify-center">
              <button
                onClick={buyNowClickHandler}
                className="rounded-lg bg-white px-10 py-4 text-[18px] font-semibold text-darkBlue shadow-downfall"
              >
                Buy Now
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;

  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-pranic-healing`;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/distance-pranic-healing/`;
  const product = await fetch(productUrl).then((r) => r.json());
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      product,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
DistanePanicHealing.getLayout = getLayout;
export default DistanePanicHealing;
