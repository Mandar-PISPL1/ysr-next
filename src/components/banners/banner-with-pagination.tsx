import {
  Swiper,
  SwiperSlide,
  Pagination,
  Autoplay,
} from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import type { Banner } from '@/types';

interface BannerProps {
  banners: Banner[] | undefined;
  layout?: string;
  slug?: string;
}

const BannerWithPagination: React.FC<BannerProps> = ({ banners, slug }) => {
  const _banners = [
    {
      id: 12,
      type_id: 1,
      title: 'Your Spiritual Revolution',
      description:
        'Your Spiritual Revolution offers you unique integral healing services and products for the wellness of mind, body and soul. Contact Us to Know More!!',
      image: {
        id: 907,
        original:
          'https://yourspiritualrevolution.org/wp-content/uploads/2022/08/Shop-Page-Banner.jpg',
        thumbnail:
          'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/grocery-thumbnail.jpg',
      },
      url: 'https://yourspiritualrevolution.org/shop/',
      created_at: '2021-07-17T13:21:55.000000Z',
      updated_at: '2021-07-17T13:21:55.000000Z',
    },
    {
      id: 13,
      type_id: 1,
      title: 'Your Spiritual Revolution',
      description:
        'Your Spiritual Revolution offers you unique integral healing services and products for the wellness of mind, body and soul. Contact Us to Know More!!',
      image: {
        id: 907,
        original:
          'https://yourspiritualrevolution.org/wp-content/uploads/2022/01/Integral-Healing-Banner-Desktop.jpg',
        thumbnail:
          'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/grocery-thumbnail.jpg',
      },
      url: 'https://yourspiritualrevolution.org/integral-healing-service/',
      created_at: '2021-07-17T13:21:55.000000Z',
      updated_at: '2021-07-17T13:21:55.000000Z',
    },
    {
      id: 13,
      type_id: 1,
      title: 'Your Spiritual Revolution',
      description:
        'Your Spiritual Revolution offers you unique integral healing services and products for the wellness of mind, body and soul. Contact Us to Know More!!',
      image: {
        id: 907,
        original:
          'https://yourspiritualrevolution.org/wp-content/uploads/2023/01/YouTube-Video-Banner-Desktop-Size.jpg',
        thumbnail:
          'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/grocery-thumbnail.jpg',
      },
      url: 'https://www.youtube.com/@YourSpiritualRevolution',
      created_at: '2021-07-17T13:21:55.000000Z',
      updated_at: '2021-07-17T13:21:55.000000Z',
    },
  ];
  //https://www.youtube.com/@YourSpiritualRevolution
  return (
    <div className="compact relative">
      <div className="-z-1 overflow-hidden  ">
        <div className="relative">
          <Swiper
            id="banner"
            loop={true}
            modules={[Pagination, Autoplay]}
            resizeObserver={true}
            allowTouchMove={false}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={true}
            pagination={{
              bulletClass:
                'swiper-pagination-bullet !w-2.5 !h-2.5 !p-1 !rounded-full bg-gray-400 !border-0 !opacity-70',
              bulletActiveClass: '!w-3 !h-3 !bg-accent',
              clickableClass: 'cursor-pointer',
              clickable: true,
            }}
          >
            {_banners?.map((banner, idx) => (
              <SwiperSlide key={idx}>
                <Link href={`/${slug}${Routes.search}`}>
                  <div className="relative   w-full md:max-h-[550px]">
                    <Image
                      className="h-full w-full object-cover"
                      src={banner.image?.original ?? productPlaceholder}
                      alt={banner.title ?? ''}
                      layout="responsive"
                      width={2000}
                      height={550}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BannerWithPagination;
