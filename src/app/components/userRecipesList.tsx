"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"; // Import deleteDoc and doc
import Link from "next/link";

interface RecipeData {
  id: string;
  title: string;
  image: string;
}

const UserRecipesList = () => {
  const [userRecipes, setUserRecipes] = useState<RecipeData[]>([]);

  useEffect(() => {
    const fetchUserRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Recipes"));
        const recipes = querySnapshot.docs.map(doc => {
          const recipeData = doc.data() as RecipeData;
          return {
            ...recipeData,
            id: doc.id  // Ensures that the `id` of the document takes precedence
          };
        });
        setUserRecipes(recipes);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
      }
    };
  
    fetchUserRecipes();
  }, []);

  const handleDeleteRecipe = async (id: string) => {
    try {
      await deleteDoc(doc(db, "Recipes", id));  // Delete the document in Firestore
      setUserRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id)); // Update local status
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl mb-8">My Recipes</h2>
      {userRecipes.map((recipe) => (
        <div key={recipe.id} className="mb-6 overflow-hidden">
          <div className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Link href={`/recipes/${recipe.id}`} className="inline-flex items-center px-3 py-2 mx-2 text-sm font-medium text-center rounded-lg ">
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={recipe.image}
                alt={recipe.title}
                width={200}
                height={100}
              />
              <div className="flex-1 min-w-0">
                <h5 className="p-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {recipe.title}
                </h5>
              </div>
            </Link>
            <button
              onClick={() => handleDeleteRecipe(recipe.id)}
              className="absolute top-0 right-0 m-3 p-2 text-xl text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 shadow-lg transition duration-150 ease-in-out"
              aria-label="Delete recipe"
            >
              &#x2715;
            </button>
          </div>
        </div>
      ))}
    </div>
  );


};

export default UserRecipesList;
