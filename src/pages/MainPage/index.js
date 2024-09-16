import React from 'react';
import RecipesService from '../../services/RecipeService';
import RecipesList from './RecipesList';
import LeftPanel from './LeftPanel';
import styles from './index.module.scss';

const MainPage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [cuisines, setCuisines] = React.useState([]);

  React.useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await RecipesService.getAllRecipes();

      const cuisines = [];
      recipes.forEach(recipe => {
        if (!cuisines.includes(recipe.cuisine)) {
          cuisines.push(recipe.cuisine);
        }
      });
      // console.log("🚀 ~ fetchRecipes ~ cuisines:", cuisines);

      setCuisines(cuisines);
      setRecipes(recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div className={styles.mainPage}>
      <LeftPanel />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default MainPage;
