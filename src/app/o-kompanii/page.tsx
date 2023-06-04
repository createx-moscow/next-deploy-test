import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { License } from "../../../components/License/License";
import { Ipl } from "../../../components/Ipl/Ipl";
import { Advantages } from "../../../components/Advantages/Advantages";

export default function OgnezashitaDerevo() {
  return (
    <>
      <h1>О компании</h1>
      <h2>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ &quot;ПОЖКОНТРОЛЬ&quot;</h2>
      <div>ИНН 7743210603</div>
      <div>КПП 774301001</div>
      <div>ОГРН/ОГРНИП 1177746514593</div>
      <div>Код по ОКПО 15776350</div>
      <div>+7 (495) 175-01-01</div>
      <div>info@pog01.ru</div>
      <div>Режим работы: C 09:00 до 20:00 без выходных</div>
      <div>
        Местонахождение (адрес) 125212, Москва г, ш.Ленинградское, д.46, пом.6
      </div>
      <div>г. Москва, ул. Верхняя Первомайская, д. 43, оф. 200</div>
      <License></License>
      <Ipl></Ipl>
    </>
  );
}
