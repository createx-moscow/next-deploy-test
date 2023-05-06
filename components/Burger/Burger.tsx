"use client";

import styles from "./burger.module.scss";
import { useState } from "react";

export const Burger = () => {
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
    </>
  );
};
