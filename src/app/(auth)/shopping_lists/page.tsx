"use client";

import { db } from "@/firebaseConfig";
import { Ingredient } from "@/lib/types";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Ingredients"));
        const ingredients = querySnapshot.docs.map((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const ingredientsData = doc.data() as Ingredient;
          return {
            ...ingredientsData,
          };
        });
        setIngredients(ingredients);
      } catch (error) {
        console.error("Error fetching ingredients: ", error);
      }
    };
    fetchIngredient();
  }, []);
  return (
    //個数と単位を追加保存できるようにする
    <div>
      <h2 className="text-center text-3xl mb-8">Shopping Lists</h2>
      <div className="w-80 border">
        <ul className="p-10">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc text-xl mb-3">
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
