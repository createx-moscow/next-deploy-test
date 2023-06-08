"use client";

import Image from "next/image";
import dogovor from "./assets/dogovor.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.scss";
import styles from "./License.module.scss";

export const License = () => {
  return (
    <>
      <section className={styles.license}>
        <h2>
          Действуем на основании лицензии МЧС. Работаем по договору,
          предоставляем гарантию.
        </h2>
        <div className={styles.license_center}>
          <Image
            className={styles.license__license}
            src="/lic1.webp"
            width={300}
            height={400}
            alt="Лицензия МЧС. ООО Пожконтроль. Лицевая сторона"
          />

          <Image
            src="/lic2.webp"
            width={300}
            height={400}
            alt="Лицензия МЧС. ООО Пожконтроль. Обратная сторона"
          />

          <Image
            src={dogovor}
            width={300}
            height={400}
            alt="Пример договора. ООО Пожконтроль. Титульная страница"
          />
          <Image
            src={dogovor}
            width={300}
            height={400}
            alt="Пример договора. ООО Пожконтроль. Страница с гарантийными обязательствами"
          />
          {/* <Swiper
            className={styles.swiper}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={"auto"}
            speed={1500}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{ delay: 0 }}
            // autoplay={{
            //   delay: 100,
            //   disableOnInteraction: false,
            // }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className={styles.license__license}>
              <Image
                // className={styles.license__license}
                src="/lic1.webp"
                width={300}
                height={400}
                alt="Лицензия МЧС. ООО Пожконтроль. Лицевая сторона"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.license__license}>
              <Image
                // className={styles.license__license}
                src="/lic1.webp"
                width={300}
                height={400}
                alt="Лицензия МЧС. ООО Пожконтроль. Лицевая сторона"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.license__license}>
              <Image
                // className={styles.license__license}
                src="/lic1.webp"
                width={300}
                height={400}
                alt="Лицензия МЧС. ООО Пожконтроль. Лицевая сторона"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.license__license}>
              <Image
                // className={styles.license__license}
                src="/lic1.webp"
                width={300}
                height={400}
                alt="Лицензия МЧС. ООО Пожконтроль. Лицевая сторона"
              />
            </SwiperSlide>
          </Swiper> */}
        </div>
      </section>
    </>
  );
};
