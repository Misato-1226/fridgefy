"use client";

import Form from "../components/recipeForm";
import RecipeList from "../components/recipeList";
import { RecipeResultProvider } from "../contexts/RecipeResult";

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
