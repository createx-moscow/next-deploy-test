"use client";
import Link from "next/link";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import cl from "classnames";

type FormValues = {
  name: string;
  phone: string;
  checked: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

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
