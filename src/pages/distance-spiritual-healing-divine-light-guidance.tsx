import Healers from '@/components/healingServices/Healers';
import Testimonials from '@/components/healingServices/Testimonials';
import PricingOptions from '@/components/healingServices/intergral-healing/PricingOptions';
import { getLayout } from '@/components/layouts/layout';
import SeoByRankMath from '@/components/products/SEO';
import Accordion from '@/components/ui/accordion';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useCart } from '@/store/quick-cart/cart.context';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
function DistaneSpritualHealing(props: any) {
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
    <section className="bg-white">
      <SeoByRankMath {...props.seoData} />

      <section
        style={{
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Main-Banner.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'contain',
          backgroundSize: '100%',
        }}
        className="  min-h-[500px]     bg-no-repeat  pb-0"
      >
        <section className=" flex justify-center py-32 lg:px-32">
          <section className="text-center text-white opacity-100">
            <h1 className="text-[45px] font-semibold ">
              DISTANCE SPIRITUAL HEALING & DIVINE LIGHT GUIDANCE
            </h1>
            <p className="my-5 text-[20px] font-semibold">
              Restore your inner self with the power of spiritual healing &
              divine light guidance.
            </p>
          </section>
        </section>
      </section>
      <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="post-content"></div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 ">
            <h1 className="text-center text-3xl font-bold underline">
              What is Spiritual Healing & Divine Light Guidance?
            </h1>
            <p className="my-4 text-[18px]">
              Spiritual healing is a form of ancient healing modality that uses
              divine light guidance along with intuitive powers and psychic
              abilities. It is one of the most powerful natural healing
              modalities that guides individuals & connects them with divine
              sources of nature. This psychic healing offers clarity & heals
              with the intuitive powers. It encourages spiritual growth by
              empowering aura and promotes a highly vibrational universal
              energy. Emphasizing the spirit level, spiritual healing takes care
              of the blockages that hinder a spirit from witnessing the
              awakening.
            </p>
            <p className="my-4 text-[18px]">
              This ancient form of healing involves a healer with supreme faith
              in mystic energies and divine light energy. The healer further
              transfers the spiritual energies & frequencies to the seeker &
              encourages the soul for spiritual awakening. Performed
              collectively with psychic & intuitive healing, the spiritual
              healing along with divine light guidance guides the soul towards
              light and offers energy drawn from the cosmic environment for
              auric transformation. Performed at the spirit level, spiritual
              healing is intended towards offering the seeker spiritual
              enlightenment and a right balance in all aspects of life.
            </p>
          </div>
        </div>
        <div className="my-16  ">
          <h4 className="text-center text-2xl font-bold underline  ">
            In this Healing Session, the Healer will help you:
          </h4>
          <div className="my-12 grid grid-cols-2 gap-5">
            <div>
              <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Image-1.jpg" />
            </div>
            <div>
              <p className="text-[30px] font-semibold">
                Signs that say you need a spiritual healing & divine light
                guidance
              </p>
              <div className="my-4 flex items-center gap-4 font-semibold ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  id="flower_1_"
                  data-name="flower (1)"
                  width="42.029"
                  height="30"
                  viewBox="0 0 42.029 30"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      y1="0.426"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#166ab4"></stop>
                      <stop offset="1" stop-color="#0b355a"></stop>
                    </linearGradient>
                    <linearGradient
                      id="linear-gradient-2"
                      x1="0.5"
                      y1="0.354"
                      xlinkHref="#linear-gradient"
                    ></linearGradient>
                  </defs>
                  <path
                    id="Path_12784"
                    data-name="Path 12784"
                    d="M41.989,18.128a.641.641,0,0,0-.586-.586c-.305-.026-7.194-.5-12.829,2.706-1.719-6.2-6.889-10.709-7.15-10.938a.635.635,0,0,0-.827,0c-.261.229-5.431,4.737-7.15,10.938C7.818,17.047.923,17.518.624,17.543a.636.636,0,0,0-.586.586c-.032.414-.7,10.193,5.049,15.936,4.584,4.6,11.746,5.093,14.656,5.093.548,0,.942-.013,1.139-.026a.865.865,0,0,0,.127.019.853.853,0,0,0,.127-.019c.2.012.592.026,1.139.026,2.91,0,10.066-.5,14.656-5.093C42.683,28.322,42.022,18.543,41.989,18.128Zm-36,15.039c-4.578-4.578-4.75-12.243-4.7-14.376,1.776-.045,7.392.07,11.862,2.763a14.069,14.069,0,0,0-.255,2.6c0,6.252,4.368,11.5,6.532,13.72C16.515,37.827,10.048,37.229,5.985,33.167Zm15.025,4.482c-1.541-1.471-6.844-7.01-6.844-13.491s5.3-12.021,6.844-13.5c1.541,1.477,6.845,7.01,6.845,13.5S22.552,36.178,21.011,37.649ZM36.03,33.167c-4.049,4.056-10.518,4.654-13.427,4.711,2.159-2.222,6.526-7.469,6.526-13.72a13.958,13.958,0,0,0-.255-2.6c4.47-2.687,10.1-2.808,11.868-2.763C40.793,20.924,40.621,28.583,36.03,33.167Z"
                    transform="translate(0.001 -9.158)"
                    fill="#fff"
                  ></path>
                  <path
                    id="Path_12785"
                    data-name="Path 12785"
                    d="M35.264,24.943c0,6.475-5.3,12.02-6.846,13.491-1.541-1.471-6.845-7.009-6.845-13.491s5.3-12.021,6.845-13.5C29.96,12.923,35.264,18.456,35.264,24.943Z"
                    transform="translate(-7.407 -9.943)"
                    fill="url(#linear-gradient)"
                  ></path>
                  <path
                    id="Path_12786"
                    data-name="Path 12786"
                    d="M36.7,38.2c-4.049,4.057-10.518,4.655-13.427,4.712,2.159-2.223,6.526-7.47,6.526-13.723a13.963,13.963,0,0,0-.255-2.6c4.47-2.688,10.1-2.809,11.868-2.764C41.462,25.957,41.29,33.618,36.7,38.2Zm-16.6,4.712c-2.91-.051-9.377-.65-13.44-4.712-4.578-4.579-4.75-12.246-4.7-14.379,1.776-.045,7.392.07,11.862,2.764a14.074,14.074,0,0,0-.255,2.6C13.563,35.445,17.93,40.7,20.095,42.915Z"
                    transform="translate(-0.668 -14.194)"
                    fill="url(#linear-gradient-2)"
                  ></path>
                </svg>
                <p className="text-[18px]">
                  Suffering from physical, emotional or mental imbalances
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="2xl:px-52">
        <p className="text-center text-[30px] font-semibold text-darkBlue">
          Benefits
        </p>
        <p className="my-6 text-center">
          Spiritual Healing is non-invasive healing performed with the sole
          intention of finding the right balance in all aspects of life.
          Emanating at the spirit level, the divine light guidance offers with a
          piece of clarity, emotional & mental stability, good health & courage
          to look at life with the right approach.
        </p>
        <div className="grid gap-5">
          <div className="my-4 flex items-center gap-4 font-semibold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="flower_1_"
              data-name="flower (1)"
              width="42.029"
              height="30"
              viewBox="0 0 42.029 30"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  y1="0.426"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#166ab4"></stop>
                  <stop offset="1" stop-color="#0b355a"></stop>
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="0.5"
                  y1="0.354"
                  xlinkHref="#linear-gradient"
                ></linearGradient>
              </defs>
              <path
                id="Path_12784"
                data-name="Path 12784"
                d="M41.989,18.128a.641.641,0,0,0-.586-.586c-.305-.026-7.194-.5-12.829,2.706-1.719-6.2-6.889-10.709-7.15-10.938a.635.635,0,0,0-.827,0c-.261.229-5.431,4.737-7.15,10.938C7.818,17.047.923,17.518.624,17.543a.636.636,0,0,0-.586.586c-.032.414-.7,10.193,5.049,15.936,4.584,4.6,11.746,5.093,14.656,5.093.548,0,.942-.013,1.139-.026a.865.865,0,0,0,.127.019.853.853,0,0,0,.127-.019c.2.012.592.026,1.139.026,2.91,0,10.066-.5,14.656-5.093C42.683,28.322,42.022,18.543,41.989,18.128Zm-36,15.039c-4.578-4.578-4.75-12.243-4.7-14.376,1.776-.045,7.392.07,11.862,2.763a14.069,14.069,0,0,0-.255,2.6c0,6.252,4.368,11.5,6.532,13.72C16.515,37.827,10.048,37.229,5.985,33.167Zm15.025,4.482c-1.541-1.471-6.844-7.01-6.844-13.491s5.3-12.021,6.844-13.5c1.541,1.477,6.845,7.01,6.845,13.5S22.552,36.178,21.011,37.649ZM36.03,33.167c-4.049,4.056-10.518,4.654-13.427,4.711,2.159-2.222,6.526-7.469,6.526-13.72a13.958,13.958,0,0,0-.255-2.6c4.47-2.687,10.1-2.808,11.868-2.763C40.793,20.924,40.621,28.583,36.03,33.167Z"
                transform="translate(0.001 -9.158)"
                fill="#fff"
              ></path>
              <path
                id="Path_12785"
                data-name="Path 12785"
                d="M35.264,24.943c0,6.475-5.3,12.02-6.846,13.491-1.541-1.471-6.845-7.009-6.845-13.491s5.3-12.021,6.845-13.5C29.96,12.923,35.264,18.456,35.264,24.943Z"
                transform="translate(-7.407 -9.943)"
                fill="url(#linear-gradient)"
              ></path>
              <path
                id="Path_12786"
                data-name="Path 12786"
                d="M36.7,38.2c-4.049,4.057-10.518,4.655-13.427,4.712,2.159-2.223,6.526-7.47,6.526-13.723a13.963,13.963,0,0,0-.255-2.6c4.47-2.688,10.1-2.809,11.868-2.764C41.462,25.957,41.29,33.618,36.7,38.2Zm-16.6,4.712c-2.91-.051-9.377-.65-13.44-4.712-4.578-4.579-4.75-12.246-4.7-14.379,1.776-.045,7.392.07,11.862,2.764a14.074,14.074,0,0,0-.255,2.6C13.563,35.445,17.93,40.7,20.095,42.915Z"
                transform="translate(-0.668 -14.194)"
                fill="url(#linear-gradient-2)"
              ></path>
            </svg>
            <p className="text-[18px]">
              Suffering from physical, emotional or mental imbalances
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto   w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="text-center text-[30px] font-semibold text-darkBlue ">
          How will Distance Spiritual Healing and Divine Light Guidance take
          place?
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
        <div id="buynow" className="grid px-32 lg:grid-cols-12">
          <div className="col-span-6 flex justify-center">
            <img
              src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Pricing-Card.jpg"
              className="rounded-lg shadow-downfall-lg"
              width={500}
            />
          </div>
          <div className="col-span-6">
            <p className="mb-6 text-[25px] font-semibold">
              Distance Spiritual Healing & Divine Light Guidance
            </p>
            <p className="my-4 text-[20px]">
              Embrace life with a guided approach by divine light guidance &
              spiritual healing.
            </p>
            <p className="my-4 text-[18px]">
              Powerful Healing for 7 days (7 Sessions)
            </p>
            <p className="my-4 text-[18px]">
              Price: ₹5,999 (Incl. GST) / US $99
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
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Spiritual-Healing-Banner-2.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'contain',
          backgroundSize: '100%',
        }}
        className="  flex   min-h-[300px] items-center justify-center  bg-no-repeat  pb-0"
      >
        <div className="grid gap-8">
          <p className="text-[30px] font-bold text-white">
            Restore, Connect, And Protect Your Soul With <br /> Spiritual
            Healing & Divine Light Guidance
          </p>
          <div className="flex justify-center">
            <button className="rounded-lg bg-white px-10 py-4 text-[18px] font-semibold text-darkBlue shadow-downfall">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const url = `https://yourspiritualrevolution.org/wp-json/wp/v2/pages/26796`;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-spiritual-healing-divine-light-guidance`;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/distance-spiritual-healing-and-divine-light-guidance/`;
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
DistaneSpritualHealing.getLayout = getLayout;
export default DistaneSpritualHealing;
