import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { Form } from "../../components/Form/Form";
import { Partners } from "../../components/Partners/Partners";
import { License } from "../../components/License/License";
import { Ipl } from "../../components/Ipl/Ipl";

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
    priceFrom: 150,
  },
  {
    header: "Металлоконструкции",
    href: "/OgnezashitaMetall",
    imgSrc: "/Homepage/ogn_metall.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "металлоконструкция",
    priceFrom: 250,
  },
  {
    header: "Воздуховоды и вентиляцию",
    href: "/OgnezashitaVozduhovod",
    imgSrc: "/Homepage/ogn_vosduhovod.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Воздуховоды и вентиляцию",
    priceFrom: 350,
  },
  {
    header: "Ткани и ковровые покрытия",
    href: "/OgnezashitaKovrov",
    imgSrc: "/Homepage/ogn_kovry.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Ткани и ковровые покрытия",
    priceFrom: 450,
  },
  {
    header: "Офисные помещения",
    href: "/OgnezashitaOffice",
    imgSrc: "/Homepage/ogn_office.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Офисные помещения",
    priceFrom: 550,
  },
  {
    header: "Чердаки",
    href: "/OgnezashitaCherdakov",
    imgSrc: "/Homepage/ogn_cherdak.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Чердаки",
    priceFrom: 650,
  },
];

const advantages = [
  "Обрабатываем до 2 000 м2 в день",
  "Без остановки работы предприятия",
  "Выдаем нормативные документы",
  "Устраняем все замечания",
  "Подготавливаем к проверке",
  "Гарантируем согласование c ГУ МЧС",
];

export default function Home() {
  return (
    <>
      <section className={styles.advantages}>
        <h1>Огнезащита любых конструкций и материалов от 1 дня</h1>
        <div className={styles.advantages__pics}>
          <div className={styles.advantages__pics_left}>
            <Image
              className={styles.advantages__pic}
              src="/4.jpg"
              width={170}
              height={260}
              alt=""
              sizes="(max-width: 360px) 60vw"
            />
          </div>
          <div className={styles.advantages__pics_right}>
            <Image
              className={styles.advantages__pic}
              src="/8.jpg"
              width="140"
              height="140"
              alt=""
              sizes="(max-width: 360px) 40vw"
            />
            <Image
              className={styles.advantages__pic}
              src="/1.jpg"
              width="140"
              height="100"
              alt=""
              sizes="(max-width: 360px) 40vw"
            />
          </div>
        </div>
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
      <br />
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
                    <span className={styles.services__price}>
                      от {item.priceFrom} р. за метр<sup>2</sup>
                    </span>
                    <h2 className={styles.services__header}>{item.header}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <License></License>
      <Ipl></Ipl>
      <Partners></Partners>
    </>
  );
}
