import { Recipe } from "@/lib/types";
import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextState = {
  Recipes: Recipe[];
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
};

export const RecipeResultContext = createContext<ContextState | undefined>(
  undefined
);

export const RecipeResultProvider = ({ children }: Props) => {
  const [Recipes, setRecipes] = useState<Recipe[]>([]);
  return (
    <RecipeResultContext.Provider value={{ Recipes, setRecipes }}>
      {children}
    </RecipeResultContext.Provider>
  );
};
