"use client";

import { Modal } from "./modal";

import RecipeDetail from "@/app/components/recipeDetail";
import { getRecipeDetail } from "@/lib/spoonacular";
import { RecipeDetailType } from "@/lib/types";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full ">
        <div className="bg-white rounded-lg w-1/2">
          <div className="flex flex-col items-start p-4">
            <div className="flex items-center w-full">
              <div className="text-gray-900 font-medium text-2xl p-2">
                {recipeDetail?.title}
              </div>
              <svg
                className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>

            <div className="">
              <Image
                src={recipeDetail?.image || ""}
                width={500}
                height={400}
                alt="recipe image"
              />
              <p>Ready In Minutes: {recipeDetail?.readyInMinutes}</p>
              <a href={recipeDetail?.spoonacularSourceUrl}>
                More Detail:{" "}
                <span className="underline">
                  {recipeDetail?.spoonacularSourceUrl}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailModal;
