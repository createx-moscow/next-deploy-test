import Image from "next/image";
import styles from "./page.module.scss";

export const metadata = {
  title:
    "Огнезащитная обработка металлоконструкций в Москве и Московской области",
  description:
    "Наша компания предлагает полный спектр услуг по огнезащитной обработке, в том числе огнезащиту металлоконструкций",
};

export default function OgnezashitaMetall() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Огнезащита металлоконструкций от 1 дня</h1>

        <Image
          src="/Homepage/ogn_metall.webp"
          width={400}
          height={200}
          alt=""
        />
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
      </section>

      <section className={styles.license}>
        <h2>Действуем на основании лицензии МЧС</h2>
        <Image src="/lic1.webp" width={300} height={400} alt="" />
        <Image src="/lic2.webp" width={300} height={400} alt="" />
      </section>
    </main>
  );
}
