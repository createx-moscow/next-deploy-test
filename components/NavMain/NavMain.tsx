// "use client";

import Link from "next/link";
import styles from "./NavMain.module.scss";
import { useState } from "react";

const menu = [
  {
    name: "О компании",
    link: "/about",
  },
  { name: "Статьи", link: "/blog" },
  { name: "Услуги", link: "/uslugi" },
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
        <ul>
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

// <nav>
//   <ul>
//     {menu.map((item, index) => {
//       return (
//         <li key={index}>
//           <Link href={`/item.name`}>{item.name}</Link>
//         </li>
//       );
//     })}
//   </ul>
// </nav>;
