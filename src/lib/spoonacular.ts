const apiKey = process.env.NEXT_PUBLIC_APIKEY;

export const getRecipes = async (query: string, ingredients?: string) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients=${ingredients}&apiKey=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getRecipeDetail = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
