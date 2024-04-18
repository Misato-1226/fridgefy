//修正後
import { RecipeResultContext } from "@/app/contexts/RecipeResult";
import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import IngredientCheckbox from "./checkbox";
import { getRecipes } from "@/lib/spoonacular";

const Form = () => {
  const [query, setQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const Recipe = useContext(RecipeResultContext);

  // array for testing
  const arr = ["tomato", "onion", "cheese"];

  const getRecipe = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const ingredientsToString = selectedIngredients.join(",");
      const response = await getRecipes(query, ingredientsToString);
      Recipe?.setRecipes(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedIngredients([...selectedIngredients, value]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== value)
      );
    }
  };

  return (
    <div className="w-100">
      <form className="mx-auto w-80 h-full">
        <input
          type="text"
          placeholder="Search recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={getRecipe}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          search
        </button>
        <p>Search by ingredients</p>
        <div className="grid grid-cols-4">
          {arr.map((ingredient, index) => (
            <IngredientCheckbox
              key={index}
              ingredient={ingredient}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Form;
