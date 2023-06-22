import Image from "next/image";
import styles from "./AdvantagesText2.module.scss";
import ruler from "./assets/RulerAngular.svg";
import save from "./assets/Hand Money.svg";

const advantages = [
  "Обрабатываем до 2 000 м2 в день",
  "Без остановки работы предприятия",
  "Выдаем нормативные документы",
  // "Устраняем все замечания",
  // "Подготавливаем к проверке",
  "Гарантируем согласование c ГУ МЧС",
];

const advantages2 = [
  {
    text: "Обрабатываем до 2 000 м2 в день",
    icon: "/icons/meters.jpg",
  },
  {
    text: "Без остановки работы предприятия",
    icon: "/icons/time.jpg",
  },
  {
    text: "Выдаем все нормативные документы",
    icon: "/icons/license.jpg",
  },

  {
    text: "Устраняем все замечания",
    icon: "/icons/warranty_seal.jpg",
  },
  {
    text: "Подготавливаем к проверке",
    icon: "/icons/warranty_seal.jpg",
  },
  {
    text: "Гарантируем согласование c ГУ МЧС",
    icon: "/icons/warranty_seal.jpg",
  },
];

export const AdvantagesText2 = () => {
  return (
    <ul className={styles.advantages__list}>
      {advantages2.map((item, index) => {
        return (
          <li key={index} className={styles.advantages__item}>
            <Image
              className={styles.advantages__icon}
              src={item.icon}
              alt="линейка"
              width={24}
              height={24}
            ></Image>
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};
