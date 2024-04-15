"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_APIKEY;

type RecipeDetailPageProps = {
  params: {
    id: string;
  };
};

type RecipeDetailType = {
  title: string;
  image: string;
  readyInMinutes: number;
  spoonacularSourceUrl: string;
};

const RecipeDetail = ({ params }: RecipeDetailPageProps) => {
  const [recipeDetail, setRecipeDetail] = useState<
    RecipeDetailType | undefined
  >();

  useEffect(() => {
    const getRecipeDetail = async () => {
      try {
        const response = await fetch(
          //データベースに保存されている材料の中でチェックされたものをエンドポイントに設定する。
          `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setRecipeDetail(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getRecipeDetail();
  }, [params.id]);

  return (
    <div>
      {recipeDetail ? (
        <div>
          <h1>{recipeDetail.title}</h1>
          <Image
            src={recipeDetail.image}
            width={100}
            height={50}
            alt="recipe image"
          />
          <p>Ready In Minutes: {recipeDetail.readyInMinutes}</p>
          <a href={recipeDetail.spoonacularSourceUrl}>
            More Detail: {recipeDetail.spoonacularSourceUrl}
          </a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecipeDetail;
