import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

export default function OgnezashitaOffice() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Огнезащита офисных помещений от 1 дня</h1>
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
        <Link href="/OgnezashitaDerevo">Derevo</Link>
        <Image
          src="/Homepage/ogn_office.webp"
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
