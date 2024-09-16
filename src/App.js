import styles from './index.scss';
import React from 'react';
import MainPage from './pages/MainPage';
import RecipePage from './pages/RecipePage';
import Header from './components/Header';

function App(props) {
  const [recipeOpened, setRecipeOpened] = React.useState(false); //Для скрытия страницы открытого рецепта

  return (
    <div className={styles.wrapper}>
      <Header />
      <MainPage />
      {recipeOpened ? <RecipePage recipeOpened={() => setRecipeOpened(true)} /> : null}
    </div>
  );
}

export default App;
