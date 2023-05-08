"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Имя"
        {...register("name", { required: true })}
      />
      <input
        type="text"
        placeholder="Телефон"
        {...register("phone", { required: true })}
      />
      <div>
        <input
          type="checkbox"
          {...register("checked", { required: true })}
          checked
        />
        <span>
          Согласен на обработку
          <Link href="/Policy">персональных данных</Link>
        </span>
      </div>
      <input type="submit" />
    </form>
  );
};
