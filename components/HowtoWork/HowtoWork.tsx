import styles from "./AdvantagesText.module.scss";

const advantages = [
  "Обрабатываем до 2 000 м2 в день",
  "Без остановки работы предприятия",
  "Выдаем нормативные документы",
  // "Устраняем все замечания",
  // "Подготавливаем к проверке",
  "Гарантируем согласование c ГУ МЧС",
];

export const AdvantagesText = () => {
  return (
    <ul className={styles.advantages__list}>
      {advantages.map((item, index) => {
        return (
          <li key={index} className={styles.advantages__item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
