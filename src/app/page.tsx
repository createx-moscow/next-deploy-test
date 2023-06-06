import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import { AdvantagesText } from "../../components/AdvantagesText/AdvantagesText";
import { Form } from "../../components/Form/Form";
import { Partners } from "../../components/Partners/Partners";
import { License } from "../../components/License/License";
import { Ipl } from "../../components/Ipl/Ipl";
import { Advantages } from "../../components/Advantages/Advantages";

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
    header: "Чердачные помещения",
    href: "/OgnezashitaCherdakov",
    imgSrc: "/Homepage/ogn_cherdak.webp",
    imgWidth: 300,
    imgHeight: 200,
    imgAlt: "Чердаки",
    priceFrom: 650,
  },
];

export default function Home() {
  return (
    <>
      <Advantages></Advantages>

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
                    <h2 className={styles.services__header}>{item.header}</h2>
                    <span className={styles.services__price}>
                      от {item.priceFrom} р. за метр<sup>2</sup>
                    </span>
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
