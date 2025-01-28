import { useContext, useEffect, useState } from "react";
import RecipeItem from "./recipeItem";
import { RecipeResultContext } from "@/app/contexts/RecipeResult";
import { Recipe } from "@/lib/types";

const RecipeList = () => {
  const recipe = useContext(RecipeResultContext);
  console.log(recipe);

  return (
    <ul className="grid grid-cols-2 gap-6 p-3">
      {recipe?.Recipes.map((recipeItem: Recipe) => (
        <RecipeItem key={recipeItem.id} recipeItem={recipeItem} />
      ))}
    </ul>
  );
};

export default RecipeList;
