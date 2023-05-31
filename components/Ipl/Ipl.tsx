import styles from "./Ipl.module.scss";
import Image from "next/image";
import attestat from "./assets/attestat-akkreditacii-ispytatelnoj-laboratorii.jpg";
import zaklyuchenie from "./assets/poz_zakl.jpg";

export const Ipl = () => {
  return (
    <>
      <section className={styles.license}>
        <h2>
          Выдаем заключение ИПЛ. Работаем с аккредитованными пожарными
          лабораториями.
        </h2>
        <div className={styles.license_center}>
          <Image src={zaklyuchenie} width={300} height={400} alt="" />
          <Image
            className={styles.license__license}
            src={attestat}
            width={400}
            height={250}
            alt=""
          />
        </div>
      </section>
    </>
  );
};
