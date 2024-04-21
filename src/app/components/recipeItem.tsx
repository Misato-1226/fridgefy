import Image from "next/image";
import Link from "next/link";
import { addRecipe } from "../../firebase.js";
import { getRecipeDetail } from "@/lib/spoonacular";

//それぞれの詳細情報を取得。そしてボタンが押されたら、それをデータベースに送る。
const RecipeItem = ({ recipeItem }: { recipeItem: any }) => {
  const handleAddRecipe = async () => {
    try {
      const response = await getRecipeDetail(recipeItem.id);

      const ingredientsData = response.extendedIngredients.map(
        (ingredient) => ({
          name: ingredient.name,
          amount: ingredient.amount + ingredient.unit,
        })
      );
      //recipe info for sending database
      const recipeData = {
        title: response.title,
        image: response.image,
        instructions: response.instructions,
        ingredients: ingredientsData,
      };
      const recipeId = await addRecipe(recipeData);

      console.log(recipeData.ingredients);

      console.log("New recipe added with ID:", recipeId);
    } catch (error) {
      console.error("Error adding recipe:", error);
    }
  };

  return (
    <>
      <li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg w-full"
          src={recipeItem.image}
          width={200}
          height={100}
          alt="recipe image"
        />
        <div className="p-5">
          <a href="#">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipeItem.title}
            </h2>
          </a>

          <Link
            href={`/recipes/${recipeItem.id}`}
            className="inline-flex items-center px-3 py-2 mx-2 text-sm font-medium text-center text-white bg-lime-400 rounded-lg hover:bg-lime-500 "
          >
            More
          </Link>
          <button
            onClick={handleAddRecipe}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-400 rounded-lg hover:bg-lime-500 "
          >
            Add
          </button>
        </div>
      </li>
    </>
  );
};

export default RecipeItem;
