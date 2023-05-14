import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { Form } from "../../components/Form/Form";
import { Partners } from "../../components/Partners/Partners";

export const metadata = {
  title: "Огнезащита любых конструкций и материалов",
  description:
    "Компания Пожконтроль обеспечивает огнезащитную обработку конструкций и материалов. Используем оптимальные огнезащитные составы.",
};

const data = [
  {
    header: "Деревянные конструкции",
    href: "/OgnezashitaDerevo",
    imgSrc: "/Homepage/ogn_derevo.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "деревянная конструкция",
  },
  {
    header: "Металлоконструкции",
    href: "/OgnezashitaMetall",
    imgSrc: "/Homepage/ogn_metall.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "металлоконструкция",
  },
  {
    header: "Воздуховоды и вентиляцию",
    href: "/OgnezashitaVozduhovod",
    imgSrc: "/Homepage/ogn_vosduhovod.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Воздуховоды и вентиляцию",
  },
  {
    header: "Ткани и ковровые покрытия",
    href: "/OgnezashitaKovrov",
    imgSrc: "/Homepage/ogn_kovry.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Ткани и ковровые покрытия",
  },
  {
    header: "Офисные помещения",
    href: "/OgnezashitaOffice",
    imgSrc: "/Homepage/ogn_office.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Офисные помещения",
  },
  {
    header: "Чердаки",
    href: "/OgnezashitaCherdakov",
    imgSrc: "/Homepage/ogn_cherdak.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Чердаки",
  },
];

const advantages = [
  "Обработка до 2 000 м2 в день",
  "Выдача нормативных документов",
  "Устраним все замечания",
  "Подготовим к проверке",
  "Гарантия согласования c ГУ МЧС",
];

export default function Home() {
  return (
    <>
      <section className={styles.advantages}>
        <h1>Огнезащита любых конструкций и материалов от 1 дня</h1>
        <ul className={styles.advantages__list}>
          {advantages.map((item, index) => {
            return (
              <li key={index} className={styles.advantages__item}>
                {item}
              </li>
            );
          })}
        </ul>
      </section>
      <Form></Form>
      <section>
        <h2>Защищаем от пожара с помощью оптимального огнезащитного состава</h2>

        <div className={styles.services}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.services__service}>
                <Link href={item.href} className={styles.services__link}>
                  <Image
                    src={item.imgSrc}
                    width={item.imgWidth}
                    height={item.imgHeight}
                    alt={item.imgAlt}
                    className={styles.services__image}
                  />
                  <div className={styles.services__text}>
                    <h2 className={styles.services__header}>{item.header}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.license}>
        <h2>Действуем на основании лицензии МЧС</h2>
        <div className={styles.license_center}>
          <Image
            className={styles.license__license}
            src="/lic1.webp"
            width={300}
            height={400}
            alt=""
          />
          <Image src="/lic2.webp" width={300} height={400} alt="" />
        </div>
      </section>
      <Partners></Partners>
    </>
  );
}
