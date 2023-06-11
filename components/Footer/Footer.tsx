import Link from "next/link";
import Image from "next/image";
import logoWide from "./assets/pozhkontrol_logo.svg";

import styles from "./Footer.module.scss";

const footerLinks = [
  {
    link: "/ognezashita-metalloconstruktsyi",
    text: "Огнезащитная обработка металлоконструкций",
  },
  {
    link: "/ognezashita-derevyannyh-construktsyi",
    text: "Огнезащитная обработка деревянных конструкций",
  },
  {
    link: "/ognezashita-vozduhovodov",
    text: "Огнезащитная обработка воздуховодов",
  },
  {
    link: "/ognezashita-tkaney-i-kovrov",
    text: "Огнезащитная обработка тканей и ковровых покрытий",
  },
  {
    link: "/ognezashita-office",
    text: "Огнезащитная обработка офисных помещений",
  },
  {
    link: "/ognezashita-cherdakov",
    text: "Огнезащитная обработка чердаков",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>О нас</h3>
        <Image src={logoWide} alt="логотип Пожконтроль"></Image>
        Помогаем с огнезащитной обработкой зданий, конструкций и материалов.
        Работаем с 2017 года.
      </div>
      <div>
        <h3>Контакты</h3>
        <a className={styles.footer__phone} href="tel:74951750101">
          +7 (495) 175-01-01
        </a>

        <a className={styles.footer__mail} href="mailto:info@pog01.ru">
          info@pog01.ru
        </a>
        <p>Режим работы: C 09:00 до 20:00 без выходных</p>
        <p>г. Москва, ул. Верхняя Первомайская, д. 43, оф. 200</p>
      </div>
      {/* <div>
        <h3>Наши услуги</h3>
        <h4>Огнезащита материалов и конструкций</h4>
        <ul>
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div> */}
    </footer>
  );
};

// export const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div>
//         <h3>О нас</h3>
//       </div>
//       <div>
//         <h3>Контакты</h3>
//       </div>
//       <div>
//         <h3>Наши услуги</h3>
//         <h4>Огнезащита материалов и конструкций</h4>
//         <ul>
//           <li>
//             <Link href="/ognezashita-metalloconstruktsyi">
//               Огнезащитная обработка металлоконструкций
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-derevyannyh-construktsyi">
//               Огнезащитная обработка деревянных конструкций
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-vozduhovodov">
//               Огнезащитная обработка воздуховодов
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-tkaney-i-kovrov">
//               Огнезащитная обработка тканей и ковровых покрытий
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-office">
//               Огнезащитная обработка офисных помещений
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Огнезащитная обработка чердаков
//             </Link>
//           </li>
//         </ul>
//         <h4>Услуги по пожарной безопасности</h4>
//         <ul>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Проекты для систем противопожарной защиты
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Автоматическая пожарная сигнализация и техническое обслуживание
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Монтаж и обслуживание систем пожаротушения
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Охранная сигнализация и видеонаблюдение
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Испытания пожарных лестниц и ограждений кровли
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Перекатка и испытание пожарных рукавов и внутреннего пожарного
//               водопровода
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Создание фотолюминесцентных планов эвакуации
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Расчет категорий помещений пожарной опасности
//             </Link>
//           </li>
//           <li>
//             <Link href="/ognezashita-cherdakov">
//               Замер сопротивления изоляции
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };
