import React from 'react';
interface Props {
  img_src: string;
  data: {
    title: string;
    sub_title: string;
    session: string;
    price: string;
  };
  onClick: () => void;
}
function PricingBanner(props: Props) {
  const pricingData = {
    img_src:
      'https://yourspiritualrevolution.org/wp-content/uploads/2021/12/distance-pranic-healing.jpg',
    data: {
      title: `    Distance Pranic Healing`,
      sub_title: `            Connect with your inner-self through Pranic Healing.
`,
      session: `            Powerful Healing for 7 days (7 Sessions)
`,
      price: `            Price: ₹7,999 (Incl. GST) / US $129
`,
    },
  };
  return (
    <>
      <div id="buynow" className="grid px-32 lg:grid-cols-12">
        <div className="col-span-6 flex justify-center">
          <img
            src={props.img_src}
            className="rounded-lg shadow-downfall-lg"
            width={500}
          />
        </div>
        <div className="col-span-6">
          <p className="mb-6 text-[25px] font-semibold">{props.data.title}</p>
          <p className="my-4 text-[20px]">{props.data.sub_title}</p>
          <p className="my-4 text-[18px]">{props.data.session}</p>
          <p className="my-4 text-[18px]">{props.data.price}</p>

          <button
            onClick={props.onClick}
            className="my-4 w-2/3 rounded-full bg-[#166AB4] py-4 text-[20px] text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default PricingBanner;
