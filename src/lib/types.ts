export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type RecipeData = {
  id: number | string;
  title: string;
  image: string;
  instructions: string;
  readyInMinutes: number;
  extendedIngredients: [];
};

export type RecipeDetailType = {
  title: string;
  image: string;
  readyInMinutes: number;
  spoonacularSourceUrl: string;
  instructions: string; //new line
  extendedIngredients: [
    {
      measures: {
        metric: {
          amount: number;
          unitLong: string;
        };
      };
      meta: [];
      name: string;
    }
  ];
};

export type IngredientType = {
  name: string;
  amount: number;
  unit: string;
};

//firebaseのユニークidがある(id)
export type IngredientDatabase = {
  id: string;
  ingredientId: number;
  name: string;
  amount: number;
  unit: Unit;
};

export type Ingredient = {
  ingredientId: number;
  name: string;
  amount: number;
  unit: Unit;
};

//単位のユニオン型
export type Unit =
  | "g"
  | "ml"
  | "bulb"
  | "bunch"
  | "spear"
  | "head"
  | "punnet"
  | "slice"
  | "piece";
