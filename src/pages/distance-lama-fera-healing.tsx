import { getLayout } from '@/components/layouts/layout';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Accordion from '@/components/ui/accordion';
import { faqs } from '@/seed/distance-lama-fera-healing/faqs';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import CartCounterButton from '@/components/cart/cart-counter-button';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }: any) => {
  const { NEXT_PUBLIC_CMS } = process.env;
  const productUrl =
    process.env.NEXT_PUBLIC_REST_API_ENDPOINT +
    `products/lama-fera-healing-modality`;
  const product = await fetch(productUrl).then((r) => r.json());
  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/distance-lama-fera-healing`;
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

function DistanceLamaFeraHealing(props: any) {
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
      <section className=" grid   grid-cols-2 py-16">
        <div className="  flex flex-col justify-center px-16">
          <h1 className="my-6 text-[40px] font-semibold">
            Distance Lama Fera Healing
          </h1>
          <p className="text-[20px] font-semibold">
            A quick and effective way of healing your mind, body, and soul.
          </p>
          <div className=" my-8 flex gap-8 ">
            <button
              style={{
                backgroundColor: '#4F3838',
                borderRadius: '30px 30px 30px 30px',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.2784313725490196)',
                padding: '15px 45px 12px 45px',
                fontWeight: '400',
                fontSize: '18px',
              }}
              className="text-white"
            >
              Learn More
            </button>
            <button
              style={{
                backgroundColor: '#C72E47',
                borderRadius: '30px 30px 30px 30px',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.2784313725490196)',
                padding: '15px 45px 12px 45px',
                fontWeight: '400',
                fontSize: '18px',
              }}
              className="text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-bgBlue">
          <img
            // style={{ height: '600px', objectFit: 'cover' }}

            src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Lama-Fera-Healing-Banner.jpg"
          />
        </div>
      </section>
      <section
        style={{
          backgroundColor: '#fbebeb',
          backgroundImage:
            'url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Lama-Fera-Healing-Image.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="py-64 2xl:px-52"
      >
        <div className="grid gap-6 text-center text-[18px]">
          <h2 className="text-center font-bold text-[#4F3838] md:text-4xl">
            What is Lama Fera Healing?
          </h2>
          <p>
            Lama Fera, an energy healing modality that finds its roots drawn
            right from the Himalayas, is a Buddhist healing technique practised
            for centuries. It is a mighty healing technique practiced with the
            help of 16 symbols. These symbols of Lama Fera reserve abundant
            energy that transforms the highest level of negativity into positive
            energy. The preachers of Lama Fera are acknowledged as disciples of
            Lord Buddha and reserve some distinct ability to help the seeker
            heal prominently and quickly.
          </p>
          <p>
            Unlike the modern healing modalities, Lama Fera is a unique modality
            that cleanses the energy present in the mind, body, and spirit
            healing all the physical and emotional imbalances. The healer or
            practitioner performing Lama Fera detects the negative vibrations
            that can potentially change the seeker’s energy levels. Performed
            explicitly to eradicate the negative issues impacting all aspects of
            health, Lama Fera also helps the seeker gain more profound knowledge
            about health, healing and spiritual.
          </p>
        </div>
      </section>
      <section className="my-4 grid     grid-cols-12 2xl:px-52 ">
        <div className="col-span-8 flex flex-col justify-center">
          <h3 className="mb-4 font-semibold text-[#4F3838]  lg:text-4xl">
            Are you suffering from following problems?
          </h3>
          <ul className="my-4 ml-8 grid list-disc gap-4 text-2xl">
            <li>Stress & Anxiety</li>
            <li>Negative Energy</li>
            <li>Financial Issues</li>
            <li>Emotional Imbalances</li>
          </ul>
        </div>
        <div className="col-span-4">
          <img src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/Before-after.jpg" />
        </div>
      </section>
      <section className="mb-12 grid gap-6 2xl:px-52">
        <p>
          You can get solutions for all your problems through Your Spiritual
          Revolution’s Distance Lama Fera healing services.
        </p>
        Lama Fera is an ancient technique used by the monks of Tibet to heal
        your mind, body and spirit. The 12 symbols present in this healing
        modality are used to remove the deepest negative energy present in the
        being and helps with vital functions of the body. It helps to unload the
        heaviness of the mind by eliminating all the harmful thoughts and
        memories, making us feel stressed or anxious. Once your mind is clear of
        all the unnecessary thoughts, you can move towards the path of divine
        enlightenment.
        <p></p>
        <p>
          Also, healing through Lama Fera is not at all time-consuming. On the
          contrary, it is the quickest and powerful way of healing and gaining
          self-awareness.
        </p>
      </section>

      <section
        style={{
          backgroundColor: '#fbebeb',

          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="py-8 2xl:px-52"
      >
        <h2 className="text-center font-semibold text-[#4F3838] md:text-4xl">
          Benefits of Distance Lama Fera Healing
        </h2>
        <div className="my-8 grid grid-cols-12 gap-5">
          <div className="col-span-5 flex flex-col   items-center">
            <img
              width={665}
              className="ml-16"
              style={{
                maxWidth: '665px',
                height: '600px',
                objectFit: 'contain',
              }}
              src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/Benefits-of-Lama-Fera-Healing.jpg"
            />
          </div>
          <div className="f col-span-7 ">
            <div className="grid gap-8">
              <div className="grid gap-2 text-xl">
                <div className="flex items-center gap-2 font-semibold text-[#C72E47] lg:text-3xl">
                  <Checkbox /> Builds awareness
                </div>
                <div className="ml-8">
                  Lama Fera healing technique creates a sense of awareness and
                  knowledge. Hence, you can experience enlightenment through the
                  power of Buddha.
                </div>
              </div>
              <div className="grid gap-2 text-xl">
                <div className="flex items-center gap-2 font-semibold text-[#C72E47] lg:text-3xl">
                  <Checkbox /> Eliminate negative energy
                </div>
                <div className="ml-8">
                  The symbols of Lama Fera can remove the highest level of
                  negative energy from the being.
                </div>
              </div>

              <div className="grid gap-2 text-xl">
                <div className="flex items-center gap-2 font-semibold text-[#C72E47] lg:text-3xl">
                  <Checkbox /> Helps in Healing ailments
                </div>
                <div className="ml-8">
                  Lama Fera helps in relieving pain and discomfort caused by
                  chronic diseases. In addition, it improves the healing power
                  of the human body.
                </div>
              </div>

              <div className="grid gap-2 text-xl">
                <div className="flex items-center gap-2 font-semibold text-[#C72E47] lg:text-3xl">
                  <Checkbox />
                  Get rid of stress & anxiety
                </div>
                <div className="ml-8">
                  It helps overcome the fear of the known & unknown and, reduces
                  stress and anxiety and relaxes the mind.
                </div>
              </div>

              <div className="grid gap-2 text-xl">
                <div className="flex items-center gap-2 font-semibold text-[#C72E47] lg:text-3xl">
                  <Checkbox />
                  Quick and effective
                </div>
                <div className="ml-8">
                  Lama Fera is considered the world's fastest and most powerful
                  healing technique for the mind. It unburdens the thought
                  process and increases vital energy.
                </div>
              </div>

              <div className="grid gap-2 text-xl">
                <div className="flex items-center gap-2 font-semibold text-[#C72E47] lg:text-3xl">
                  <Checkbox />
                  Boosts your memory
                </div>
                <div className="ml-8">
                  The practice of Lama Fera can be used to increase your memory
                  power and gain a high level of concentration with the help of
                  meditation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8 2xl:px-52">
        <div className="grid grid-cols-3 ">
          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="_1"
              data-name="1"
              width="155.78"
              height="159.805"
              viewBox="0 0 155.78 159.805"
            >
              <path
                id="Path_12618"
                data-name="Path 12618"
                d="M138.7,86.707l-2.319,4.068a29.942,29.942,0,0,0-40.829,11.244L91.48,99.7a34.639,34.639,0,0,1,47.217-13Z"
                transform="translate(-64.754 -56.754)"
                fill="#231f20"
              ></path>
              <path
                id="Path_12619"
                data-name="Path 12619"
                d="M105.054,18.912a56.736,56.736,0,0,0-80.088-2.788,56.661,56.661,0,1,0,75.563,84.451c.583-.517,1.166-1.039,1.74-1.575s1.136-1.083,1.684-1.637A56.667,56.667,0,0,0,105.054,18.912Zm4.61,40.276a46.068,46.068,0,0,1-46,44.469q-.817,0-1.643-.028a46.071,46.071,0,1,1,47.645-44.441Z"
                transform="translate(-6.076 -0.926)"
                fill="#4f3838"
              ></path>
              <path
                id="Path_12620"
                data-name="Path 12620"
                d="M138.7,86.707l-2.319,4.068a29.942,29.942,0,0,0-40.829,11.244L91.48,99.7a34.639,34.639,0,0,1,47.217-13Z"
                transform="translate(-64.754 -56.754)"
                fill="#fff"
              ></path>
              <path
                id="Path_12621"
                data-name="Path 12621"
                d="M376.607,367.751,338.074,327.92,322.74,342.231l38.539,39.853a10.421,10.421,0,0,0,7.292,3.311h.372a10.493,10.493,0,0,0,7.664-17.647Z"
                transform="translate(-223.643 -225.59)"
                fill="#c72e47"
              ></path>
              <line
                id="Line_324"
                data-name="Line 324"
                x1="13.81"
                y1="14.805"
                transform="translate(94.591 96.359)"
                fill="none"
              ></line>
              <rect
                id="Rectangle_2194"
                data-name="Rectangle 2194"
                width="4.694"
                height="20.244"
                transform="matrix(0.731, -0.682, 0.682, 0.731, 92.875, 97.952)"
                fill="#c72e47"
              ></rect>
              <path
                id="Path_12622"
                data-name="Path 12622"
                d="M138.7,86.707l-2.319,4.068a29.942,29.942,0,0,0-40.829,11.244L91.48,99.7a34.639,34.639,0,0,1,47.217-13Z"
                transform="translate(-64.754 -56.754)"
                fill="#c72e47"
              ></path>
            </svg>
            <p className="my-2 text-center text-[20px] font-semibold text-[#4F3838]">
              Identifying Energy Blockages
            </p>
            <p className="text-center">
              The lama fera therapist will identify your energy imbalances,
              blockages, traumas, wishes, and any other aspect affecting your
              health & wellbeing.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="_2"
              data-name="2"
              width="159.805"
              height="159.805"
              viewBox="0 0 159.805 159.805"
            >
              <path
                id="Path_12749"
                data-name="Path 12749"
                d="M150.394-495.168c-.7.666-.832,1.132-.832,2.663v1.831H60.97L41.094-479.488c-13.75,7.723-20.309,11.585-21.307,12.551a14.005,14.005,0,0,0-2.33,3.229c-.766,1.565-.9,2.23-.866,4.661a8.759,8.759,0,0,0,.8,4.494,12.926,12.926,0,0,0,5.427,5.426,12.767,12.767,0,0,0,7.458.766c.866-.233,9.022-3.862,18.145-8.056l16.546-7.624H76.95l-.9,1.9a8.906,8.906,0,0,0-.9,4.761,9.091,9.091,0,0,0,.932,4.86,12.824,12.824,0,0,0,6.059,6.026l2,.932,19.942.1,19.942.1,5.36-5.36,5.393-5.327h14.782v1.831c0,1.531.133,2,.832,2.663l.8.832h23.371l.8-.832.832-.8v-42.013l-.832-.8-.8-.832H151.193Zm20.475,21.806v17.311h-15.98v-34.623h15.98Zm-21.307,0v11.985H132.449l-5.36,5.327-5.36,5.36-18.311-.1c-17.812-.1-18.311-.133-19.609-.8a8.094,8.094,0,0,1-2.33-2.1c-.866-1.232-1-1.7-1-3.662,0-1.864.133-2.464.9-3.6a8.758,8.758,0,0,1,2.164-2.131c1.265-.8,1.265-.8,13.683-.9l12.385-.1v-5.293H63.733l-17.046,7.857c-10.82,4.994-17.579,7.957-18.477,8.056a5.5,5.5,0,0,1-4.961-1.931,5.358,5.358,0,0,1-1.4-4.794c.5-2.63.6-2.7,21.008-14.215l19.31-10.886,43.713-.033,43.68-.033Z"
                transform="translate(-16.391 496)"
                fill="#4f3838"
              ></path>
              <path
                id="Path_12750"
                data-name="Path 12750"
                d="M192.931-325.1l-2.131,1.931,2.064,1.764,2.031,1.8,1.731-1.6c.965-.866,1.8-1.631,1.864-1.665.233-.166-2.73-4.128-3.1-4.128A11.6,11.6,0,0,0,192.931-325.1Z"
                transform="translate(-132.604 383.265)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12751"
                data-name="Path 12751"
                d="M299.4-324.969l-1.4,2.031,1.7,1.531c.965.866,1.831,1.6,1.931,1.665a9.659,9.659,0,0,0,2.164-1.665l1.964-1.731-2.131-1.931A11.95,11.95,0,0,0,301.163-327,6.835,6.835,0,0,0,299.4-324.969Z"
                transform="translate(-204.114 383.265)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12752"
                data-name="Path 12752"
                d="M146.265-314.854l-1.365,2.7,1.764.766c3.3,1.465,3.063,1.5,4.394-1.132l1.2-2.33-1.831-1.2C147.6-317.817,147.8-317.883,146.265-314.854Z"
                transform="translate(-101.986 376.778)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12753"
                data-name="Path 12753"
                d="M347.064-316.668,345-315.337l1.165,2.33a8.5,8.5,0,0,0,1.432,2.33c.2,0,4.328-1.664,4.661-1.864a26.78,26.78,0,0,0-2.863-5.46A17.007,17.007,0,0,0,347.064-316.668Z"
                transform="translate(-235.467 377.261)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12754"
                data-name="Path 12754"
                d="M214.881-311.505a20.054,20.054,0,0,0-9.288,5.127,18.407,18.407,0,0,0,0,26.233,18.516,18.516,0,0,0,26.3-.033,18.505,18.505,0,0,0-.033-26.167A18.682,18.682,0,0,0,214.881-311.505Zm9.288,6.192a12.723,12.723,0,0,1,6.458,6.325c1.165,2.4,1.232,2.7,1.232,5.726s-.067,3.329-1.232,5.726a12.794,12.794,0,0,1-6.525,6.359c-2.031.965-2.53,1.065-5.393,1.065s-3.362-.1-5.393-1.065a12.794,12.794,0,0,1-6.525-6.359c-1.165-2.4-1.232-2.7-1.232-5.693,0-2.9.1-3.4,1.065-5.426a12.856,12.856,0,0,1,5.726-6.192,11.38,11.38,0,0,1,7.091-1.6A10.876,10.876,0,0,1,224.169-305.313Z"
                transform="translate(-138.807 373.164)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12755"
                data-name="Path 12755"
                d="M237.315-279.53a10.614,10.614,0,0,0-4.927,5.094,7.292,7.292,0,0,0,2.1,7.957c3.4,3.429,8.09,3.362,11.252-.166,3-3.329,3-7.324,0-10.653A7.815,7.815,0,0,0,237.315-279.53Zm4.494,5.726a2.628,2.628,0,0,1-1.831,4.494,2.6,2.6,0,0,1-1.831-.832,2.628,2.628,0,0,1,1.831-4.494A2.6,2.6,0,0,1,241.809-273.8Z"
                transform="translate(-160.076 351.875)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12756"
                data-name="Path 12756"
                d="M175.031-299.433A21.549,21.549,0,0,0,173-294.773c0,.366,4.594,2.131,4.794,1.831.067-.033.533-1.065,1.1-2.264l1-2.2-2.1-1.232C175.4-300.033,175.53-300,175.031-299.433Z"
                transform="translate(-120.73 365.12)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12757"
                data-name="Path 12757"
                d="M321.064-298.363a8.16,8.16,0,0,0-2.064,1.4c0,.633,1.864,4.394,2.164,4.394,1.032,0,4.494-1.432,4.494-1.864a18.3,18.3,0,0,0-2.231-4.894A6.2,6.2,0,0,0,321.064-298.363Z"
                transform="translate(-218.123 364.816)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12758"
                data-name="Path 12758"
                d="M137.033-281.717c-.2,1.165-.4,2.53-.433,3.1l-.1,1,2.5.233c2.73.233,2.963.1,3-1.565a11.14,11.14,0,0,1,.3-2.23c.266-1.2.266-1.265-.766-1.565-.566-.166-1.465-.4-2.031-.533a15.07,15.07,0,0,1-1.531-.366C137.532-283.781,137.332-283.381,137.033-281.717Z"
                transform="translate(-96.382 354.361)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12759"
                data-name="Path 12759"
                d="M361.079-283.534c-.633.166-1.7.433-2.364.633-1.2.3-1.232.333-.932,1.565a11.141,11.141,0,0,1,.3,2.23c.033,1.731.266,1.864,3.029,1.565l2.464-.233-.1-1c-.166-1.931-.8-5.16-1.032-5.127A11.032,11.032,0,0,0,361.079-283.534Z"
                transform="translate(-243.889 354.514)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12760"
                data-name="Path 12760"
                d="M168-261.971v3.063l2.031-.233c1.132-.1,2.33-.2,2.663-.2.566,0,.633-.3.633-2.63v-2.6L171.6-264.8c-.965-.1-2.164-.2-2.663-.2H168Z"
                transform="translate(-117.395 341.906)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12761"
                data-name="Path 12761"
                d="M329.6-264.767l-1.6.133v5.193l1.764.233c.932.1,2.131.2,2.663.2h.9V-265l-1.065.067C331.662-264.9,330.464-264.834,329.6-264.767Z"
                transform="translate(-224.127 341.906)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12762"
                data-name="Path 12762"
                d="M138.468-247.573c-2.1.233-2.031.033-1.3,4.295.333,1.8.466,2.064,1,1.9.366-.1.9-.233,1.232-.3.3-.1,1.165-.333,1.931-.5l1.365-.366-.333-1.9c-.166-1.065-.366-2.264-.433-2.7C141.764-247.939,141.8-247.939,138.468-247.573Z"
                transform="translate(-96.519 330.439)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12763"
                data-name="Path 12763"
                d="M358.328-247c-.067.4-.266,1.6-.433,2.63-.366,2.131-.533,1.9,2.23,2.6.832.2,1.731.433,2.031.533.533.133.866-1,1.432-5.127.133-.932.067-.965-2.863-1.2C358.595-247.734,358.461-247.7,358.328-247Z"
                transform="translate(-243.934 330.333)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12764"
                data-name="Path 12764"
                d="M174.931-232.2c-1.165.366-1.931.866-1.931,1.132a17.593,17.593,0,0,0,2.264,4.927c.333.2,4.394-2.031,4.394-2.43a23.045,23.045,0,0,0-.9-2.3c-.566-1.265-1.1-2.064-1.431-2.031A14.217,14.217,0,0,0,174.931-232.2Z"
                transform="translate(-120.73 320.495)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12765"
                data-name="Path 12765"
                d="M319.332-230.736l-1.032,2.264,2.131,1.232a5.421,5.421,0,0,0,2.464,1.032,17.442,17.442,0,0,0,2.3-4.894c0-.333-3.862-1.9-4.694-1.9A15.338,15.338,0,0,0,319.332-230.736Z"
                transform="translate(-217.656 320.56)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12766"
                data-name="Path 12766"
                d="M147.453-215.1a22.866,22.866,0,0,0-2.264.965,16.943,16.943,0,0,0,1.265,2.8c1.531,3.029,1.332,3,4.161,1.165l1.831-1.165-1.165-2.33A9.172,9.172,0,0,0,149.85-216C149.717-215.967,148.652-215.567,147.453-215.1Z"
                transform="translate(-102.175 309.22)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12767"
                data-name="Path 12767"
                d="M346.165-213.327,345-210.964l1.831,1.165c2.83,1.831,2.63,1.864,4.161-1.165l1.365-2.7-1.764-.766C347.264-215.891,347.5-215.957,346.165-213.327Z"
                transform="translate(-235.467 308.844)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12768"
                data-name="Path 12768"
                d="M192.664-205.044l-1.964,1.764,2.131,1.9a13.718,13.718,0,0,0,2.464,1.9,8.014,8.014,0,0,0,1.764-2.031l1.432-2-1.731-1.565a24.113,24.113,0,0,0-1.931-1.631A9.3,9.3,0,0,0,192.664-205.044Z"
                transform="translate(-132.538 303.024)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12769"
                data-name="Path 12769"
                d="M299.664-205.335l-1.764,1.665,1.4,2a6.992,6.992,0,0,0,1.764,2,11.743,11.743,0,0,0,2.5-1.931l2.1-1.9-2-1.764c-1.1-.932-2.064-1.731-2.131-1.731C301.462-206.967,300.63-206.234,299.664-205.335Z"
                transform="translate(-204.048 303.216)"
                fill="#c72e47"
              ></path>
              <path
                id="Path_12770"
                data-name="Path 12770"
                d="M62.81-162.74l-5.393,5.327H42.634v-1.831c0-1.531-.133-2-.832-2.663l-.8-.832H17.631l-.8.832-.832.8V-119.1l.832.8.8.832H41l.8-.832c.7-.666.832-1.132.832-2.663v-1.831h88.625l19.709-11.053c13.217-7.457,20.209-11.552,21.241-12.551a13.418,13.418,0,0,0,2.5-3.329c.8-1.6.932-2.264.9-4.694a8.759,8.759,0,0,0-.8-4.494,12.926,12.926,0,0,0-5.427-5.426,12.766,12.766,0,0,0-7.458-.766c-.866.233-9.022,3.862-18.145,8.056l-16.547,7.624H115.245l.9-1.931a8.715,8.715,0,0,0,.9-4.727,8.9,8.9,0,0,0-.932-4.827,12.824,12.824,0,0,0-6.026-6.059l-2.031-.932L88.112-168l-19.942-.1Zm45.578.866a7.684,7.684,0,0,1,2.33,2.1c.866,1.232,1,1.7,1,3.662,0,1.864-.133,2.464-.9,3.6a8.756,8.756,0,0,1-2.164,2.131c-1.265.8-1.265.8-13.65.9l-12.418.1v5.293h45.877l17.312-7.99c13.717-6.325,17.612-7.99,18.71-7.99a5.817,5.817,0,0,1,5.86,6.791c-.5,2.63-.6,2.7-21.008,14.215l-19.31,10.919H86.347l-43.713.033v-23.969H59.747l5.327-5.327,5.36-5.327,18.311.067C106.589-162.574,107.089-162.54,108.387-161.875ZM37.307-140.1v17.311H21.327v-34.623h15.98Z"
                transform="translate(-16 277.269)"
                fill="#4f3838"
              ></path>
            </svg>
            <p className="my-4 mt-8 text-center text-[20px] font-semibold text-[#4F3838]">
              Lama Fera Energy Transfer
            </p>
            <p className="text-center">
              Lama Fera healers will then transfer the energy in your body
              through distance healing and remove all the blockages.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124.138"
              height="120"
              viewBox="0 0 124.138 120"
            >
              <g id="_3" data-name="3" transform="translate(-1 -1.5)">
                <path
                  id="Path_12742"
                  data-name="Path 12742"
                  d="M74.949,70.621a1.521,1.521,0,0,0-.414-1.242v-.828c0-.414-.414-.828-.414-1.242V66.9c-.414-.414-.414-.828-.828-1.656a16.171,16.171,0,0,0-7.037-5.795L55.908,56.134c1.656-.414,3.311-.414,4.967-.828l.828-.414a6.592,6.592,0,0,0,4.967-6.209V34.2a20.7,20.7,0,0,0-41.392,0V49.511a6.592,6.592,0,0,0,4.967,6.209l.828.414c1.656.414,3.311.414,4.967.828L25.692,60.273a12.042,12.042,0,0,0-7.037,5.795c-.414.414-.414.828-.828,1.656,0,.414-.414.828-.414,1.242v.828A1.521,1.521,0,0,1,17,71.035V81.8a1.955,1.955,0,0,0,2.07,2.07H72.879a1.955,1.955,0,0,0,2.07-2.07V70.621ZM41.835,32.54A7.354,7.354,0,0,0,45.974,34.2h8.278v4.139a4.451,4.451,0,0,1-4.139,4.139h-2.07a2.07,2.07,0,0,0,0,4.139h2.07a7.8,7.8,0,0,0,3.311-.828,8.177,8.177,0,0,1-7.451,4.967A8.3,8.3,0,0,1,37.7,42.474V34.2A5.314,5.314,0,0,0,41.835,32.54ZM40.593,56.962V53.65a12.28,12.28,0,0,0,10.762,0v3.311c0,1.656-2.9,4.139-5.381,5.381C43.491,60.687,40.593,58.617,40.593,56.962Zm20.282-5.381-.828.414c-1.242.414-2.9.414-4.139.828v-2.07a13.068,13.068,0,0,0,2.9-7.864V35.024a5.845,5.845,0,0,1,4.139,5.795v9.106C62.531,50.339,61.7,51.581,60.875,51.581Zm-29.8,0a2.75,2.75,0,0,1-1.656-2.07V34.2A16.605,16.605,0,0,1,45.974,17.639c8.278,0,15.315,6.209,16.143,14.073a9.89,9.89,0,0,0-5.795-2.07H45.974a1.955,1.955,0,0,1-2.07-2.07,2.07,2.07,0,1,0-4.139,0,1.955,1.955,0,0,1-2.07,2.07h-2.07a1.955,1.955,0,0,0-2.07,2.07V42.06a13.068,13.068,0,0,0,2.9,7.864v2.9c-1.656-.414-2.9-.414-4.139-.828l-1.242-.414ZM26.934,64l10.348-3.311c2.07,3.311,7.037,5.381,7.451,5.795h1.656c.828-.414,5.381-2.484,7.451-5.795L64.187,64a6.671,6.671,0,0,1,2.9,1.656c-5.795,2.07-9.52,7.451-9.52,14.073H33.557a15.468,15.468,0,0,0-9.52-14.073A23.741,23.741,0,0,1,26.934,64Zm-5.795,8.278a5.25,5.25,0,0,1,.414-2.484v-.828a11.054,11.054,0,0,1,8.278,10.348H21.139V72.277Zm49.67,7.451H62.117V78.071a11.236,11.236,0,0,1,7.864-8.692c0,.414,0,.414.414.828,0,.828.414,1.656.414,2.484v7.037Z"
                  transform="translate(50.189 37.634)"
                  fill="#c72e47"
                ></path>
                <path
                  id="Path_12743"
                  data-name="Path 12743"
                  d="M23.209,42.892H47.216l12,7.864a1.521,1.521,0,0,0,1.242.414c.414,0,.828,0,.828-.414A2.218,2.218,0,0,0,62.531,49.1V42.892H64.6a6.366,6.366,0,0,0,6.209-6.209V7.709A6.366,6.366,0,0,0,64.6,1.5H23.209A6.366,6.366,0,0,0,17,7.709V36.683a6.366,6.366,0,0,0,6.209,6.209ZM21.139,7.709a1.955,1.955,0,0,1,2.07-2.07H64.6a1.955,1.955,0,0,1,2.07,2.07V36.683a1.955,1.955,0,0,1-2.07,2.07H60.462a1.955,1.955,0,0,0-2.07,2.07v4.553l-9.106-6.209a1.521,1.521,0,0,0-1.242-.414H23.209a1.955,1.955,0,0,1-2.07-2.07Z"
                  transform="translate(50.189 0)"
                  fill="#4f3838"
                ></path>
                <path
                  id="Path_12744"
                  data-name="Path 12744"
                  d="M8.209,33.474h2.07v6.209c0,.828.414,1.656,1.242,1.656a1.445,1.445,0,0,1,.828.414,1.521,1.521,0,0,0,1.242-.414l12-7.864H45.462a6.366,6.366,0,0,0,6.209-6.209V10.709A6.366,6.366,0,0,0,45.462,4.5H8.209A6.366,6.366,0,0,0,2,10.709V27.266A6.366,6.366,0,0,0,8.209,33.474ZM6.139,10.709a1.955,1.955,0,0,1,2.07-2.07H45.462a1.955,1.955,0,0,1,2.07,2.07V27.266a1.955,1.955,0,0,1-2.07,2.07h-20.7a1.521,1.521,0,0,0-1.242.414l-9.106,6.209V31.4a1.955,1.955,0,0,0-2.07-2.07H8.209a1.955,1.955,0,0,1-2.07-2.07Z"
                  transform="translate(3.139 9.418)"
                  fill="#c72e47"
                ></path>
                <path
                  id="Path_12745"
                  data-name="Path 12745"
                  d="M58.949,70.387a1.521,1.521,0,0,0-.414-1.242v-.414c0-.414-.414-.828-.414-1.242a12.194,12.194,0,0,0-7.864-7.037L39.494,57.142V52.588a16.457,16.457,0,0,0,7.037-13.245V36.859l2.484-7.451A6.928,6.928,0,0,0,47.359,23.2a7.445,7.445,0,0,0-3.725-2.484,7.677,7.677,0,0,0-2.9-4.967A8.921,8.921,0,0,0,33.7,13.68L17.971,15.336a7.61,7.61,0,0,0-5.795,3.311c-1.242,2.07-2.07,4.139-1.242,6.623l2.484,10.348V38.1a16.457,16.457,0,0,0,7.037,13.245V55.9L9.692,59.211a12.042,12.042,0,0,0-7.037,5.795c-.414.414-.414.828-.828,1.656v.414c0,.414-.414.828-.414,1.242v.828A1.521,1.521,0,0,1,1,70.387V81.563a1.955,1.955,0,0,0,2.07,2.07h53.81a1.955,1.955,0,0,0,2.07-2.07V70.387ZM15.487,21.131a9.013,9.013,0,0,1,3.311-2.07l15.729-2.484a4.222,4.222,0,0,1,3.725.828,5.247,5.247,0,0,1,1.656,3.725,1.955,1.955,0,0,0,2.07,2.07,2.95,2.95,0,0,1,2.484,1.242,3.041,3.041,0,0,1,.828,2.484l-1.656,4.553L40.736,29A6.993,6.993,0,0,0,36.6,27.753H23.352A6.993,6.993,0,0,0,19.212,29l-2.484,2.07-1.656-7.037a3.635,3.635,0,0,1,.414-2.9Zm2.07,17.385V36.032L21.7,32.306c.414,0,.828-.414,1.656-.414H37.011a1.521,1.521,0,0,1,1.242.414l4.139,3.725v2.484A12.2,12.2,0,0,1,29.974,50.933,12.453,12.453,0,0,1,17.557,38.515ZM29.974,55.072a20.971,20.971,0,0,0,5.381-.828v2.484a3.138,3.138,0,0,1-.828,1.656,6.647,6.647,0,0,1-4.553,2.07,5.93,5.93,0,0,1-4.553-2.07,3.138,3.138,0,0,1-.828-1.656v-2.9a11.458,11.458,0,0,0,5.381,1.242Zm-19.04,8.692L21.7,60.453a.405.405,0,0,0,.414.414,10.194,10.194,0,0,0,7.864,3.725c3.311,0,6.209-1.242,7.864-3.725l.414-.414L48.6,63.764a6.671,6.671,0,0,1,2.9,1.656c-5.795,2.07-9.52,7.451-9.52,14.073H17.971A15.468,15.468,0,0,0,8.451,65.42,8.659,8.659,0,0,1,10.934,63.764ZM5.139,72.043a5.25,5.25,0,0,1,.414-2.484v-.828a11.054,11.054,0,0,1,8.278,10.348H5.139Zm49.67,7.451H46.117A10.6,10.6,0,0,1,54.4,69.145c0,.414,0,.414.414.828a17.927,17.927,0,0,0,.414,2.07v7.451Z"
                  transform="translate(0 37.868)"
                  fill="#4f3838"
                ></path>
                <path
                  id="Path_12746"
                  data-name="Path 12746"
                  d="M6.07,12.639h20.7a1.955,1.955,0,0,0,2.07-2.07,1.955,1.955,0,0,0-2.07-2.07H6.07A1.955,1.955,0,0,0,4,10.57,1.955,1.955,0,0,0,6.07,12.639Z"
                  transform="translate(9.418 21.965)"
                  fill="#4f3838"
                ></path>
                <path
                  id="Path_12747"
                  data-name="Path 12747"
                  d="M6.07,10.639H35.044a1.955,1.955,0,0,0,2.07-2.07,1.955,1.955,0,0,0-2.07-2.07H6.07A1.955,1.955,0,0,0,4,8.57,1.955,1.955,0,0,0,6.07,10.639Z"
                  transform="translate(9.418 15.689)"
                  fill="#4f3838"
                ></path>
                <path
                  id="Path_12748"
                  data-name="Path 12748"
                  d="M24.07,11.778a1.955,1.955,0,0,0,2.07-2.07,2.07,2.07,0,0,1,4.139,0c0,.828-.414,1.656-1.242,1.656a7.075,7.075,0,0,0-2.9,5.381v1.242a2.07,2.07,0,0,0,4.139,0V16.745a2.15,2.15,0,0,1,.828-1.656,5.546,5.546,0,0,0,3.311-5.381A6.366,6.366,0,0,0,28.209,3.5,6.366,6.366,0,0,0,22,9.709,1.955,1.955,0,0,0,24.07,11.778Z"
                  transform="translate(65.894 6.278)"
                  fill="#c72e47"
                ></path>
                <ellipse
                  id="Ellipse_1322"
                  data-name="Ellipse 1322"
                  cx="2"
                  cy="2.5"
                  rx="2"
                  ry="2.5"
                  transform="translate(92.971 29.491)"
                  fill="#4f3838"
                ></ellipse>
              </g>
            </svg>
            <p className="my-4 mt-2 text-center text-[20px] font-semibold text-[#4F3838]">
              Lama Fera Healing Attainment
            </p>
            <p className="text-center">
              You will be informed once the lama fera energy healing session is
              completed. Our lama fera therapist will be in touch with you
              throughout and will solve any queries you may have.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F8F6] py-8 2xl:px-52">
        <p className="my-24 text-center text-[30px] font-semibold text-[#4F3838]">
          Enlighten Yourself!
          <p>with the fastest and most powerful healing technique.</p>
        </p>
        <div className="flex gap-6">
          <div>
            <img
              src="https://yourspiritualrevolution.org/wp-content/uploads/2021/12/Distance-Lama-Fera-Healing.jpg"
              alt=""
              width={600}
              className="max-w-[500px] shadow-900"
            />
          </div>
          <div className="grid gap-5">
            <p className="text-[28px] font-semibold">
              {' '}
              Distance Lama Fera Healing
            </p>
            <p className="text-[20px]">
              Unblock your mind with Distance Lama Fera Healing.
            </p>
            <p className="text-[20px]">
              Powerful Healing for 7 days (7 Sessions)
            </p>
            <p className="text-[20px]">Price: ₹5,999 (Incl. GST) / US $99</p>
            <AddToCart data={product} variant="big" />

            <button
              style={{
                backgroundColor: '#4F3838',
                fontWeight: '500',
                padding: `16px 160px  `,
              }}
              onClick={buyNowClickHandler}
              className="my-4 rounded-full text-[28px] text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <CartCounterButton />

      <section className="my-8 2xl:px-52">
        <p className="text-center text-[24px] font-semibold text-[#616AB4]">
          Frequently Asked Questions
        </p>
        <div className="py-4">
          <div className="grid grid-cols-1 gap-2">
            <Accordion items={faqs} translatorNS="en" />
          </div>
        </div>
      </section>
      <section
        className="lg:py-32"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url("https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Lama-Fera-Healing-Banner-2.jpg")',
          backgroundSize: '100%',
        }}
      >
        <div className="grid grid-cols-2">
          <div></div>
          <div className="grid gap-8">
            <p className="font-bold text-white xl:text-3xl">
              Eliminate Your Negative Energy And <br />
              Achieve A Sense Of Self-Awareness.
            </p>
            <div className="flex justify-start">
              <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-[18px] text-[#4F3838] ">
                Get Started Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const Checkbox = () => {
  return (
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
  );
};
DistanceLamaFeraHealing.getLayout = getLayout;

export default DistanceLamaFeraHealing;
