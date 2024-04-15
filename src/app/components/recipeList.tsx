import { useContext, useEffect, useState } from "react";
import RecipeItem from "./recipeItem";
import { RecipeResultContext } from "@/app/contexts/RecipeResult";

const RecipeList = () => {
  const recipe = useContext(RecipeResultContext);

  const addToCart = () => {
    // "use server"
  };

  return (
    <>
      {recipe?.Recipes.map((recipeItem) => (
        <RecipeItem key={recipeItem.id} recipeItem={recipeItem} />
      ))}
    </>
  );
};

export default RecipeList;
