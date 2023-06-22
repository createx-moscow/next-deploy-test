import styles from "./AdvantagesText.module.scss";
import Image from "next/image";
// const advantages = [
//   "Обрабатываем до 2 000 м2 в день",
//   "Без остановки работы предприятия",
//   "Выдаем нормативные документы",
//   "Устраняем все замечания",
//   "Подготавливаем к проверке",
//   "Гарантируем согласование c ГУ МЧС",
// ];

const advantages = [
  {
    text: "Обрабатываем до 2 000 м2 в день",
    icon: "/icons/meters.jpg",
  },
  {
    text: "Без остановки работы предприятия",
    icon: "/icons/time.jpg",
  },
  {
    text: "Выдаем нормативные документы",
    icon: "/icons/license.jpg",
  },
  {
    text: "Гарантируем согласование c ГУ МЧС",
    icon: "/icons/warranty_seal.jpg",
  },

  // "Устраняем все замечания",
  // "Подготавливаем к проверке",
];

// export const AdvantagesText = () => {
//   return (
//     <ul className={styles.advantages__list}>
//       {advantages.map((item, index) => {
//         return (
//           <li key={index} className={styles.advantages__item}>
//             {item}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

export const AdvantagesText = () => {
  return (
    <ul className={styles.advantages__list}>
      {advantages.map((item, index) => {
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
