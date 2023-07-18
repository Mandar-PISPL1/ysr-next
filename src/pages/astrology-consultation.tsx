import { getLayout } from '@/components/layouts/layout';
import Accordion from '@/components/ui/accordion';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import { useCart } from '@/store/quick-cart/cart.context';
function AstrologyConsultation(props: any) {
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
      <section className="grid bg-[#FAFAFA] py-8 2xl:px-52">
        <div>
          <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Banner-Image-for-Astrology.jpg" />
        </div>
        <div className="my-6 grid gap-5">
          <p className="text-[30px] font-semibold text-darkBlue">
            Gemstone Astrology Consultation
          </p>
          <p className="text-[20px]">
            Correct, restore & resolve the imbalances of your life with
            energetically charged <br /> semi-precious & precious stones
          </p>
          <div>
            <button className="rounded-lg bg-darkBlue px-8 py-4 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white 2xl:px-52">
        <div className="grid gap-6 py-24">
          <p className="text-[30px] font-semibold text-darkBlue">
            What is Gemstone Astrology Consultation?
          </p>
          <p className="text-[18px]">
            Astrology talks & predicts future happenings of life-based on
            horoscopes, birth date, time & place. Generally, it studies it as a
            conclusion of observation of the relationship between a significant
            celestial group of beings, state or the entire humanity. It is
            believed that these positions of stars & planets determine the
            future events of life, health & fate significantly. Thus, Gemstone
            Astrology Consultation helps you to understand the positions of
            these celestial bodies & find semi-precious stones to assist towards
            a healthier life.
          </p>
          <p className="text-[18px]">
            Since human organs are also made up of tiny microscopic atoms, the
            body parts inherently incline towards moments in astrological
            elements. Different stars relate to different organs like the
            positioning of the sun relates with stomach, head & heart whereas
            the moon helps us know about blood & lungs. Learning about these
            uncertainties & malfunction through speculation based on astrology
            consultation, and using it for finding out perfect semi-precious
            stones based on the birth charts help with reducing the damage
            possible by future happenings.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 bg-[#FAFAFA] py-16 2xl:px-52">
        <div>
          <p className="my-8 text-[30px] font-semibold text-darkBlue">
            What issues can gemstone astrology consultation resolve?
          </p>
          <ul>
            <li className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-darkBlue"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Career, professional issues</p>
            </li>
          </ul>
        </div>
        <div>
          <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Astrology-Consultation-Uses.jpg" />
        </div>
      </section>
      <section className="py-16 2xl:px-52">
        <p className="text-center text-[30px] font-semibold text-darkBlue">
          {' '}
          Benefits
        </p>
        <p className="my-6 text-center text-[18px]">
          The astrology consultation involves consult, suggest & advise crystals
          & gemstones that protects, helps & promotes overall wellbeing &
          prosperity with its natural energy that mends, resists & overcome
          imbalances
          <div className="my-8 grid grid-cols-2">
            <div className="py-8">
              <ul className="flex flex-col items-start justify-center">
                <li className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 37.19 23.418"
                  >
                    <g id="checkmark" transform="translate(-1.81 24.418)">
                      <path
                        id="Path_12792"
                        data-name="Path 12792"
                        d="M18.5-16.9c-6.4,7.3-7,7.8-8.9,6.5-6-3.8-6.6-4-7.6-3-.7.7.5,2.6,4.1,6.3,4.3,4.2,5.5,4.9,6.5,3.9C15.3-6,26.8-24,26.1-24.4,25.7-24.7,22.3-21.3,18.5-16.9Z"
                        fill="#0a2d4d"
                      ></path>
                      <path
                        id="Path_12793"
                        data-name="Path 12793"
                        d="M31.1-16.5c-5.6,6.6-6.5,7.3-8.3,6.4-1.6-.8-2.3-.8-2.9.2-1.4,2.2-1.1,3.4,1.9,6.2L24.6-1l7.2-10.9c4-6,7.2-11.1,7.2-11.5C39-25.1,36.9-23.3,31.1-16.5Z"
                        fill="#0a2d4d"
                      ></path>
                    </g>
                  </svg>
                  <p className="text-left">
                    Predicts pains & sickness based on the movements of
                    celestial bodies.
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <img
                width={400}
                src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Horoscope.jpg"
              />
            </div>
          </div>
        </p>
      </section>
      <section className="bg-[#FAFAFA] py-16 2xl:px-52">
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-4 text-[30px] font-semibold text-darkBlue">
              How will Gemstone Astrology Consultation take place?
            </p>

            <img
              width={450}
              src="https://yourspiritualrevolution.org/wp-content/uploads/2022/07/Astrology-Report-Image-01.jpg"
            />
          </div>
          <div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16"
                  viewBox="0 0 109 109"
                >
                  <g id="i1" transform="translate(-975 -4801)">
                    <circle
                      id="Ellipse_1327"
                      data-name="Ellipse 1327"
                      cx="54.5"
                      cy="54.5"
                      r="54.5"
                      transform="translate(975 4801)"
                      fill="#c3e3ff"
                      opacity="0.25"
                    ></circle>
                    <g
                      id="Group_2154"
                      data-name="Group 2154"
                      transform="translate(4538 439.144)"
                    >
                      <path
                        id="counseling_1_"
                        data-name="counseling (1)"
                        d="M17.118,230.91a7.153,7.153,0,1,0-7.513,0A13.385,13.385,0,0,0,0,243.734a.8.8,0,0,0,.8.8H25.92a.8.8,0,0,0,.8-.8A13.385,13.385,0,0,0,17.118,230.91Zm-9.3-6.084a5.546,5.546,0,1,1,5.548,5.546h-.005A5.552,5.552,0,0,1,7.816,224.826Zm-6.182,18.1a11.77,11.77,0,0,1,11.725-10.951h.005A11.77,11.77,0,0,1,25.089,242.93Z"
                        transform="translate(-3533 4194.347)"
                        fill="#0a2d4d"
                      ></path>
                      <path
                        id="counseling_1_2"
                        data-name="counseling (1)"
                        d="M171.544,44.111a.8.8,0,0,0,.9-.269l3.68-4.763h26.326a2.816,2.816,0,0,0,2.813-2.813V29.741a2.816,2.816,0,0,0-2.813-2.813H173.813A2.816,2.816,0,0,0,171,29.741V43.35A.8.8,0,0,0,171.544,44.111Zm1.063-14.37a1.207,1.207,0,0,1,1.206-1.206h28.633a1.207,1.207,0,0,1,1.206,1.206v6.525a1.207,1.207,0,0,1-1.206,1.206H175.725a.8.8,0,0,0-.636.312L172.607,41Zm29.838,13.31h-21.1a2.816,2.816,0,0,0-2.813,2.813v5.844a2.816,2.816,0,0,0,2.813,2.813h19.044l3.427,4.435a.8.8,0,0,0,1.44-.491v-12.6A2.816,2.816,0,0,0,202.446,43.051Zm1.206,13.059-2.229-2.884a.8.8,0,0,0-.636-.312H181.348a1.207,1.207,0,0,1-1.206-1.206V45.864a1.207,1.207,0,0,1,1.206-1.206h21.1a1.207,1.207,0,0,1,1.206,1.206ZM194.8,33a.8.8,0,0,1,.8-.8h3.823a.8.8,0,1,1,0,1.607h-3.823A.8.8,0,0,1,194.8,33Zm-18.781,0a.8.8,0,0,1,.8-.8H183.9a.8.8,0,0,1,0,1.607h-7.077A.8.8,0,0,1,176.023,33Zm10.559,0a.8.8,0,0,1,.8-.8h5.1a.8.8,0,0,1,0,1.607h-5.1A.8.8,0,0,1,186.582,33Zm13.95,15.782a.8.8,0,0,1-.8.8h-5.1a.8.8,0,1,1,0-1.607h5.1A.8.8,0,0,1,200.532,48.786Zm-8.587,0a.8.8,0,0,1-.8.8h-7.077a.8.8,0,1,1,0-1.607h7.077A.8.8,0,0,1,191.945,48.786Z"
                        transform="translate(-3688.259 4365.928)"
                        fill="#166ab4"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-[24px] font-semibold text-darkBlue">
                Step 1
              </div>
              <div className="text-[24px] font-semibold text-darkBlue">
                Analyzing and Consultation
              </div>
              <p className="text-[18px]">
                Our experts will analyze the position of celestial bodies &
                planetary systems after examining your horoscope. You will be
                sent a gemstone & semi-precious stone consultation based on your
                birth charts & horoscope.
              </p>
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16"
                  viewBox="0 0 109 109"
                >
                  <g id="i1" transform="translate(-975 -4801)">
                    <circle
                      id="Ellipse_1327"
                      data-name="Ellipse 1327"
                      cx="54.5"
                      cy="54.5"
                      r="54.5"
                      transform="translate(975 4801)"
                      fill="#c3e3ff"
                      opacity="0.25"
                    ></circle>
                    <g
                      id="Group_2154"
                      data-name="Group 2154"
                      transform="translate(4538 439.144)"
                    >
                      <path
                        id="counseling_1_"
                        data-name="counseling (1)"
                        d="M17.118,230.91a7.153,7.153,0,1,0-7.513,0A13.385,13.385,0,0,0,0,243.734a.8.8,0,0,0,.8.8H25.92a.8.8,0,0,0,.8-.8A13.385,13.385,0,0,0,17.118,230.91Zm-9.3-6.084a5.546,5.546,0,1,1,5.548,5.546h-.005A5.552,5.552,0,0,1,7.816,224.826Zm-6.182,18.1a11.77,11.77,0,0,1,11.725-10.951h.005A11.77,11.77,0,0,1,25.089,242.93Z"
                        transform="translate(-3533 4194.347)"
                        fill="#0a2d4d"
                      ></path>
                      <path
                        id="counseling_1_2"
                        data-name="counseling (1)"
                        d="M171.544,44.111a.8.8,0,0,0,.9-.269l3.68-4.763h26.326a2.816,2.816,0,0,0,2.813-2.813V29.741a2.816,2.816,0,0,0-2.813-2.813H173.813A2.816,2.816,0,0,0,171,29.741V43.35A.8.8,0,0,0,171.544,44.111Zm1.063-14.37a1.207,1.207,0,0,1,1.206-1.206h28.633a1.207,1.207,0,0,1,1.206,1.206v6.525a1.207,1.207,0,0,1-1.206,1.206H175.725a.8.8,0,0,0-.636.312L172.607,41Zm29.838,13.31h-21.1a2.816,2.816,0,0,0-2.813,2.813v5.844a2.816,2.816,0,0,0,2.813,2.813h19.044l3.427,4.435a.8.8,0,0,0,1.44-.491v-12.6A2.816,2.816,0,0,0,202.446,43.051Zm1.206,13.059-2.229-2.884a.8.8,0,0,0-.636-.312H181.348a1.207,1.207,0,0,1-1.206-1.206V45.864a1.207,1.207,0,0,1,1.206-1.206h21.1a1.207,1.207,0,0,1,1.206,1.206ZM194.8,33a.8.8,0,0,1,.8-.8h3.823a.8.8,0,1,1,0,1.607h-3.823A.8.8,0,0,1,194.8,33Zm-18.781,0a.8.8,0,0,1,.8-.8H183.9a.8.8,0,0,1,0,1.607h-7.077A.8.8,0,0,1,176.023,33Zm10.559,0a.8.8,0,0,1,.8-.8h5.1a.8.8,0,0,1,0,1.607h-5.1A.8.8,0,0,1,186.582,33Zm13.95,15.782a.8.8,0,0,1-.8.8h-5.1a.8.8,0,1,1,0-1.607h5.1A.8.8,0,0,1,200.532,48.786Zm-8.587,0a.8.8,0,0,1-.8.8h-7.077a.8.8,0,1,1,0-1.607h7.077A.8.8,0,0,1,191.945,48.786Z"
                        transform="translate(-3688.259 4365.928)"
                        fill="#166ab4"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-[24px] font-semibold text-darkBlue">
                Step 2
              </div>
              <div className="text-[24px] font-semibold text-darkBlue">
                Conclusion of gemstone astrology consultation
              </div>
              <p className="text-[18px]">
                You will be informed once our experts successfully examine your
                charts & horoscopes. Our experts will be in touch with you
                throughout and will solve any queries you may have.
              </p>
            </div>
          </div>
        </div>
        <p className="my-6 text-center text-[24px] font-semibold text-darkBlue">
          Let semi-precious stones help you attract health, wealth, fortune &
          prosperity through astrology consultation.
        </p>
        <div className="flex justify-center">
          <button className="rounded-lg bg-darkBlue px-8 py-4 text-white">
            Buy Now
          </button>
        </div>
      </section>
      <section className="bg-white py-16 2xl:px-52">
        <div className="grid grid-cols-2 gap-16">
          <div className="text-[24px] font-semibold text-darkBlue">
            Let the power of crystals & gemstones release the blockages, heal
            the imbalances and pave the way for prosperity & wellbeing.
          </div>
          <div
            className="rounded-2xl bg-bgBlue px-8 py-6
          "
          >
            <div className="grid gap-6">
              <p className="text-[30px] font-semibold text-darkBlue">Pricing</p>
              <p className="text-[24px] font-semibold">
                Gemstone Astrology Consultation
              </p>
              <p className="text-[24px] font-semibold">
                Session Duration: 1 Day
              </p>
              <p className="text-[24px] font-semibold">
                INR ₹2,999 (Incl. GST) / US $59
              </p>
            </div>
            <button
              onClick={buyNowClickHandler}
              className="mt-6 w-full rounded-lg bg-darkBlue px-8 py-4 text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <section className="2xl:px-52">
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

export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const url = `https://yourspiritualrevolution.org/wp-json/wp/v2/pages/26796`;
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/astrology-consultation`;
  const data = await fetch(url).then((r) => r.json());
  const seoData = await fetch(seoURL).then((r) => r.json());
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/gemstone-astrology-consultation`;
  const product = await fetch(productUrl).then((r) => r.json());
  return {
    props: {
      data,
      product,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
AstrologyConsultation.getLayout = getLayout;
export default AstrologyConsultation;
