"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";
import logoSvg from "./assets/logo_small.png";
import iconPhone from "./assets/phone.png";
import iconMsg from "./assets/msg.png";

// import { Burger, NavMain, Button } from "../../components/index";
import { Burger } from "../Burger/Burger";
import { NavMain } from "../NavMain/NavMain";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            src={logoSvg}
            className={styles.logo}
            width="60"
            alt="Логотип Пожконтроль"
          ></Image>
        </Link>
        {/* <a href="tel:+74951750101">
          <Button onClick={() => {}}>+7(495)175-01-01</Button>
        </a> */}

        <a href="tel:+74951750101">
          <Image className="phone" src={iconPhone} width="50" alt=""></Image>
        </a>

        <a href="mailto:info@pog01.ru">
          <Image className="mail" src={iconMsg} width="50" alt=""></Image>
        </a>

        {/* <Burger></Burger> */}
        <NavMain></NavMain>
      </header>
    </>
  );
};
