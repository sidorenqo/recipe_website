import React from 'react';
import styles from './index.module.scss';

// difficulty это  "Easy"||"Medium"||"Hard"
const getStarsColoringArr = difficulty => {
  switch (difficulty) {
    case value:
      break;

    default:
      break;
  }

  // return [true, false, false]
};

function Card(props) {
  console.log(props.mealType);

  const starsColoringArr = getStarsColoringArr(props.difficulty);

  return (
    <div onClick={props.recipeOpened} className={styles.cardWrapper}>
      <div className={styles.section}>
        <div className={styles.cardHeader}>
          <h3>{props.name}</h3>
        </div>
        <div className={styles.cardImage}>
          <img src={props.image} alt="recipe" />
        </div>
      </div>
      <div className={styles.cardDescription}>
        <p>{props.instructions}</p>
        <div className={styles.cookingTime}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.1668 21.2454C16.7618 21.2454 21.4122 16.6048 21.4122 10.9999C21.4122 5.40495 16.7717 0.754517 11.1767 0.754517C10.6444 0.754517 10.3834 1.07595 10.3834 1.59795V5.49537C10.3834 5.92737 10.6748 6.2788 11.1162 6.2788C11.5585 6.2788 11.8598 5.92737 11.8598 5.49537V2.49195C16.2797 2.84337 19.6945 6.49995 19.6945 10.9999C19.6992 12.1216 19.4818 13.2331 19.055 14.2704C18.6283 15.3077 18.0005 16.2503 17.2078 17.0439C16.4151 17.8375 15.4733 18.4665 14.4365 18.8945C13.3997 19.3226 12.2885 19.5412 11.1668 19.5379C6.42553 19.5379 2.61896 15.7408 2.62882 10.9999C2.63867 8.89052 3.3921 6.97223 4.64782 5.49537C4.95896 5.10366 4.9791 4.6318 4.64782 4.27995C4.3161 3.91866 3.75382 3.94866 3.3921 4.4008C1.85524 6.18837 0.921387 8.4988 0.921387 10.9999C0.921387 16.6048 5.56196 21.2454 11.1668 21.2454ZM12.774 12.5467C13.5672 11.7229 13.407 10.5979 12.4525 9.93537L7.13824 6.22866C6.63639 5.87723 6.11396 6.39966 6.46539 6.90152L10.1721 12.2154C10.8351 13.1698 11.9601 13.3404 12.774 12.5467Z"
              fill="black"
            />
          </svg>
          <span>{props.cookTimeMinutes} минут </span>
        </div>
        <div className={styles.cookingDifficulty}>
          <span>Сложность:</span>
          {starsColoringArr.map(star => (star ? <starzakr /> : <starnezakr />))}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.99175 21L7.61675 13.975L2.16675 9.25L9.36675 8.625L12.1667 2L14.9667 8.625L22.1667 9.25L16.7167 13.975L18.3417 21L12.1667 17.275L5.99175 21Z"
              fill="black"
            />
          </svg>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.01675 16.825L12.1667 14.925L15.3167 16.85L14.4917 13.25L17.2667 10.85L13.6167 10.525L12.1667 7.125L10.7167 10.5L7.06675 10.825L9.84175 13.25L9.01675 16.825ZM5.99175 21L7.61675 13.975L2.16675 9.25L9.36675 8.625L12.1667 2L14.9667 8.625L22.1667 9.25L16.7167 13.975L18.3417 21L12.1667 17.275L5.99175 21Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={styles.countryKitchen}>{props.cuisine}</div>
        <div className={styles.typeFood}>{props.mealType.join(', ')}</div>
      </div>
    </div>
  );
}
export default Card;
