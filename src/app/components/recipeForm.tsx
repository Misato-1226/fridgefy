import { RecipeResultContext } from "@/app/contexts/RecipeResult";
import {
  ChangeEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import IngredientCheckbox from "./checkbox";
import { getRecipes } from "@/lib/spoonacular";

const Form = () => {
  const [query, setQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const Recipe = useContext(RecipeResultContext);

  // items array for just testing (get a items data from db??)
  const arr = ["tomato", "onion", "cheese", "olive oil", "milk", "pork"];

  const getRecipe = async (e?: MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const ingredientsToString = selectedIngredients.join(",");
      const response = await getRecipes(query, ingredientsToString);
      Recipe?.setRecipes(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

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
      <form className="mb-3 flex justify-center">
        <input
          type="text"
          placeholder="Search recipes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-slate-300"
        />
        <button
          onClick={getRecipe}
          className="bg-slate-400  text-white font-bold py-1 px-4 rounded"
        >
          search
        </button>
      </form>
      <div className="p-3 border-2 border-slate-400 flex flex-col justify-center">
        <p className="text-center">Search by ingredients</p>
        <div className="grid grid-cols-4 place-items-center">
          {arr.map((ingredient, index) => (
            <IngredientCheckbox
              key={index}
              ingredient={ingredient}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
