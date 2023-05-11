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
      text: `Имя: ${data.name} %0D%0A` + ` Телефон: ${data.phone}`,
    });

    console.log(data);
    console.log(data);
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2>Рассчитать стоимость работ по огнезащите</h2>
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
      <input className={styles.form__item} type="submit" />
      <div className={styles.form__item}>
        <input
          type="checkbox"
          {...register("checked", { required: true })}
          checked
        />
        <span className={styles.form__item_checked}>
          Согласен на обработку
          <Link href="/Policy">персональных данных</Link>
        </span>
      </div>
    </form>
  );
};
