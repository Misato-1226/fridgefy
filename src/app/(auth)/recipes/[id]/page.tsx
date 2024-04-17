"use client";

import RecipeDetail from "@/app/components/recipeDetail";
import { getRecipeDetail } from "@/app/lib/spoonacular";
import { RecipeDetailType } from "@/app/lib/types";
import { useEffect, useState } from "react";

type RecipeDetailPageProps = {
  params: {
    id: string;
  };
};

const DetailPage = ({ params }: RecipeDetailPageProps) => {
  const [recipeDetail, setRecipeDetail] = useState<
    RecipeDetailType | undefined
  >();

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

  return <RecipeDetail recipeDetail={recipeDetail} />;
};

export default DetailPage;
