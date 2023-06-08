"use client";
import Link from "next/link";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import cl from "classnames";
import ky from "ky";
import axios from "axios";

type FormValues = {
  name: string;
  phone: string;
  checked: string;
};

// const response = await ky.post(URI_API);

export const Form = () => {
  const TOKEN = "6168268856:AAF6S4IQUOPl6CwcC-hX82Vzq9zhh-6LYY0";
  const CHAT = -1001937178937;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    axios.post(URI_API, {
      chat_id: CHAT,
      parseMode: "html",
      text: `Имя: ${data.name} ` + ` Телефон: ${data.phone}`,
    });

    console.log(data);
    console.log(data);
  });

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.form__container}>
          <h2 className={styles.form__header}>
            Рассчитать стоимость работ по огнезащитной обработке
          </h2>
        </div>
        <input
          className={styles.form__item}
          type="text"
          placeholder="Имя"
          {...register("name", { required: true })}
        />
        <input
          className={styles.form__item}
          type="text"
          placeholder="Телефон"
          {...register("phone", { required: true })}
        />
        <input
          className={cl(styles.form__item, styles.form__item_submit)}
          type="submit"
          value="Рассчитать стоимость"
        />
        <div className={styles.form__item_checked}>
          <input type="checkbox" {...register("checked", { required: true })} />
          <span className={styles.form__item_checked}>
            Согласен на обработку
            <Link className={styles.form__link} href="/Policy">
              <span className={styles.form__personal}>персональных данных</span>
            </Link>
          </span>
        </div>
      </form>
    </>
  );
};
