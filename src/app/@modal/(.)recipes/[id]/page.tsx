"use client";

import { Modal } from "./modal";

import RecipeDetail from "@/app/components/cookDetail";
import { getRecipeDetail } from "@/lib/spoonacular";
import { IngredientType, RecipeData, RecipeDetailType } from "@/lib/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CloseModalButton from "@/app/components/closeModalButton";

type RecipeDetailPageProps = {
  params: {
    id: number;
  };
};

const DetailModal = ({ params }: RecipeDetailPageProps) => {
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

  const ingredientsData = recipeDetail?.extendedIngredients.map(
    (ingredient: IngredientType) => ({
      name: ingredient.name,
      amount: ingredient.amount + ingredient.unit,
    })
  );

  return (
    <Modal>
      <div className="flex items-center justify-center left-0 bottom-0 w-full h-full ">
        <div className="bg-white rounded-lg">
          <div className="p-3">
            <div className="flex justify-end">
              <CloseModalButton />
            </div>
            <h1 className="text-gray-900 text-center font-medium text-2xl p-5">
              {recipeDetail?.title}
            </h1>

            <div className="flex flex-col items-center">
              <Image
                src={recipeDetail?.image || ""}
                width={500}
                height={400}
                alt="recipe image"
              />

              <p className="text-left">
                <span className="font-bold">Ready In Minutes:</span>{" "}
                {recipeDetail?.readyInMinutes}
              </p>
              <ul>
                <h2 className="font-bold">Ingredients</h2>
                {ingredientsData?.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name}: {ingredient.amount}
                  </li>
                ))}
              </ul>
              <h2 className="font-bold">Instructions</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: recipeDetail?.instructions || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
