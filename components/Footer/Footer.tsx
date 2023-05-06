import Link from "next/link";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>О нас</h3>
      </div>
      <div>
        <h3>Контакты</h3>
      </div>
      <div>
        <h3>Наши услуги</h3>
        <h4>Огнезащита материалов и конструкций</h4>
        <ul>
          <li>
            <Link href="/ognezashita-metalloconstruktsyi">
              Огнезащитная обработка металлоконструкций
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-derevyannyh-construktsyi">
              Огнезащитная обработка деревянных конструкций
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-vozduhovodov">
              Огнезащитная обработка воздуховодов
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-tkaney-i-kovrov">
              Огнезащитная обработка тканей и ковровых покрытий
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-office">
              Огнезащитная обработка офисных помещений
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Огнезащитная обработка чердаков
            </Link>
          </li>
        </ul>
        <h4>Услуги по пожарной безопасности</h4>
        <ul>
          <li>
            <Link href="/ognezashita-cherdakov">
              Проекты для систем противопожарной защиты
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Автоматическая пожарная сигнализация и техническое обслуживание
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Монтаж и обслуживание систем пожаротушения
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Охранная сигнализация и видеонаблюдение
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Испытания пожарных лестниц и ограждений кровли
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Перекатка и испытание пожарных рукавов и внутреннего пожарного
              водопровода
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Создание фотолюминесцентных планов эвакуации
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Расчет категорий помещений пожарной опасности
            </Link>
          </li>
          <li>
            <Link href="/ognezashita-cherdakov">
              Замер сопротивления изоляции
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
