export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type RecipeDetailType = {
  title: string;
  image: string;
  readyInMinutes: number;
  spoonacularSourceUrl: string;
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
