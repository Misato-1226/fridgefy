"use client";

import CookDetail from "@/app/components/cookDetail";

import { getRecipeDetail } from "@/lib/spoonacular";
import { RecipeData, RecipeDetailType } from "@/lib/types";
import { useEffect, useState } from "react";

type RecipeDetailPageProps = {
  params: {
    id: number;
  };
};

const DetailPage = ({ params }: RecipeDetailPageProps) => {
  const [recipeDetail, setRecipeDetail] = useState<RecipeData | undefined>();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getRecipeDetail(params.id);
        setRecipeDetail(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApi();
  }, [params.id]);

  return <CookDetail recipeDetail={recipeDetail} />;
};

export default DetailPage;
