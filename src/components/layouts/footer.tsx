import { useTranslation } from 'next-i18next';
import { siteSettings } from '@/config/site';
import Link from '@/components/ui/link';
import Logo from '@/components/ui/logo';
import SubscriptionWidget from '@/components/settings/subscribe-to-newsletter';
import AboveFooter from './above-footer';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <AboveFooter />
      <div className="flex w-full flex-col border-gray-800 bg-white px-5 md:px-10 lg:border-b-8 lg:px-[50px] xl:px-16">
        {/* Top */}
        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 pt-16 md:grid-cols-3 lg:pt-24 lg:pb-16 xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xl:gap-8 2xl:grid-cols-5">
          <div className="flex flex-col gap-6">
            <div className="mb-[8px]  items-start text-[20px]  font-semibold ">
              About <span className="text-red-600"> Your Spiritual </span>
              <span className="text-blue-600">Revolution LLP</span>
            </div>

            <address className="text-md mb-7 not-italic text-heading">
              Register now to get high quality curated content worth thousands
              of dollars like webinars, ecourses and ebooks for integral
              evolution of your mind, body and soul – for FREE!
            </address>
            <span className="text-md mb-1 text-heading">
              Contact Us: amitt@YourSpiritualRevolution.org
            </span>
          </div>

          {siteSettings.footer.menus.map((menu, idx) => (
            <div className="flex flex-col" key={`${menu.title}-${idx}`}>
              <h3 className="mt-3 mb-4 font-semibold text-heading lg:mb-7">
                {t(menu.title)}
              </h3>

              <ul className="space-y-3">
                {menu.links.map((link, index) => (
                  <li key={`${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-heading transition-colors hover:text-blue-600"
                    >
                      {t(link.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* <div className="col-span-full md:col-span-2 lg:col-auto">
            <SubscriptionWidget
              title="text-subscribe-now"
              description="text-subscribe-details"
            />
          </div> */}
        </div>

        <div className="grid gap-4 border-t py-4">
          <div className="grid gap-3">
            <p className="text-[24px] font-semibold">About Us</p>

            <p>
              Your Spiritual Revolution was founded by Amitt Parikh in 2007 and
              has been published as a monthly eMagazine. In 2021 Your Spiritual
              Revolution started offering unique integral healing services and
              products for the wellness of mind, body and soul.
            </p>
            <p>
              All our healers are verified healers having several years of
              professional experience, successful healings apart from being
              highly spiritually evolved.
            </p>
            <p>
              Amitt Parikh is a modern mystic, an author, an intuitive life
              coach and above all a seeker of The Truth. He has 25 years of
              experience in the IT industry and has been on the spiritual
              journey for the past 3 decades working with diverse healing
              modalities and belief systems of East and West under various
              masters.
            </p>
          </div>

          <div className="grid gap-3">
            <p className="text-[24px] font-semibold">
              We Guarantee the Highest Quality
            </p>

            <p>
              Your Spiritual Revolution offers you an opportunity to channel the
              right energy & transform the negativity into positivity with the
              help of naturally charged healing products at the best prices.
              Every product & service offered by Your Spiritual Revolution is
              highly effective & curated to encourage spiritual awakening of the
              mind, body & soul. With a panel of experienced healers, we have
              now extended our spiritual aids by providing the highest quality
              energetically charged products & accessories too. Check out our
              Integral Healing services and Shop now page for better insights
              about the offerings and order spiritually enlightened products!
            </p>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-8 flex w-full flex-col items-center border-t border-gray-200 pt-8 pb-12 lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0">
          <span className="order-2 text-sm text-heading lg:order-1">
            &copy; {t('text-copyright')} {new Date().getFullYear()}{' '}
            <Link
              className="  font-bold text-heading transition-colors hover:text-accent"
              href={siteSettings.footer.copyright.href}
            >
              {siteSettings.footer.copyright.name}.
            </Link>{' '}
            {t('text-rights-reserved')}
          </span>

          {siteSettings.footer.payment_methods && (
            <div className="order-1 mb-5 flex items-center space-x-5 rtl:space-x-reverse lg:order-2 lg:mb-0">
              {siteSettings.footer.payment_methods.map((method, idx) => (
                <Link
                  className="relative flex h-5 w-auto items-center overflow-hidden"
                  key={`${method.url}-${idx}`}
                  href={method.url}
                >
                  {/* eslint-disable */}
                  <img src={method.img} className="max-h-full max-w-full" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
