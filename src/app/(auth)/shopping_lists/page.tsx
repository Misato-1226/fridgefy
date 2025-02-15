"use client";

import { deleteIngredients } from "@/firebase";
import { db } from "@/firebaseConfig";
import { Ingredient } from "@/lib/types";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
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
            id: doc.id,
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

  const handleDelete = async (id: string) => {
    try {
      await deleteIngredients(id);
      setIngredients((prev) =>
        prev.filter((ingredient) => ingredient.id !== id)
      );
      console.log("Ingredient deleted successfully!");
    } catch (error) {
      console.error("Error with firebase", error);
    }
  };

  const units = [
    "g",
    "ml",
    "bulb",
    "bunch",
    "spear",
    "head",
    "punnet",
    "slice",
    "piece",
  ];

  return (
    //個数と単位を追加保存できるようにする
    <div className="">
      <h2 className="text-center text-3xl mb-8">Shopping Lists</h2>
      {!isEdit && (
        <button
          onClick={handleEdit}
          className="text-lg border border-3 text-white border-lime-400 bg-lime-400 rounded-md py-1 px-3"
        >
          edit
        </button>
      )}
      {isEdit && (
        <button
          onClick={handleEdit}
          className="text-lg text-white border-lime-400 bg-lime-400 border-2 rounded-md py-1 px-3"
        >
          cancel
        </button>
      )}
      {isEdit && (
        <button
          onClick={handleEdit}
          className="text-lg ml-3 text-white border-lime-400 bg-lime-400 border-2 rounded-md py-1 px-3"
        >
          save
        </button>
      )}
      <div className="border">
        <ul className="p-10">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="list-disc text-xl mb-3">
              <div className="flex justify-between">
                {ingredient.name}
                {!isEdit && (
                  <div>
                    <p>
                      200<span>g</span>
                    </p>
                  </div>
                )}
                {isEdit && (
                  <div className="flex">
                    <input className="w-28 border" placeholder="amount" />
                    <select>
                      {units.map((unit, index) => (
                        <option key={index}>{unit}</option>
                      ))}
                    </select>
                    <Image
                      //次回：レンダリングさせたいので、この関数内でステイトを更新する
                      onClick={() => handleDelete(ingredient.id)}
                      className="ml-5"
                      width={30}
                      height={30}
                      alt="trash"
                      src="https://img.icons8.com/?size=100&id=11705&format=png&color=000000"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
