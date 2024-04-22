import { IngredientType, RecipeData, RecipeDetailType } from "@/lib/types";
import Image from "next/image";

const CookDetail = ({
  recipeDetail,
}: {
  recipeDetail: RecipeData | undefined;
}) => {
  if (!recipeDetail) {
    return <p>Loading...</p>;
  }

  const ingredientsData = recipeDetail.extendedIngredients.map(
    (ingredient: IngredientType) => ({
      name: ingredient.name,
      amount: ingredient.amount + ingredient.unit,
    })
  );

  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-center">
        {recipeDetail.title}
      </h1>
      <div className="my-6 flex justify-center">
        <Image
          src={recipeDetail.image}
          width={500}
          height={400}
          alt="recipe image"
        />
      </div>
      <p className="text-lg">
        <span className="font-bold">Ready In Minutes:</span>{" "}
        {recipeDetail.readyInMinutes}
      </p>
      <h2 className="text-lg font-bold">Ingredients</h2>
      <ul className="p-3">
        {ingredientsData.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.amount}
          </li>
        ))}
      </ul>
      <h2 className="text-lg font-bold">Instructions</h2>
      <div
        className="p-3"
        dangerouslySetInnerHTML={{
          __html: recipeDetail?.instructions || "",
        }}
      />
    </div>
  );
};

export default CookDetail;

/*
<div
          key={index}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >

            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={recipe.image}
              alt={recipe.title}
              width={200}
              height={100}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {recipe.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {recipe.instructions}
              </p>
              <ul>
                Ingredients
                {ingredientsData.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name}: {ingredient.amount}
                  </li>
                ))}
              </ul>

            </div>
        </div>
        */
