"use client";

import { addIngredients } from "@/firebase";
import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";

interface Ingredient {
  id: number;
  name: string;
}

const API_KEY = "28d9e505d9d04d65a92ab947db3eec00"; //your spoonacular API key
const localIngredients = [
  "Tomato",
  "Cheese",
  "Butter",
  "Bread",
  "Red chili flakes",
  "Coarse salt",
  "Cinnamon",
  "Oregano",
  "Paprika",
  "Pasta",
  "Couscous",
  "Rice",
  "White sugar",
  "Brown sugar",
  "Powdered sugar",
  "Beef stock",
  "Chicken stock",
  "Celery",
  "Eggs",
  "Heavy cream",
  "Milk",
  "Bacon",
  "Limes",
  "Carrots",
  "Orange juice",
  "Ketchup",
  "Mayonnaise",
  "Extra virgin olive oil",
  "Vinegar",
  "Honey",
  "Garlic",
  "Shallots",
  "Potatoes",
  "Onions",
  "Beans",
  "Lentils",
  "Chickpeas",
  "Pork stock",
  "Fish stock",
  "Soy sauce",
  "Worcestershire sauce",
  "Tabasco sauce",
];

const MyFridge = () => {
  const [items, setItems] = useState<Ingredient[]>([]);
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      if (search.length > 2) {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/food/ingredients/autocomplete?query=${search}&number=20&apiKey=${API_KEY}`
          );
          const data = await response.json();
          setIngredients(
            data
              .map((item: any) => ({
                id: item.id,
                name: item.name,
              }))
              .slice(0, 7)
          );
        } catch (error) {
          console.error("Error fetching ingredients:", error);
          setIngredients([]);
        }
      }
    };
    fetchIngredients();
  }, [search]);

  const handleAddIngredient = async (ingredient: Ingredient) => {
    try {
      const recipeId = await addIngredients(ingredient);

      console.log("New ingredient added with ID:", recipeId);
    } catch (error) {
      console.error("Error adding ingredient:", error);
    }
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="rounded-md p-3 h-full border-2 border-slate-300 w-3/12">
      <p className="text-center">Search Ingredients</p>
      {/* <div>
        <label htmlFor="apiToggle">
          Use Advance Search (Use only if its necessary)
          <input
            type="checkbox"
            checked={useAPI}
            onChange={(e) => setUseAPI(e.target.checked)}
            id="apiToggle"
          />
        </label>
      </div> */}
      <input
        type="text"
        placeholder="ingredients name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-inherit p-1"
      />
      {ingredients.map((ingredient) => (
        <div
          key={ingredient.id}
          className="flex justify-between p-1"
          style={{
            backgroundColor: items.find((item) => item.id === ingredient.id)
              ? "#f0f0f0"
              : "transparent",
          }}
        >
          {ingredient.name}{" "}
          <button onClick={() => handleAddIngredient(ingredient)}>Add</button>
        </div>
      ))}
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between p-1"
            style={{ backgroundColor: "#c8e6c9" }}
          >
            {item.name}{" "}
            <MdDeleteForever
              onClick={() => handleDelete(item.id)}
              className="cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFridge;
