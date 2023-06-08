"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
//import fukam from "./partners/fukam.webp";
import styles from "./Partners.module.scss";

import { Autoplay, Pagination, Navigation } from "swiper";

const menu = [
  {
    alt: "Логотип компании Фукам",
    link: "/partners/fukam.webp",
    width: 95,
    height: 95,
  },
  {
    alt: "Логотип компании Тизол",
    link: "/partners/tizol.svg",
    width: 272,
    height: 56,
  },
  {
    alt: "Логотип компании Норт",
    link: "/partners/nort.webp",
    width: 213,
    height: 102,
  },
  {
    alt: "Логотип компании Огнеза",
    link: "/partners/ogneza.webp",
    width: 194,
    height: 40,
  },
  // {
  //   alt: "Логотип компании Болид",
  //   link: "/partners/bolid.webp",
  //   width: 159,
  //   height: 57,
  // },
  // {
  //   alt: "Логотип компании Рубеж",
  //   link: "/partners/rubezh.webp",
  //   width: 160,
  //   height: 43,
  // },
];

export const Partners = () => {
  return (
    <>
      <section>
        <h2>Работаем с ведущими поставщиками огнезащитных материалов</h2>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={2}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2500}
          loop={true}
          modules={[Autoplay]}
          // wrapperTag={"ul"}
          className={styles.slider}
        >
          <ul className={styles.partners__list}>
            {menu.map((item, index) => {
              return (
                <li key={index} className={styles.partners__item}>
                  <SwiperSlide className={styles.slider__slide}>
                    <Image
                      src={item.link}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                    ></Image>
                  </SwiperSlide>
                </li>
              );
            })}
          </ul>
        </Swiper>
      </section>
    </>
  );
};
