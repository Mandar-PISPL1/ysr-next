import HealingProcess from '@/components/healingServices/HealingProcess';
import { getLayout } from '@/components/layouts/layout';
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
    `products/distance-emotion-code-and-body-code/`;
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

function Distancemoneyreiki(props: any) {
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
      <section className=" grid grid-cols-2">
        <div className="  flex flex-col justify-center px-16">
          <h1 className="my-6 text-[40px] font-semibold">
            Distance Money Reiki Healing
          </h1>
          <p className="text-[20px] font-semibold">
            Clear the negativity that stops you from attracting <br /> wealth
            abundance, prosperity & success.
          </p>
          <div className=" my-8 flex gap-8 ">
            <button
              style={{
                backgroundColor: '#0A2D4D',
                borderRadius: '30px 30px 30px 30px',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.2784313725490196)',
                padding: '15px 45px 12px 45px',
                fontWeight: '400',
                fontSize: '18px',
              }}
              className="text-white"
            >
              <a href="#buynow">Buy Now</a>
            </button>
            <button
              style={{
                backgroundColor: '#166AB4',
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
          </div>
        </div>
        <div className="bg-bgBlue">
          <img src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Money-First-Image.png" />
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="flex items-center justify-center bg-bgBlue">
          <img
            className="max-w-[600px]"
            src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/img1.jpg"
          />
        </div>
        <div className="  grid gap-6 px-16 py-8">
          <h1 className="my-6 text-[40px] font-semibold">
            What is Money Reiki?
          </h1>
          <p className="text-[18px]  ">
            Money Reiki specifically focuses on healing issues surrounding money
            & monetary growth. It works on correcting the energy that keeps you
            away from wealth, abundance, money & prosperity. Like reiki healing,
            it uses the energy to heal money issues and offer holistic healing
            to all financial aspects. It involves the power of manifestation
            alongside clearing the negative energies that sabotage monetary
            growth & financial abundance.
          </p>
          <p className="text-[18px]  ">
            Effective money reiki will offer you a deep understanding of the
            underlying issues with financial growth, blocks in money abundance &
            clears the unprocessed imbalances that keep you away from better
            opportunities. It transforms the energy system and removes the
            low-frequency monetary fears, insecurities, or past life karmic
            issues. It resolves the blockages and negatively affecting
            strategies of the energy field with high-frequency vibrations to
            make it precisely work like a magnet & attract more monetarily
            benefitting opportunities.
          </p>
          <p className="text-[18px]  ">
            Distance money reiki successfully removes past life issues that
            impact monetary growth & keep you away from success. It finds out
            the energy and issues, resolves them & transforms the energy field
            with positive affirmations that manifest & attract prosperity,
            wealth, money manifestation, success or anything concerning the
            expansion of your financial security.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2">
        <div className="px-16">
          <div className="my-6 text-[40px] font-semibold">
            Who does money reiki benefit?
          </div>
          <div className="ml-6 list-item text-[18px]  ">
            Anyone who is struggling from financial instability
          </div>
        </div>
        <div className="flex items-center justify-center bg-bgBlue p-16">
          <img
            className=" max-w-[600px]"
            src="https://yourspiritualrevolution.org/wp-content/uploads/2022/01/img2.jpg"
          />
        </div>
      </section>
      <section className="my-8 text-[#0A2D4D] 2xl:px-52">
        <p className="text-center text-[30px] font-semibold">Benefit</p>
        <div className="grid grid-cols-3">
          <div className="flex gap-2 rounded-xl bg-bgBlue px-6 py-8 text-[20px] shadow-700 ">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#0A2D4D] text-[#0A2D4D] text-black">
              1
            </div>

            <p>Removes blockages from wealth abundance & success</p>
          </div>
        </div>
        <HealingProcess onClick={buyNowClickHandler} />
      </section>
    </section>
  );
}
Distancemoneyreiki.getLayout = getLayout;
export default Distancemoneyreiki;
