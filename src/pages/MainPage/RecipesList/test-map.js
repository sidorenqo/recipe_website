import React from "react";
import Card from "../../../components/Card/Card";

const RecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => {
        return (
          <div key={recipe.id}>
            {/* {recipe.name} */}
            <Card {...recipe} />
          </div>
        );
      })}
    </div>
  );
};

export default RecipesList;
