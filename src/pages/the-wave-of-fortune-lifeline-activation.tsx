import { getLayout } from '@/components/layouts/layout';
import Accordion from '@/components/ui/accordion';

import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-lama-fera-healing`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/gemstone-astrology-consultation`;
  const product = await fetch(productUrl).then((r) => r.json());
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
function Thewaveoffortunelifelineactivation(props: any) {
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
          background: `url("https://yourspiritualrevolution.org/wp-content/uploads/2022/12/Wave-of-Fortune-Lifeline-Activation-Banner.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
        className="hero flex min-h-[300px] items-center justify-start bg-contain bg-no-repeat  py-16 lg:px-32"
      >
        <section className="text-white">
          <h1 className="text-[45px] font-semibold">
            The Wave of Fortune Lifeline Activation
          </h1>
          <p className="my-5 text-[20px] font-semibold">
            Attract luck, wealth & fortune by activating your golden lifeline!
          </p>
          <div className="grid gap-5 text-[20px]">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Open your subconscious mind.</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Cleanse your aura.</p>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p> Align all your seven chakras.</p>
            </div>
          </div>
          <div className="my-8 flex gap-4">
            <button className="rounded-full bg-[#e8c250] px-12 py-4 text-[18px] font-semibold text-black  outline-none">
              <a href="#buynow">Buy Now !</a>
            </button>
          </div>
        </section>
      </section>
      <div className="mx-auto w-full max-w-1920 bg-white   px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-52">
        <div className="post-content"></div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 ">
            <h1 className="text-center text-3xl font-bold underline">
              What is The Wave of Fortune Lifeline Activation?
            </h1>
            <p className="my-4 text-[18px]">
              Fortune is a series of lucky and favourable events that appear
              randomly in your lifetime. You can call it luck or chance. In
              essence, it is a doorway to a reality that you did not manifest in
              this lifetime but just aligned to the positive vibrations that
              match its frequency. These fortunate events will bring you
              abundance. If you don’t ride this wave of fortune, it will simply
              pass by you without you getting any benefits from it.
            </p>
            <p className="my-4 text-[18px]">
              The Wave of Fortune Lifeline exists in the time-space continuum,
              but not everyone has access to it. The healing will help you
              identify those fortunate and lucky favourable events in your life
              that can bring you innumerable benefits. It will help you open
              your subconscious mind, cleanse your aura, align your chakra and
              transform your life with healing energy.
            </p>
          </div>
        </div>
        <div className="my-16">
          <h4 className="text-center text-2xl font-bold underline  ">
            In this Healing Session, the Healer will help you:
          </h4>
          <div className="my-12 grid grid-cols-2">
            <div>
              <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/12/Fortune-Lifeline-Activation-Benefits-Image.jpg" />
            </div>
            <div>
              <div className="flex items-center gap-4 font-semibold ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  strokeWidth={2}
                  className="h-8 w-8 "
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-[18px]">
                  Open your subconscious mind to the possibilities of fortune
                  and luck
                </p>
              </div>
            </div>
          </div>
          <p className="my-4 text-[18px]">
            Reiki healing is not an alternative to medical treatment but is an
            add-on for the same. Since it involves the transfer of energy for
            the healing, it is acknowledged as one of the most ancient &
            powerful healing modalities. People suffering from chronic pains and
            prolonged sickness can get relief after the successful completion of
            reiki healing treatment. Various physical & emotional imbalances or
            issues concerning any health aspects are cured through reiki healing
            therapy. People suffering from anxiety, depression, stress, fatigue,
            sleep disorders, etc experience quick relief & long-term benefits
            from Reiki healing sessions.
          </p>
          <p className="my-4 text-[18px]">
            Reiki sessions are equally effective as in-person healing because,
            in alternative energy healing and holistic medicine therapies, we
            are working with the physical, emotional and mental aspects of an
            individual by accessing the individual’s energy body. The energy
            body can be accessed easily from anywhere and at any time and does
            not require you to be physically present with the practitioner.
            Reiki therapists can transmit energy and vibration over several
            miles to the seeker.
          </p>
        </div>
      </div>
      <div
        id="buynow"
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `linear-gradient(90deg, #69E4E1 0%, #DAC282FA 100%)`,
        }}
        className="py-16 2xl:px-48"
      >
        <div className="flex gap-8 lg:flex">
          <div>
            <img
              className="shadow-900"
              src="https://yourspiritualrevolution.org/wp-content/uploads/2022/12/Wave-of-Fortune-Lifeline-Activation-Pricing.jpg"
              alt=""
              width={500}
            />
          </div>
          <div>
            <p className="mb-6 text-[30px] font-bold">
              Activate your Wave of Fortune Lifeline Now!
            </p>
            <p className="my-4 text-[18px] font-bold">
              Attract Luck, Wealth & Fortune by Activating Your Golden Lifeline!
            </p>
            <p className="my-4 text-[18px] font-bold">
              Pricing: ₹7,999 (Incl. GST) / US $129
            </p>
            <button
              onClick={buyNowClickHandler}
              className="  rounded-full bg-white px-8 py-3 text-[18px] font-semibold shadow-2xl"
            >
              Buy Now!
            </button>
          </div>
        </div>
      </div>
      <section className="bg-white 2xl:px-52">
        <p className="my-6 text-center text-[30px] font-semibold text-darkBlue">
          Frequently Asked Questions
        </p>
        <Accordion
          items={[{ content: `kls`, title: 'jkksd' }]}
          translatorNS="en"
        />
      </section>
    </div>
  );
}
Thewaveoffortunelifelineactivation.getLayout = getLayout;
export default Thewaveoffortunelifelineactivation;
