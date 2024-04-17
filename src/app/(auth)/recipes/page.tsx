"use client";

import Form from "@/app/components/recipeForm";
import RecipeList from "@/app/components/recipeList";
import { RecipeResultProvider } from "@/app/contexts/RecipeResult";

const Recipes = () => {
  return (
    <>
      <RecipeResultProvider>
        <Form />
        <RecipeList />
      </RecipeResultProvider>
    </>
  );
};

export default Recipes;
