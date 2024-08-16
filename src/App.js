import styles from "./index.scss";
import React from "react";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import Header from "./components/Header";

function App(props) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainPage />
      <RecipePage />
    </div>
  );
}

export default App;
