import React from 'react';
import styles from './index.module.scss';
import Widget from './Widget';
// import Container from "../Card/Container/Container.jsx";
// import CardOpen from "../Card/CardOpen";

const Content = props => {
  return (
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <div className={styles.preview}>
          <img src="/img/banner.jpg" alt="recipe" />
          <p>
            В нашей жизни, когда время становится все более ценным ресурсом, задача планирования
            приема пищи становится все более сложной.
          </p>
          <p>
            Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким
            образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени
            на принятие этого решения?
          </p>
          <p>
            Наш сервис поможет: выбирайте параметры - и <br /> вперед!
          </p>
        </div>

        <Widget />

        <div className={styles.randomRecipe}>
          <h5>А еще можно попробовать удачу на вкус :)</h5>
          <button>Мне повезёт!</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
