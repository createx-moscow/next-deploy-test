import styles from "./License.module.scss";
import Image from "next/image";
import dogovor from "./assets/dogovor.png";

export const License = () => {
  return (
    <>
      <section className={styles.license}>
        <h2>
          Действуем на основании лицензии МЧС. Работаем по договору,
          предоставляем гарантию.
        </h2>
        <div className={styles.license_center}>
          <Image
            className={styles.license__license}
            src="/lic1.webp"
            width={300}
            height={400}
            alt="Лицензия МЧС. ООО Пожконтроль. Лицевая сторона"
          />
          <Image
            src="/lic2.webp"
            width={300}
            height={400}
            alt="Лицензия МЧС. ООО Пожконтроль. Обратная сторона"
          />
          <Image
            src={dogovor}
            width={300}
            height={400}
            alt="Пример договора. ООО Пожконтроль. Титульная страница"
          />
          <Image
            src={dogovor}
            width={300}
            height={400}
            alt="Пример договора. ООО Пожконтроль. Страница с гарантийными обязательствами"
          />
        </div>
      </section>
    </>
  );
};
