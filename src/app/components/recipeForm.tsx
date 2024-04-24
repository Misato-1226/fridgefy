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

const cuisineList = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const dietList = [
  "Gluten Free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Vegetarian",
  "Ovo-Vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
  "Primal",
  "Low FODMAP",
  "Whole30",
];

const Form = () => {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
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
      const response = await getRecipes(
        query,
        ingredientsToString,
        cuisine,
        diet
      );
      Recipe?.setRecipes(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [cuisine, diet]);

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
      <form className="grid justify-items-center content-start">
        <div className="">
          <input
            type="text"
            placeholder="Search recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" border border-slate-300"
          />
          <button
            onClick={getRecipe}
            className="bg-slate-400  text-white font-bold py-1 px-4 rounded"
          >
            search
          </button>
          <div>
            <label htmlFor="cuisine">Cuisine</label>
            <select
              name="cuisine"
              className="border border-slate-400 m-3"
              onChange={(e) => setCuisine(e.target.value)}
            >
              {cuisineList.map((cuisine, index) => (
                // コールバック関数内でreturnを使用してオプション要素を返す
                <option key={index} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
            <label htmlFor="diet">Diet</label>
            <select
              name="diet"
              className="border border-slate-400 m-3"
              onChange={(e) => setDiet(e.target.value)}
            >
              {dietList.map((diet, index) => (
                // コールバック関数内でreturnを使用してオプション要素を返す
                <option key={index} value={diet}>
                  {diet}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      {/*
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
        */}
    </div>
  );
};

export default Form;
