import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { Form } from "../../../components/Form/Form";
import { Penalties } from "../../../components/Penalties/Penalties";

import { License } from "../../../components/License/License";
import { Ipl } from "../../../components/Ipl/Ipl";
import { Advantages } from "../../../components/Advantages/Advantages";

export default function OgnezashitaKovrov() {
  return (
    <>
      <Advantages title="Огнезащита тканей и ковровых покрытий от 1 дня"></Advantages>
      <Form></Form>
      <Penalties></Penalties>
      <License></License>
      <Ipl></Ipl>
    </>
  );
}
