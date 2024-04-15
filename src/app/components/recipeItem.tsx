import Image from "next/image";
import Link from "next/link";

const RecipeItem = ({
  recipeItem,
}: // addToCart,
{
  recipeItem: any;
  // addToCart: (id: number) => void;
}) => {
  return (
    <div>
      <p>{recipeItem.title}</p>
      <Image
        src={recipeItem.image}
        width={100}
        height={50}
        alt="recipe image"
      />
      <Link href={`/recipes/${recipeItem.id}`}>More</Link>
      <button>Add</button>
    </div>
  );
};

export default RecipeItem;
