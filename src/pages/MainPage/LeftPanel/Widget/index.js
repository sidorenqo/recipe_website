import React from "react";
import styles from "./index.module.scss";

const Widget = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.filter}>
        <span>Кухня:</span>
        <select className={styles.select}>
          <optgroup>
            <option value="">Все страны и регионы</option>
            <option value="1">Россия</option>
            <option value="2">Китай</option>
            <option value="3">Индия</option>
          </optgroup>
        </select>
      </div>

      <div className={styles.filter}>
        <span>Тип блюда:</span>
        <select>
          <optgroup>
            <option value="">Все типы</option>
            <option value="1">Первое</option>
            <option value="2">Второе</option>
            <option value="3">Закуска</option>
          </optgroup>
        </select>
      </div>

      <div className={styles.filter}>
        <span>Сложность приготовления:</span>
        <div className={styles.selectDifficulty}>
          <button className={styles.btnColored}>Любая</button>
          <button>Низкая</button>
          <button>Средняя</button>
          <button className={styles.btnLight}>Высокая</button>
        </div>
      </div>

      <button className={styles.btnReset}>Сбросить все фильтры</button>
    </div>
  );
};
export default Widget;
