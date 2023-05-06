import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
// import ognDerevo from "./Homepage/assets/ogn_derevo.webp";
// import ognMetall from "./Homepage/assets/ogn_metall.webp";
// import ognVosduhovod from "./Homepage/assets/ogn_vosduhovod.webp";
// import ognKovry from "./Homepage/assets/ogn_kovry.webp";
// import ognOffice from "./Homepage/assets/ogn_office.webp";
// import ognCherdak from "./Homepage/assets/ogn_cherdak.webp";

export default function OgnezashitaVozduhovod() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Огнезащита воздуховодов и вентиляции от 1 дня</h1>
        <ul>
          <li>Обработка до 2 000 м2 в день</li>
          <li>Выдача нормативных документов</li>
          <li>Устраним все замечания и подготовим к проверке</li>
          <li>Гарантия согласования c ГУ МЧС</li>
        </ul>
      </section>

      <section>
        <h2>Защищаем от пожара</h2>
        <div>С помощью оптимального огнезащитного состава</div>
        {/* <Image src={ognDerevo} width={300} height={200} alt="" />
        <Image src={ognMetall} width={300} height={200} alt="" />
        <Image src={ognVosduhovod} width={300} height={200} alt="" />
        <Image src={ognKovry} width={300} height={200} alt="" />
        <Image src={ognOffice} width={300} height={200} alt="" />
        <Image src={ognCherdak} width={300} height={200} alt="" /> */}
        <Link href="/OgnezashitaDerevo">Derevo</Link>
        <Image
          src="/Homepage/ogn_vosduhovod.webp"
          width={300}
          height={200}
          alt=""
        />
      </section>

      <section className={styles.license}>
        <h2>Действуем на основании лицензии МЧС</h2>
        <Image src="/lic1.webp" width={300} height={400} alt="" />
        <Image src="/lic2.webp" width={300} height={400} alt="" />
      </section>
    </main>
  );
}
