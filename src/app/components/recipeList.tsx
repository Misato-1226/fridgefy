import { useContext, useEffect, useState } from "react";
import RecipeItem from "./recipeItem";
import { RecipeResultContext } from "@/app/contexts/RecipeResult";
import { Recipe } from "@/lib/types";
import Image from "next/image";

const RecipeList = () => {
  const recipe = useContext(RecipeResultContext);
  console.log(recipe);
  //レシピを追加表示させるためのステイト
  const [loadIndex, setLoadIndex] = useState(0);
  const [isNextEmpty, setIsNextEmpty] = useState(false);
  const [isBackEmpty, setIsBackEmpty] = useState(true);

  const handleArrow = () => {
    //次へボタンが表示される場合
    //戻るボタンが押されたとき
    //レシピの数に対して表示数(loadIndex)が少ない場合
    if (recipe?.Recipes && loadIndex + 10 >= recipe?.Recipes.length) {
    }

    //戻るボタンが表示される場合
    //次へボタンが押されたとき
    //loadIndexが0になったとき
  };

  const handleNext = () => {
    if (recipe?.Recipes && loadIndex + 10 >= recipe?.Recipes.length) {
      setIsNextEmpty(true);
    } else {
      setLoadIndex((prev) => prev + 10);
    }
    setIsBackEmpty(false);
  };

  const handleBack = () => {
    if (loadIndex === 0) {
      setIsBackEmpty(true);
    } else {
      setLoadIndex((prev) => prev - 10);
    }
    setIsNextEmpty(false);
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
        {!isBackEmpty && (
          <button
            onClick={handleBack}
            className="font-semibold text-4xl text-lime-300 hover:text-lime-400"
          >
            ←<span className="ml-3 text-xl font-normal text-black">戻る</span>
          </button>
        )}
        {!isNextEmpty && (
          <button
            onClick={handleNext}
            className="font-semibold text-4xl text-lime-300 hover:text-lime-400"
          >
            <span className="mr-3 text-xl font-normal text-black">次へ</span>→
            {/* <Image
            alt="次へ"
            src="https://img.icons8.com/?size=100&id=39777&format=png&color=bef264"
            width={50}
            height={50}
          /> */}
          </button>
        )}
      </div>
    </>
  );
};

export default RecipeList;
