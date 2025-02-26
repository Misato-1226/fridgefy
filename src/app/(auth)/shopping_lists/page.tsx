"use client";

import { deleteIngredients, updateIngredients } from "@/firebase";
import { db } from "@/firebaseConfig";
import { Ingredient, IngredientDatabase } from "@/lib/types";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState<IngredientDatabase[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updateIngredient, setUpdateIngredient] = useState<
    IngredientDatabase[]
  >([]);

  /**
   * amountとunitの値を変更して、saveを押したら、
   * 変更されたingredientのデータをfirebaseで変更する
   */

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

  const handleUpdate = async () => {
    const result = await Promise.all(
      updateIngredient.map((item) => updateIngredients(item))
    );
    setIsEdit((prev) => !prev);
    console.log(updateIngredient);
  };
  //値が変化したものだけ取り出して、新しい配列に追加？してそれらをfirebase内で更新？

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

  const handleValue = (
    ingredient: IngredientDatabase,
    field: "amount" | "unit",
    value: string
  ) => {
    const currentValue =
      field === "amount" ? ingredient.amount.toString() : ingredient.unit;
    console.log("現在の値", currentValue);

    const fixedValue = field === "amount" ? Number(value) : value;
    //インプットに入力可能にするため、値を更新
    setIngredients((prev) =>
      prev.map((item) =>
        item.id === ingredient.id ? { ...item, [field]: fixedValue } : item
      )
    );
    //updateIngredientがそもそも空配列だから、更新されない。次回：setUpdateIngredientを修正
    if (value !== currentValue) {
      if (updateIngredient.length === 0) {
        console.log("初回の更新");
        setUpdateIngredient([
          {
            ...ingredient,
            [field]: fixedValue,
          },
        ]);
      } else {
        console.log("二回目以降の更新");
        setUpdateIngredient((prev) =>
          prev.map((item) =>
            item.id === ingredient.id ? { ...item, [field]: fixedValue } : item
          )
        );
      }
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
          onClick={() => handleUpdate()}
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
                      {ingredient.amount}
                      <span>{ingredient.unit}</span>
                    </p>
                  </div>
                )}
                {isEdit && (
                  <div className="flex">
                    {/**次回: 入力した値をfirebaseで更新できるようにする */}
                    <input
                      className="w-28 border"
                      value={ingredient.amount}
                      onChange={(e) =>
                        handleValue(ingredient, "amount", e.target.value)
                      }
                      placeholder="amount"
                    />
                    <select
                      value={ingredient.unit}
                      onChange={(e) =>
                        handleValue(ingredient, "unit", e.target.value)
                      }
                    >
                      {units.map((unit, index) => (
                        <option key={index}>{unit}</option>
                      ))}
                    </select>
                    <Image
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
