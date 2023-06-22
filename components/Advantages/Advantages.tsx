import styles from "./Advantages.module.scss";
import Image from "next/image";
import { AdvantagesText2 } from "../AdvantagesText2/AdvantagesText2";
import { AdvantagesText } from "../AdvantagesText/AdvantagesText";

const sectionAdv = {
  h1: "Огнезащита деревянных конструкций и материалов от 1 дня",
};

const img = [
  {
    className: styles.advantages__pic,
    src: "/4.jpg",
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

interface AdvantagesProps {
  title: string;
}

export const Advantages = ({ title }: AdvantagesProps) => {
  return (
    <>
      <section className={styles.advantages}>
        <h1>{title}</h1>
        <div className={styles.advantages__pics}>
          <div className={styles.advantages__pics_left}>
            <Image
              className={styles.advantages__pic}
              src="/4.jpg"
              width={170}
              height={260}
              alt=""
              sizes="(max-width: 360px) 60vw"
            />
          </div>
          <div className={styles.advantages__pics_right}>
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
          </div>
        </div>
        {/* <AdvantagesText></AdvantagesText> */}
        <AdvantagesText2></AdvantagesText2>
      </section>
    </>
  );
};
