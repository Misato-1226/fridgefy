import { RecipeDetailType } from "@/lib/types";
import Image from "next/image";

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
      <h1 className="text-2xl">{recipeDetail.title}</h1>
      <Image
        src={recipeDetail.image}
        width={500}
        height={400}
        alt="recipe image"
      />
      <p>Ready In Minutes: {recipeDetail.readyInMinutes}</p>
      <a href={recipeDetail.spoonacularSourceUrl}>
        More Detail:{" "}
        <span className="underline">{recipeDetail.spoonacularSourceUrl}</span>
      </a>
    </div>
  );
};

export default RecipeDetail;
