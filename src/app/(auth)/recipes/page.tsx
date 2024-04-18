"use client";

import Form from "@/app/components/recipeForm";
import RecipeList from "@/app/components/recipeList";
import { RecipeResultProvider } from "@/app/contexts/RecipeResult";

const Recipes = () => {
  return (
    <div className="flex justify-center items-center">
      <RecipeResultProvider>
        <Form />
        <RecipeList />
      </RecipeResultProvider>
    </div>
  );
};

export default Recipes;
