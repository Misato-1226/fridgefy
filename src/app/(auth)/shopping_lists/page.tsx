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
    <div>
      {ingredients.map((ingredient, index) => (
        <h1 key={index}>a</h1>
      ))}
    </div>
  );
};

export default ShoppingList;
