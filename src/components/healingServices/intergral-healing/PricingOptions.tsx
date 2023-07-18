import { plans, plans_all_features } from '@/seed/integral-healing';
import { Switch } from '@headlessui/react';
import { useState } from 'react';
import SwitchButton from './SwitchButton';
import { useCart } from '@/store/quick-cart/cart.context';
import { useRouter } from 'next/router';
import { generateCartItem } from '@/store/quick-cart/generate-cart-item';

const PricingOptions = (props: any) => {
  const { goldProduct, silverProduct, broonzeProduct } = props.allProducts[0];
  const [isUSD, setIsUSD] = useState(false);

  const { addItemToCart, isInCart } = useCart();
  const router = useRouter();
  const getProductByPlan = (planName: string) => {
    if (planName === 'Broonze') {
      return broonzeProduct;
    }
    if (planName === 'Silver') {
      return silverProduct;
    }
    if (planName === 'Gold') {
      return goldProduct;
    }
  };
  const buyNowClickHandler = (plan: string) => {
    const product = getProductByPlan(plan);

    const item = generateCartItem(product, product);

    if (!isInCart(item.id)) {
      addItemToCart(item, 1);
      router.push('/checkout');
    }
  };
  return (
    <div className="  justify-center">
      <h4 className="my-6 text-center text-3xl font-semibold text-darkBlue">
        Choose Your Plan
      </h4>
      <div className="my-8 flex justify-center">
        <SwitchButton setIsUSD={setIsUSD} />
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-3  ">
        {plans.map((plan) => (
          <div className="rounded-lg shadow">
            <div
              style={{
                backgroundImage: ` linear-gradient(180deg, #166AB4 0%, #0B355A 100%) `,
                borderRadius: '16px 16px 0px 0px',
              }}
              className=" flex justify-center   py-4 font-semibold text-white"
            >
              <h2 className="text-2xl font-semibold  ">{plan.type}</h2>
            </div>
            <div className=" bg-white px-6  py-8 ">
              <p className="text-center text-[34px] font-semibold text-[#0A2D4D]">
                INCLUDES
              </p>

              <ul className="mt-4 space-y-2">
                {plans_all_features.map((feature) => (
                  <li
                    className={`flex items-center ${
                      plan.features.indexOf(feature.trim()) > -1
                        ? null
                        : 'text-muted'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-4 w-4 flex-shrink-0 ${
                        plan.features.find((f) => f.trim() === feature.trim())
                          ? 'text-green-600'
                          : ' text-muted'
                      } `}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 px-6">
              <p className="py-4 text-[25px] font-semibold">
                Healing Modalities <br /> {plan.healing_modalities}
              </p>
            </div>
            <div className="border-t-2 px-6">
              <p className="py-4 text-[25px] font-semibold">
                Healing Duration
                <br />
                {plan.healing_duration}
              </p>
            </div>
            <div className="border-t-2 px-6">
              <p className="py-4 text-[25px] font-semibold">
                Healing Sessions
                <br /> {plan.healing_sessions}
              </p>
            </div>
            <div className="border-t-2 px-6">
              <p className="py-4 text-[25px] font-semibold">
                PRICE
                {isUSD ? (
                  <span> $ {plan.price_usd}</span>
                ) : (
                  <span> INR {plan.price_inr}</span>
                )}
              </p>
              {!isUSD && <p className="  text-muted">Incl. 18% GST</p>}
            </div>
            <div className="flex justify-center py-4">
              <button
                onClick={() => buyNowClickHandler(plan.type)}
                className="mt-6 rounded bg-[#0A2D4D] py-2 px-4 font-semibold text-white hover:bg-[#0A2D4D]"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
