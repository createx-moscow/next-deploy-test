import styles from "./Advantages.module.scss";
import Image from "next/image";

const sectionAdv = {
  h1: "Огнезащита деревянных конструкций и материалов от 1 дня",
};

const img = [
  {
    className: "styles.advantages__pic",
    src: "/ogn_derevo.webp",
    width: 170,
    height: 260,
    alt: "обработка огнезащитным составом",
    sizes: "(max-width: 360px) 60vw",
    divClassName: "styles.advantages__pics_left",
  },
];

const img2 = [
  {
    className: "styles.advantages__pic",
    src: "/8.jpg",
    width: 140,
    height: 140,
    alt: "",
    sizes: "(max-width: 360px) 40vw",
    divClassName: "styles.advantages__pics_right",
  },
  {
    className: "styles.advantages__pic",
    src: "/1.jpg",
    width: 140,
    height: 100,
    alt: "",
    sizes: "(max-width: 360px) 40vw",
    divClassName: "styles.advantages__pics_right",
  },
];

const advantages = [
  "Обрабатываем до 2 000 м2 в день",
  "Без остановки работы предприятия",
  "Выдаем нормативные документы",
  // "Устраняем все замечания",
  // "Подготавливаем к проверке",
  // "Гарантируем согласование c ГУ МЧС",
];

export const Advantages = () => {
  return (
    <>
      <section className={styles.advantages}>
        <h1>{sectionAdv.h1}</h1>

        <div className={styles.advantages__pics}>
          <div className={styles.advantages__pics_left}>
            {img.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={styles.advantages__pic}
                ></Image>
              );
            })}
          </div>
          <div className={styles.advantages__pics_right}>
            {img2.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={styles.advantages__pic}
                ></Image>
              );
            })}
          </div>
        </div>
        <ul className={styles.advantages__list}>
          {advantages.map((item, index) => {
            return (
              <li key={index} className={styles.advantages__item}>
                {item}
              </li>
            );
          })}
        </ul>
      </section>
      {/* <section className={styles.advantages}>
        <h1>{sectionAdv.h1}</h1>

        <div className={styles.advantages__pics}>
          {img.map((image, index) => {
            return (
              <div key={index} className={image.divClassName}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={image.className}
                ></Image>
              </div>
            );
          })}
        </div>
      </section> */}
    </>
  );
};

{
  /*           
            <Image
              className={styles.advantages__pic}
              src="/4.jpg"
              width={170}
              height={260}
              alt=""
              sizes="(max-width: 360px) 60vw"
            /> */
}
{
  /* </div> */
}
{
  /* <div className={styles.advantages__pics_right}>
            <Image
              className={styles.advantages__pic}
              src="/8.jpg"
              width="140"
              height="140"
              alt=""
              sizes="(max-width: 360px) 40vw"
            />
            <Image
              className={styles.advantages__pic}
              src="/1.jpg"
              width="140"
              height="100"
              alt=""
              sizes="(max-width: 360px) 40vw"
            />
          </div> */
}
{
  /* </div>
        <ul className={styles.advantages__list}>
          {advantages.map((item, index) => {
            return (
              <li key={index} className={styles.advantages__item}>
                {item}
              </li>
            );
          })}
        </ul>
      </section> */
}
