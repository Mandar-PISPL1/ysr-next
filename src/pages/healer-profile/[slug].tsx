import Image from 'next/image';
import { getLayout } from '@/components/layouts/layout';
import PremiumTag from '@/components/healingServices/PremiumTag';
import BookOrWhatsappBtn from '@/components/healingServices/BookOrWhatsappBtn';
import PremiumSidebar from '@/components/healingServices/PremiumSidebar';
import SeoByRankMath from '@/components/products/SEO';
export { getStaticProps, getStaticPaths } from '@/framework/healer-profile.ssr';

function HealerProfilePage({ healer, isPremium, seoData }: any) {
  return (
    <div className="container mx-auto bg-white py-8 px-4  lg:py-16  lg:px-36">
      <SeoByRankMath {...seoData} />
      <div className="grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="rounded-lg border bg-[#EFEFEF] p-6">
            <div className="  gap-8 lg:flex">
              <div className="flex flex-col items-center lg:flex-shrink-0">
                <Image
                  alt={healer.title.rendered}
                  src={healer.x_featured_media_medium}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="my-4 flex justify-center">
                  <BookOrWhatsappBtn
                    isPremium={isPremium}
                    healer_whatsapp_link={
                      healer?.x_metadata?.healer_whatsapp_link
                    }
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-3xl font-semibold">
                  {healer.title.rendered}
                </p>
                {isPremium && <PremiumTag />}
                <div className="my-4 grid gap-4">
                  <div className="flex items-center">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.88 122.26"
                      className="h-6 w-6"
                    >
                      <defs></defs>
                      <title>health-care</title>
                      <path
                        className="cls-1"
                        d="M26.83,109V70.92H44c7.27,1.3,14.54,5.24,21.8,9.81H79.1c6,.36,9.19,6.48,3.32,10.49-4.66,3.43-10.82,3.23-17.14,2.66-4.36-.21-4.54,5.64,0,5.66,1.58.13,3.29-.25,4.79-.25,7.88,0,14.37-1.51,18.34-7.74l2-4.65,19.82-9.82c9.91-3.26,17,7.1,9.65,14.32a260.22,260.22,0,0,1-44.11,26c-10.94,6.65-21.87,6.42-32.79,0L26.83,109Zm41.1-97.8c5.24-5.45,8.9-10.17,17-11.1C100-1.6,114,13.9,106.33,29.16l-.14.27h-3V23.05a8.08,8.08,0,0,0-2.37-5.69l0,0A8,8,0,0,0,95.1,15H86.38a8.08,8.08,0,0,0-5.71,2.38h0a8.07,8.07,0,0,0-2.37,5.71v6.37H71.92a8.09,8.09,0,0,0-5.71,2.39h0a8.06,8.06,0,0,0-2.37,5.71v8.73a8.09,8.09,0,0,0,8.09,8.09h6.37v5.6L67.94,70.2l-9.4-9.05C47.23,50.26,28.79,36.56,28.18,19.57,27.76,7.68,37.14.06,47.94.19c9.65.13,13.71,4.93,20,11ZM0,67.25H21.67v45.61H0V67.25Z"
                      />
                      <path
                        className="cls-2"
                        d="M86.38,20.09H95.1a3,3,0,0,1,3,3v11.5h11.5a3,3,0,0,1,3,3v8.72a3,3,0,0,1-3,3H98.06V60.45a3,3,0,0,1-3,3H86.38a3,3,0,0,1-3-3V49.2H71.92a3,3,0,0,1-3-3V37.51a3,3,0,0,1,3-3h11.5V23.05a3,3,0,0,1,3-3Z"
                      />
                    </svg>
                    <div className="  flex flex-wrap text-sm   text-[#2f9eff]">
                      {Object.keys(healer.x_metadata.healer_therapies)
                        .map((key) => {
                          if (
                            healer.x_metadata.healer_therapies[key] === 'true'
                          ) {
                            return key;
                          }
                        })
                        .filter((t) => t !== undefined)
                        .map((service) => (
                          <div className="px-2 hover:underline">{service}</div>
                        ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className=" text-sm">
                      {healer.x_metadata.healer_address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-start gap-8">
            <button className="rounded-lg bg-[#053560] px-4 py-2 text-white outline-none">
              <a href="#healer"> About Healer</a>
            </button>
            <button className="rounded-lg bg-[#053560] px-4 py-2 text-white outline-none">
              <a href="#services">Services</a>
            </button>
          </div>
          <div id="healer" className="my-8 rounded-lg border bg-[#EFEFEF] ">
            <div className="healer-header-bg flex items-center gap-4 rounded-lg  px-6 py-2 font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>

              <p> Healer Details</p>
            </div>
            <div>
              <div
                className="post-content px-6 "
                dangerouslySetInnerHTML={{
                  __html: healer.x_metadata.about_healer,
                }}
              ></div>
            </div>
          </div>

          <div id="services" className="my-8 rounded-lg border bg-[#EFEFEF] ">
            <div className="healer-header-bg flex items-center gap-4 rounded-lg px-6 py-2 font-bold text-white">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 122.26"
                className="h-6 w-6 bg-white"
              >
                <defs></defs>
                <title>health-care</title>
                <path
                  className="cls-1"
                  d="M26.83,109V70.92H44c7.27,1.3,14.54,5.24,21.8,9.81H79.1c6,.36,9.19,6.48,3.32,10.49-4.66,3.43-10.82,3.23-17.14,2.66-4.36-.21-4.54,5.64,0,5.66,1.58.13,3.29-.25,4.79-.25,7.88,0,14.37-1.51,18.34-7.74l2-4.65,19.82-9.82c9.91-3.26,17,7.1,9.65,14.32a260.22,260.22,0,0,1-44.11,26c-10.94,6.65-21.87,6.42-32.79,0L26.83,109Zm41.1-97.8c5.24-5.45,8.9-10.17,17-11.1C100-1.6,114,13.9,106.33,29.16l-.14.27h-3V23.05a8.08,8.08,0,0,0-2.37-5.69l0,0A8,8,0,0,0,95.1,15H86.38a8.08,8.08,0,0,0-5.71,2.38h0a8.07,8.07,0,0,0-2.37,5.71v6.37H71.92a8.09,8.09,0,0,0-5.71,2.39h0a8.06,8.06,0,0,0-2.37,5.71v8.73a8.09,8.09,0,0,0,8.09,8.09h6.37v5.6L67.94,70.2l-9.4-9.05C47.23,50.26,28.79,36.56,28.18,19.57,27.76,7.68,37.14.06,47.94.19c9.65.13,13.71,4.93,20,11ZM0,67.25H21.67v45.61H0V67.25Z"
                />
                <path
                  className="cls-2"
                  d="M86.38,20.09H95.1a3,3,0,0,1,3,3v11.5h11.5a3,3,0,0,1,3,3v8.72a3,3,0,0,1-3,3H98.06V60.45a3,3,0,0,1-3,3H86.38a3,3,0,0,1-3-3V49.2H71.92a3,3,0,0,1-3-3V37.51a3,3,0,0,1,3-3h11.5V23.05a3,3,0,0,1,3-3Z"
                />
              </svg>

              <p>Services</p>
            </div>
            <div className="px-6 py-4">
              {Object.keys(healer.x_metadata.healing_services_session).map(
                (key) => (
                  <div className="my-7 flex justify-between text-xl font-bold">
                    <div className="">
                      {
                        healer.x_metadata.healing_services_session[key][
                          'service-name'
                        ]
                      }{' '}
                      :
                    </div>
                    <div>
                      {' '}
                      {
                        healer.x_metadata.healing_services_session[key][
                          'currency'
                        ]
                      }{' '}
                      {
                        healer.x_metadata.healing_services_session[key][
                          'service-charges'
                        ]
                      }
                      /session
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="col-span-4">
          {isPremium && (
            <PremiumSidebar
              healer_contact={healer?.x_metadata?.healer_contact}
              healer_email={healer?.x_metadata?.healer_email}
            />
          )}
        </div>
      </div>
    </div>
  );
}

HealerProfilePage.getLayout = getLayout;
export default HealerProfilePage;
