import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { Form } from "../../../components/Form/Form";
import { Penalties } from "../../../components/Penalties/Penalties";

import { License } from "../../../components/License/License";
import { Ipl } from "../../../components/Ipl/Ipl";
import { Advantages } from "../../../components/Advantages/Advantages";
// import ognDerevo from "./Homepage/assets/ogn_derevo.webp";
// import ognMetall from "./Homepage/assets/ogn_metall.webp";
// import ognVosduhovod from "./Homepage/assets/ogn_vosduhovod.webp";
// import ognKovry from "./Homepage/assets/ogn_kovry.webp";
// import ognOffice from "./Homepage/assets/ogn_office.webp";
// import ognCherdak from "./Homepage/assets/ogn_cherdak.webp";

export default function OgnezashitaCherdakov() {
  return (
    <>
      <Advantages title="Огнезащита деревянных конструкций от 1 дня"></Advantages>
      <Form></Form>
      <Penalties></Penalties>
      <License></License>
      <Ipl></Ipl>
    </>
  );
}
