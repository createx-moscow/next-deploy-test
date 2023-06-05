import Image from "next/image";
import styles from "./page.module.scss";
import map from "./assets/karta.png";
import officeBulding from "./assets/adress.jpg";

export default function OgnezashitaDerevo() {
  return (
    <>
      <h1>Контакты</h1>

      <a href="tel:74951750101">+7 (495) 175-01-01</a>
      <br></br>
      <a href="mailto:info@pog01.ru">info@pog01.ru</a>
      <p>Режим работы: C 09:00 до 20:00 без выходных</p>
      <p>г. Москва, ул. Верхняя Первомайская, д. 43, оф. 200</p>
      <div className={styles.map__container}>
        <Image
          src={map}
          alt="схема проезда к офису"
          width="1753"
          height="1003"
          className={styles.map__image}
        ></Image>
      </div>
      <div className={styles.map__container}>
        <Image
          src={officeBulding}
          alt="ул. Верхняя Первомайская, д. 43"
          width="1413"
          height="827"
          className={styles.map__image}
        ></Image>
      </div>
    </>
  );
}
