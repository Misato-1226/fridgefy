"use client";

import { db } from "@/firebaseConfig";
import { Ingredient } from "@/lib/types";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
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

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    //個数と単位を追加保存できるようにする
    <div>
      <h2 className="text-center text-3xl mb-8">Shopping Lists</h2>
      <button
        onClick={handleEdit}
        className="border border-slate-400 rounded-md py-1 px-3"
      >
        edit
      </button>
      <div className="border">
        <ul className="p-10">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc text-xl mb-3">
              <div className="flex justify-between gap-5">
                {ingredient.name}
                <div>
                  <input className="w-16" placeholder="amount" />
                  <select>
                    <option>g</option>
                    <option>ml</option>
                    <option>bulb</option>
                    <option>bunch</option>
                    <option>spear</option>
                    <option>head</option>
                    <option>punnet</option>
                    <option>slice</option>
                    <option>piece</option>
                  </select>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
