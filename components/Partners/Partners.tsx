// "use client";

import Image from "next/image";
import styles from "./Partners.module.scss";

const menu = [
  {
    alt: "Логотип компании Фукам",
    link: "/partners/fukam.webp",
    width: 95,
    height: 95,
  },
  {
    alt: "Логотип компании Тизол",
    link: "/partners/tizol.webp",
    width: 232,
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
  {
    alt: "Логотип компании Болид",
    link: "/partners/bolid.webp",
    width: 159,
    height: 57,
  },
  {
    alt: "Логотип компании Рубеж",
    link: "/partners/rubezh.webp",
    width: 160,
    height: 43,
  },
];

export const Partners = () => {
  return (
    <>
      <h2>Работаем с лидерами рынка</h2>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Image
                src={item.link}
                alt={item.alt}
                width={item.width}
                height={item.height}
              ></Image>
            </li>
          );
        })}
      </ul>
    </>
  );
};
