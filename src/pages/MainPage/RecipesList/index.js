import React from 'react';
import styles from './index.module.scss';
import Card from './Card';
import RecipesService from '../../../services/RecipeService';

const RECIPES_ON_PAGE = 6;

const Container = props => {
  const [recipes, setRecipes] = React.useState([]);
  const [skip, setSkip] = React.useState(0);
  console.log(recipes);
  React.useEffect(() => {
    const fetchData = async () => {
      const recipes = await RecipesService.getRecipesLimited(RECIPES_ON_PAGE, skip);
      setRecipes(recipes);
    };
    fetchData();
  }, [skip]);

  const selectPageHandler = pageNumber => {
    setSkip(RECIPES_ON_PAGE * (pageNumber - 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h2>Найденные рецепты</h2>
        <p>299</p>
      </div>

      <div className={styles.cardsWrapper}>
        {recipes.map(obj => (
          <Card
            key={obj.id}
            // id={recipe.id}
            name={obj.name}
            image={obj.image}
            prepTimeMinutes={obj.prepTimeMinutes}
            difficulty={obj.difficulty}
            cuisine={obj.cuisine}
            mealType={obj.mealType}
            instructions={obj.instructions}
            cookTimeMinutes={obj.cookTimeMinutes}
            // onClickCard={props.onClickCard}
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
            <li onClick={() => selectPageHandler(2)}>
              <a href="#" aria-current="page">
                <span className={styles.visuallyHidden}>page </span>2
              </a>
            </li>
            <li onClick={() => selectPageHandler(3)}>
              <a href="#">
                <span className={styles.visuallyHidden}>page </span>3
              </a>
            </li>
            <li onClick={() => selectPageHandler(4)}>
              <a href="#">
                <span className={styles.visuallyHidden}>page </span>4
              </a>
            </li>
            <li onClick={() => selectPageHandler(5)}>
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
