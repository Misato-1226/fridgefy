"use client";

import CookDetail from "@/app/components/cookDetail";

import { getRecipeDetail } from "@/lib/spoonacular";
import { RecipeDetailType } from "@/lib/types";
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

  return <CookDetail recipeDetail={recipeDetail} />;
};

export default DetailPage;
