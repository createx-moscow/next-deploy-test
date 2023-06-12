"use client";
import Link from "next/link";
import styles from "./SectionSubmit.module.scss";
import { Button } from "../Button/Button";

import cl from "classnames";

export const SectionSubmit = () => {
  return (
    <>
      <section className={styles.form}>
        <div className={styles.form__container}>
          <h2 className={styles.form__header}>
            Получить план работ, расчёт и консультацию специалиста
          </h2>
        </div>

        <Button buttonText="Получить консультацию"></Button>
      </section>
    </>
  );
};
