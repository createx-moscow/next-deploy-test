import Image from "next/image";

import { Form } from "../../../components/Form/Form";
import { Penalties } from "../../../components/Penalties/Penalties";

import { License } from "../../../components/License/License";
import { Ipl } from "../../../components/Ipl/Ipl";
import { Advantages } from "../../../components/Advantages/Advantages";
import styles from "./page.module.scss";

export const metadata = {
  title:
    "Огнезащитная обработка металлоконструкций в Москве и Московской области",
  description:
    "Наша компания предлагает полный спектр услуг по огнезащитной обработке, в том числе огнезащиту металлоконструкций",
};

export default function OgnezashitaMetall() {
  return (
    <>
      <Advantages title="Огнезащита металлоконструкций от 1 дня"></Advantages>

      <Form></Form>
      <Penalties></Penalties>
      <License></License>
      <Ipl></Ipl>
    </>
  );
}
