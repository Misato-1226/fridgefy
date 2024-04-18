import { useContext, useEffect, useState } from "react";
import RecipeItem from "./recipeItem";
import { RecipeResultContext } from "@/app/contexts/RecipeResult";

const RecipeList = () => {
  const recipe = useContext(RecipeResultContext);

  return (
    <ul className="grid grid-cols-2 gap-6 p-3">
      {recipe?.Recipes.map((recipeItem) => (
        <RecipeItem key={recipeItem.id} recipeItem={recipeItem} />
      ))}
    </ul>
  );
};

export default RecipeList;
