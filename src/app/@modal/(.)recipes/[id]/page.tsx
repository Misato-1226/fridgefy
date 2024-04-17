"use client";

import { Modal } from "./modal";

import RecipeDetail from "@/app/components/recipeDetail";
import { getRecipeDetail } from "@/lib/spoonacular";
import { RecipeDetailType } from "@/lib/types";
import { useEffect, useState } from "react";

type RecipeDetailPageProps = {
  params: {
    id: string;
  };
};

const DetailModal = ({ params }: RecipeDetailPageProps) => {
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

  return (
    <Modal>
      <RecipeDetail recipeDetail={recipeDetail} />
    </Modal>
  );
};

export default DetailModal;
