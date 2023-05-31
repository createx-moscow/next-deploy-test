import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { License } from "../../../components/License/License";
import { Ipl } from "../../../components/Ipl/Ipl";
import { Advantages } from "../../../components/Advantages/Advantages";

export default function OgnezashitaDerevo() {
  return (
    <>
      <Advantages></Advantages>

      <License></License>
      <Ipl></Ipl>
    </>
  );
}
