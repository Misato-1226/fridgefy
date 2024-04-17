import Image from "next/image";
import { RecipeDetailType } from "../lib/types";

const RecipeDetail = ({
  recipeDetail,
}: {
  recipeDetail: RecipeDetailType | undefined;
}) => {
  if (!recipeDetail) {
    return <p>Loading...</p>;
  }

  return (
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
  );
};

export default RecipeDetail;
