import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Огнезащита любых конструкций и материалов",
};

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <h1>Огнезащита любых конструкций и материалов от 1 дня</h1>
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

        <Link href="/OgnezashitaDerevo">
          <Image
            src="/Homepage/ogn_derevo.webp"
            width={300}
            height={200}
            alt=""
          />
          <div>Деревянные конструкции</div>
        </Link>
        <Link href="/OgnezashitaMetall">
          <Image
            src="/Homepage/ogn_metall.webp"
            width={300}
            height={200}
            alt=""
          />
          <div>Металлоконструкции</div>
        </Link>
        <Link href="/OgnezashitaVozduhovod">
          <Image
            src="/Homepage/ogn_vosduhovod.webp"
            width={300}
            height={200}
            alt=""
          />
          <div>Воздуховоды и вентиляцию</div>
        </Link>
        <Link href="/OgnezashitaKovrov">
          <Image
            src="/Homepage/ogn_kovry.webp"
            width={300}
            height={200}
            alt=""
          />
          <div>Ткани и ковровые покрытия</div>
        </Link>
        <Link href="/OgnezashitaOffice">
          <Image
            src="/Homepage/ogn_office.webp"
            width={300}
            height={200}
            alt=""
          />
          <div>Офисные помещения</div>
        </Link>
        <Link href="/OgnezashitaCherdakov">
          <Image
            src="/Homepage/ogn_cherdak.webp"
            width={300}
            height={200}
            alt=""
          />
          <div>Чердаки</div>
        </Link>
      </section>

      <section className={styles.license}>
        <h2>Действуем на основании лицензии МЧС</h2>
        <Image src="/lic1.webp" width={300} height={400} alt="" />
        <Image src="/lic2.webp" width={300} height={400} alt="" />
      </section>
    </>
  );
}
