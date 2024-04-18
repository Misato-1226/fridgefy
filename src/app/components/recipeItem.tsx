import Image from "next/image";
import Link from "next/link";

const RecipeItem = ({ recipeItem }: { recipeItem: any }) => {
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
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lime-400 rounded-lg hover:bg-lime-500 "
          >
            More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </li>
    </>
  );
};

export default RecipeItem;
