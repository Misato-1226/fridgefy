"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

const UserRecipesList = () => {
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    const fetchUserRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Recipes"));
        const recipes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserRecipes(recipes);
        console.log(recipes);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      }
    };

    fetchUserRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl mb-8">My Recipes</h2>
      {userRecipes.map((recipe, index) => (
        <div key={index} className="mb-6">
          <div className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Link
              href={`/recipes/${recipe.id}`}
              className="inline-flex items-center px-3 py-2 mx-2 text-sm font-medium text-center  rounded-lg "
            >
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={recipe.image}
                alt={recipe.title}
                width={200}
                height={100}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {recipe.title}
                </h5>
              </div>
            </Link>
            <p className="absolute top-1 right-3 text-slate-500 text-2xl">x</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserRecipesList;

/*

*/

/*<ul>
        {userRecipes.map((recipe) => (
          <li key={recipe.id}>
            <div>{recipe.title}</div>
            {recipe.image && (
              <Image
                src={recipe.image}
                width={200}
                height={100}
                alt="recipe image"
              />
            )}
            <div>{recipe.instructions}</div>
            <ul>
              Ingredients
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name}: {ingredient.amount}
                </li>
              ))}
            </ul>

            <p>Delete from MyRecipes</p>
          </li>
        ))}
      </ul> */
