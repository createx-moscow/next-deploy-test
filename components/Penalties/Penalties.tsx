import styles from "./Penalties.module.scss";
import Image from "next/image";
import molotok from "./assets/molotok-sudji.jpg";

export const Penalties = () => {
  return (
    <section>
      <h2>За нарушение требований пожарной безопасности может грозить:</h2>
      <div className={styles.penalties__wrapper}>
        <ul className={styles.penalties__list}>
          <li>Штраф для юридических лиц - до 500 000 рублей</li>
          <li>Приостановка деятельности до 90 дней</li>
          <li>
            Уголовная ответственность (в случае причинения вреда жизни и
            здоровью)
          </li>
        </ul>
        <Image
          src={molotok}
          width={1065}
          height={600}
          alt="молоток судьи с пачкой денег"
          className={styles.penalties__image}
        />
      </div>
    </section>
  );
};
