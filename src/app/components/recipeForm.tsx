import { RecipeResultContext } from "@/app/contexts/RecipeResult";
import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import IngredientCheckbox from "./checkbox";

const Form = () => {
  const [query, setQuery] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const Recipe = useContext(RecipeResultContext);
  const ingredientsToString = selectedIngredients.join(",");

  //array for testing
  const arr = ["tomato", "onion", "cheese"];
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  const getRecipe = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        //データベースに保存されている材料の中でチェックされたものをエンドポイントに設定する。
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients=${ingredientsToString}&apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      Recipe?.setRecipes(jsonData.results);
      console.log(jsonData);
      console.log(ingredientsToString);
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
    <form>
      <input
        type="text"
        placeholder="Search recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={getRecipe}>search</button>
      <p>Search by ingredients</p>

      {arr.map((ingredient, index) => (
        //↑実際にはデータベースに保存されている材料をマッピングする
        <IngredientCheckbox
          key={index}
          ingredient={ingredient}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </form>
  );
};

export default Form;
