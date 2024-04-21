import { RecipeDetailType } from "@/lib/types";
import Image from "next/image";

const cookDetail = ({
  recipeDetail,
}: {
  recipeDetail: RecipeDetailType | undefined;
}) => {
  if (!recipeDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid justify-items-center content-start">
      <h1 className="text-2xl">{recipeDetail.title}</h1>
      <div className="my-6">
        <Image
          src={recipeDetail.image}
          width={500}
          height={400}
          alt="recipe image"
        />
      </div>
      <p className="text-lg">Ready In Minutes: {recipeDetail.readyInMinutes}</p>
      <a href={recipeDetail.spoonacularSourceUrl} className="text-lg">
        More Detail:{" "}
        <span className="underline">{recipeDetail.spoonacularSourceUrl}</span>
      </a>
    </div>
  );
};

export default cookDetail;
