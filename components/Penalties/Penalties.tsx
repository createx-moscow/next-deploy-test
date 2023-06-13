import styles from "./Penalties.module.scss";
import Image from "next/image";
import molotok from "./assets/molotok-sudji.jpg";

export const Penalties = () => {
  return (
    <section>
      <h2>Почему важно соблюдать требования пожарной безопасности</h2>
      <div className={styles.penalties__wrapper}>
        <h3>За нарушение может грозить:</h3>
        <ul className={styles.penalties__list}>
          <li>Штраф для ИП и должностных лиц - до 50 000 рублей</li>
          <li>Штраф для юридических лиц - до 500 000 рублей</li>
          <li>Приостановка деятельности до 90 дней</li>
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
