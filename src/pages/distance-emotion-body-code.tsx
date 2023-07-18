import { getLayout } from '@/components/layouts/layout';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Processes from '@/components/healingServices/Processes';
import Testimonials from '@/components/healingServices/Testimonials';
import PricingBanner from '@/components/healingServices/PricingBanner';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
const benefits = [
  `Body & emotion code has proven effective in reducing chronic pain like neck pain, back pain, knee pain, etc.

  `,
  `Research shows that emotion code releases stress and anxiousness

  `,
  `People suffering from addiction or lousy habit problems can get help through these services

  `,
  `Body code helps to remove toxins present in the body

  `,
  `Ensures the free flow of energy and balances the chakras

  `,
  `Improves the overall life and wellbeing of the individual

  `,
];
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;

  const url = `https://yourspiritualrevolution.org/wp-json/wp/v2/pages/26796`;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/distance-emotion-code-and-body-code/`;
  const product = await fetch(productUrl).then((r) => r.json());
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-emotion-body-code`;
  const data = await fetch(url).then((r) => r.json());
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      product,
      data,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
function DistanceEmotionbodyCode(props: any) {
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
    <div className="bg-white">
      <SeoByRankMath {...props.seoData} />
      <section
        style={{
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Emotion-Body-Code-Banner-Image-2.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'cover',
        }}
        className="  min-h-[500px]     bg-no-repeat  pb-0"
      >
        <section className=" flex justify-center py-32 lg:px-32">
          <section className="text-center text-white opacity-100">
            <h1 className="text-[45px] font-semibold ">
              DISTANCE EMOTION & BODY CODE HEALING
            </h1>
            <p className="my-5 text-center text-[20px] font-semibold">
              Unlock your trapped emotions to alleviate your physical &
              emotional discomfort with Emotion Code & Body Code Integral
              Healing.
            </p>
            <div className="my-8 flex items-center justify-center gap-8">
              <button className=" rounded-[40px] bg-white px-8 py-2 text-[20px] font-semibold text-[#0A2D4D] ">
                Learn More
              </button>
              <button className=" first:  rounded-[40px] bg-[#166ab4] px-8 py-2 text-[20px] font-semibold text-[#fff] ">
                Buy Now
              </button>
            </div>
          </section>
        </section>
      </section>
      <section className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Emotion-Code-Img.jpg" />
          </div>
          <div className=" flex flex-col gap-4  text-[18px]">
            <p className="text-[34px] font-semibold text-darkBlue">
              What is Emotion Code?
            </p>
            <p>
              It is a powerful healing method that involves identifying and
              releasing negative emotions trapped in the human subconscious mind
              from various past life experiences. But, unfortunately, these
              trapped emotions often cause pain, self-sabotage, emotional
              problems, and all kinds of malfunction and disease that may result
              in acute physical pain, rage & anger, stress, anxiety, depression,
              etc.
            </p>
            <p>
              Emotion Code is a gentle, non-invasive healing approach where the
              energy of trapped emotions is distinguished and not merely the
              circumstance provoking it. This technique successfully eliminates
              the emotional baggage by clearing all the negative emotions stored
              from earlier life that impacts the behavioural pattern in an
              unhealthy way.
            </p>
            <p>
              Healing the wounds through emotion code healing opens the door for
              many significant opportunities and makes a person internally
              strong and composed.
            </p>
          </div>
        </div>
        <div className="my-6 grid grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-center gap-4 text-[18px]">
            <p className="  text-[28px] font-semibold text-darkBlue">
              What is Body Code?
            </p>
            <p>
              Body Code healing is a form of natural healing therapy. It
              involves integral healing through energy transformation and
              eliminating toxins that potentially create blockages and keep a
              spirit from evolving physically, emotionally, & spiritually.
            </p>
            <p>
              It removes experiences of past life events that impact health
              aspects negatively. In addition, it successfully removes toxic
              agents like free radicals, chemicals, EMF radiation, etc., that
              probably throw off the body’s balance and block the path towards
              holistic health & abundance. As a result, people suffering from
              chronic muscular pains, prolonged sickness, physical pains like
              joint pains, headaches, backaches, or sometimes pain caused by
              past life events can quickly feel relief through body code
              healing.
            </p>
            <p>
              In addition, body code healing prominently takes care of
              nutrition, improves lifestyle, and works towards the alignment of
              muscles, glands, and organs to remove physical uncertainties.
            </p>
          </div>
          <div>
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Body-Code-Img.jpg" />
          </div>
        </div>
      </section>
      <section className="my-4  2xl:px-52 ">
        <section className="grid     grid-cols-12">
          <div className="col-span-8 flex flex-col justify-center">
            <h3 className="mb-4 font-semibold text-[#4F3838]  lg:text-4xl">
              Are you suffering from following problems?
            </h3>
            <ul className="my-4 ml-8 grid list-disc gap-4 text-xl">
              <li>Emotionally exhausted</li>
              <li>Chronic pains</li>
              <li>Prolonged sickness</li>
              <li>Sleep difficulties</li>
              <li>Trapped in negative emotions</li>
              <li>
                Mentally disturbed & disoriented Mentally disturbed &
                disoriented
              </li>
              <li>Stress & anxiety</li>
            </ul>
          </div>
          <div className="col-span-4">
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/why-Emotion-COde.jpg" />
          </div>
        </section>
        <section className="grid gap-4 text-xl">
          <p>
            Human minds are designed to store emotional pieces of baggage as a
            form of memories for a long time, sometimes forever, be it negative
            or positive. When not taken care of for long periods, these trapped
            emotions & energies can reflect in an extremely negative way. It can
            disrupt physical, emotional, mental & spiritual health.
          </p>
          <p>
            Body code & emotion code healing release these trapped emotions &
            energies and rejuvenate the mind, body, & soul. Mental exhaustion,
            emotional instability, physical pains & sickness due to emotional
            imbalances are some signs that expose the need for integral
            emotional & body code healing.
          </p>
        </section>
      </section>
      <section className="2xl:px-52">
        <p className="text-center text-[38px] font-semibold text-darkBlue">
          Benefits of Distance Aura & Chakra Healing
        </p>
        <p className="my-6 text-center text-[19px]">
          Your Spiritual Revolution offers a combined package of Aura & Chakra
          cleansing that aims to eliminate all the blockages from your aura &
          chakra. It is designed as a well-balanced holistic method that will
          serve you innumerable benefits like.
        </p>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/benifits-of-aura-chakra.jpg" />
          </div>
          <div className="col-span-8 my-8 flex flex-col justify-center gap-8">
            {benefits.map((benefit) => (
              <div className=" flex items-center gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-6 w-6 flex-shrink-0"
                  viewBox="0 0 109 109"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.9"
                      y1="0.131"
                      x2="0.212"
                      y2="0.921"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#166ab4"></stop>
                      <stop offset="1" stop-color="#0a2d4d"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    id="checked"
                    d="M80.154,92.146l-7.629,7.629L97.05,124.3l54.5-54.5-7.63-7.629-46.871,46.6-16.9-16.621ZM146.1,102.5a43.414,43.414,0,1,1-31.609-41.965l8.446-8.448A50.7,50.7,0,0,0,102.5,48,54.5,54.5,0,1,0,157,102.5Z"
                    transform="translate(-48 -48)"
                    fill="url(#linear-gradient)"
                  ></path>
                </svg>
                <div className="text-[22px]">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mx-auto   w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="text-center text-[30px] font-semibold text-darkBlue ">
          How Will Distance Emotion Code & Body Code Work?
        </div>
        <div className="my-8 grid grid-cols-3 gap-6">
          <Processes processes={processes} />
        </div>
        <div className="grid justify-center gap-8">
          <Testimonials />
        </div>
      </div>
      <div className="my-8">
        <PricingBanner onClick={buyNowClickHandler} {...pricingData} />
      </div>
    </div>
  );
}
const pricingData = {
  img_src:
    'https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Emotion-Code-and-Body-Code.jpg',
  data: {
    title: `   Distance Emotion Code & Body Code
    `,
    sub_title: `         Channel the right energy to heal your imbalances through distance emotion & body code.

`,
    session: `           Powerful Healing for 1 Session of Body Code + Emotion Code

`,
    price: `            Price: ₹5,999 (Incl. GST) / US $99

`,
  },
};

const processes = [
  {
    title: `Identify Body & Emotional imbalances

    `,
    content: `Our healers & practitioners will first identify the emotional imbalances and energy blockages that impact various aspects of your health and wellbeing.


  `,
  },
  {
    title: `Distance Emotion Code & Body Code Healing

    
    `,
    content: `Healers will then release all the trapped emotions from your energetic field and work on the imbalances present.



  `,
  },
  {
    title: `Emotion Code & Body Code Attainment


    `,
    content: `You will be informed once the distance emotion code & body code session is completed. Our healer will be in touch with you throughout the session and will solve any queries you may have.



  `,
  },
];
DistanceEmotionbodyCode.getLayout = getLayout;

export default DistanceEmotionbodyCode;
