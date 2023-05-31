import styles from "./License.module.scss";
import Image from "next/image";

export const License = () => {
  return (
    <>
      <section className={styles.license}>
        <h2>Действуем на основании лицензии МЧС</h2>
        <div className={styles.license_center}>
          <Image
            className={styles.license__license}
            src="/lic1.webp"
            width={300}
            height={400}
            alt=""
          />
          <Image src="/lic2.webp" width={300} height={400} alt="" />
        </div>
      </section>
    </>
  );
};
