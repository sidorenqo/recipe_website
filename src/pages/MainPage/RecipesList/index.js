import React from "react";
import styles from "./index.module.scss";
import Card from "./Card";
import RecipesService from "../../../services/RecipeService";

const Container = props => {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    RecipesService.getRecipes().then(recipes => setRecipes(recipes));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h2> Найденные рецепты</h2>
        <p>299</p>
      </div>

      <div className={styles.cardsWrapper}>
        {Object.values(recipes).map(obj => (
          <Card
            key={obj.id}
            // id={recipe.id}
            name={obj.name}
            image={obj.image}
            prepTimeMinutes={obj.prepTimeMinutes}
            difficulty={obj.difficulty}
            cuisine={obj.cuisine}
            mealType={obj.mealType}
            onClickCard={props.onClickCard}
          />
        ))}
      </div>

      <div className={styles.pag}>
        <nav aria-label="pagination">
          <ul className={styles.pagination}>
            <li>
              <a href="#">
                <span aria-hidden="true">«</span>
                <span className="visuallyHidden"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.visuallyHidden}>page </span>1
              </a>
            </li>
            <li>
              <a href="#" aria-current="page">
                <span className={styles.visuallyHidden}>page </span>2
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.visuallyHidden}>page </span>3
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.visuallyHidden}>page </span>4
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.visuallyHidden}>next set of pages</span>
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Container;
