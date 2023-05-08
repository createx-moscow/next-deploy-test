// "use client";

import Link from "next/link";
import styles from "./NavMain.module.scss";
import { useState } from "react";

const menu = [
  {
    name: "О компании",
    link: "/about",
  },
  { name: "Услуги", link: "/uslugi" },
  { name: "Статьи", link: "/blog" },
  { name: "Партнеры", link: "/partners" },
  { name: "Контакты", link: "/contacts" },
];

export const NavMain = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={
          !open ? `${styles.menu__btn}` : `${styles.menu__btn} ${styles.open}`
        }
      >
        <div className={styles.menu__burger}></div>
      </div>
      <nav
        onClick={() => setOpen(!open)}
        className={!open ? styles.nav : `${styles.nav} ${styles.nav_open}`}
      >
        <ul className={styles.nav__list}>
          {menu.map((item, index) => {
            return (
              <li key={index} className={styles.nav__item}>
                <Link href={item.link} className={styles.nav__link}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
