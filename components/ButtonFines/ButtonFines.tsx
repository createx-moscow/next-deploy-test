"use client";
import Link from "next/link";
import styles from "./ButtonFines.module.scss";
import { Button } from "../Button/Button";

import cl from "classnames";

export const ButtonFines = () => {
  return (
    <>
      <section className={styles.form}>
        <div className={styles.form__container}>
          <h2 className={styles.form__header}>Работайте без штрафов МЧС</h2>
        </div>

        <Button buttonText="Получить предложение"></Button>
      </section>
    </>
  );
};
