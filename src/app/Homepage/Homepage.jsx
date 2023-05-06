import React from "react";

import styles from "./homepage.module.scss";
import imgLicense1 from "./assets/lic1.webp";
import imgLicense2 from "./assets/lic2.webp";
import imgOgnMetal from "./assets/ogn_metall.webp";
import imgOgnDerev from "./assets/ogn_derevo.webp";
import imgOgnVosduh from "./assets/ogn_vosduhovod.webp";
import imgOgnKovry from "./assets/ogn_kovry.webp";
import imgOgnOffice from "./assets/ogn_office.webp";
import imgOgnCherdak from "./assets/ogn_cherdak.webp";
import { Link } from "react-router-dom";
const list = [
  {
    link: "/ognezashita-metalloconstruktsyi",
    img: imgOgnMetal,
    imgAlt: "конструкция из металла",
    title: "Металлоконструкции",
    classMod: "#86bbee",
  },
  {
    link: "/ognezashita-derevyannyh-construktsyi",
    img: imgOgnDerev,
    imgAlt: "конструкция из дерева",
    title: "Деревянные конструкции",
    classMod: "#a79074",
  },
  {
    link: "/ognezashita-vozduhovodov",
    img: imgOgnVosduh,
    imgAlt: "конструкция из дерева",
    title: "Воздуховоды",
    classMod: "#a9a9a9",
  },

  {
    link: "/ognezashita-tkaney-i-kovrov",
    img: imgOgnKovry,
    imgAlt: "конструкция из дерева",
    title: "Ткани и ковровые покрытия",
    classMod: "#deb887",
  },
  {
    link: "/ognezashita-office",
    img: imgOgnOffice,
    imgAlt: "конструкция из дерева",
    title: "Офисные помещения",
    classMod: "#345e67",
  },
  {
    link: "/ognezashita-cherdakov",
    img: imgOgnCherdak,
    imgAlt: "конструкция из дерева",
    title: "Чердаки",
    classMod: "#a49381",
  },
];
const Homepage = () => {
  return (
    <>
      <section>
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

        <div className={styles.cards}>
          {list.map((obj) => (
            <Link to={obj.link}>
              <div className={styles.card}>
                <div style={{ backgroundColor: obj.classMod }}>
                  <img src={obj.img} alt={obj.imgAlt} />
                </div>
                <div
                  className={`${styles.card__bottom}`}
                  style={{ backgroundColor: obj.classMod }}
                >
                  <h2>{obj.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.license}>
        <h2>Действуем на основании лицензии МЧС</h2>
        <img src={imgLicense1} alt="" />
        <img src={imgLicense2} alt="" />
      </section>
    </>
  );
};
export { Homepage };
