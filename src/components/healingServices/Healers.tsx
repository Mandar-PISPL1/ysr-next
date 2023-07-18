import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Swiper,
  SwiperSlide,
  Navigation,
  SwiperOptions,
} from '@/components/ui/slider';
import { Autoplay } from 'swiper';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';

import { useIsRTL } from '@/lib/locals';
export default function Healers() {
  const { isRTL } = useIsRTL();

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    // 900: {
    //   slidesPerView: 4,
    // },

    // 1100: {
    //   slidesPerView: 5,
    // },

    // 1280: {
    //   slidesPerView: 6,
    //   spaceBetween: 24,
    // },
    // 1400: {
    //   slidesPerView: 7,
    //   spaceBetween: 30,
    // },
    // 1700: {
    //   slidesPerView: 8,
    //   spaceBetween: 30,
    // },
    // 2600: {
    //   slidesPerView: 10,
    //   spaceBetween: 40,
    // },
  };

  const [healers, setHealers] = useState([]);
  const fetchTestimonials = async () => {
    const url = process.env.NEXT_PUBLIC_WP_API + `/wp/v2/healers-listing`;
    const data = await fetch(url).then((r) => r.json());
    if (data && data.length > 0) {
      setHealers(data);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <div className="my-8">
      <p className="my-8 text-center text-3xl font-bold text-darkBlue">
        Our Panel of Healers
      </p>
      <Swiper
        id="author-card-menu"
        className=" grid grid-cols-3 !px-3 py-16"
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl,
          nextEl,

          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={breakpoints}
      >
        {healers.length > 0 &&
          healers.map((healer: any, idx: number) => (
            <SwiperSlide
              key={idx}
              className=" rounded-md border  bg-[#3F83BE]  px-4  py-4 shadow-900 "
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div>
                  <Image
                    src={healer.x_featured_media_original}
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div className="font-semibold text-white">
                  <p className="text-xl">{healer.title.rendered}</p>
                </div>
                <div className="text-center text-white">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: healer.content.rendered,
                    }}
                  ></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
