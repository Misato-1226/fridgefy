import { useContext, useEffect, useState } from "react";
import RecipeItem from "./recipeItem";
import { RecipeResultContext } from "@/app/contexts/RecipeResult";
import { Recipe } from "@/lib/types";

const RecipeList = () => {
  const recipe = useContext(RecipeResultContext);
  console.log(recipe);
  //レシピを追加表示させるためのステイト
  const [loadIndex, setLoadIndex] = useState(0);
  const [isNextEmpty, setIsNextEmpty] = useState(false);
  const [isBackEmpty, setIsBackEmpty] = useState(false);

  const handleNext = () => {
    if (recipe?.Recipes && loadIndex > recipe?.Recipes.length) {
      setIsNextEmpty(true);
    } else {
      setLoadIndex((prev) => prev + 10);
    }
  };

  const handleBack = () => {
    if (recipe?.Recipes && loadIndex < recipe?.Recipes.length) {
      setIsBackEmpty(true);
    } else {
      setLoadIndex((prev) => prev - 10);
    }
  };

  return (
    <>
      <ul className="grid grid-cols-2 gap-6 p-3">
        {recipe?.Recipes.slice(loadIndex, loadIndex + 10).map(
          (recipeItem: Recipe) => (
            <RecipeItem key={recipeItem.id} recipeItem={recipeItem} />
          )
        )}
      </ul>
      <div className="flex justify-center p-3 gap-x-10 text-xl">
        <button onClick={handleBack}>←</button>
        <button onClick={handleNext}>→</button>
      </div>
    </>
  );
};

export default RecipeList;
