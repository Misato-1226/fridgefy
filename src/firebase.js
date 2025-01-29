"use server";
import { db } from "./firebaseConfig"; // Asegúrate de que importas db correctamente de tu configuración de Firebase
/*
export const addRecipe = async (recipe) => {
  try {
    await setDoc(doc(db, "Recipes"), {
      title: recipe.title,
    });

   
    const recipeRef = await db.collection("Recipes").add({
      title: recipe.title,
      
      description:
        "A classic Italian pizza with tomatoes, mozzarella cheese, and fresh basil.",
      steps: ["Knead the dough", "Add toppings", "Bake in oven"],
      ingredients: [
        { name: "Flour", amount: "200g" },
        { name: "Tomatoes", amount: "100g" },
      ],
      image: recipe.image,
      
    });
    
    console.log("Document written with ID: ", recipeRef.id);
    return recipeRef.id; // Devolver el ID puede ser útil para operaciones posteriores
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // Es bueno re-lanzar el error para manejarlo más arriba si es necesario
  }
};
*/

import { collection, addDoc, deleteDoc } from "firebase/firestore";

export const addRecipe = async (recipe) => {
  try {
    const docRef = await addDoc(collection(db, "Recipes"), {
      recipeId: recipe.id,
      title: recipe.title,
      image: recipe.image,
      instructions: recipe.instructions,
      ingredients: recipe.ingredients,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteRecipe = async (id) => {
  try {
    const docRef = doc(db, "Recipes", id);

    await deleteDoc(docRef);
    console.log("Document deleting with ID: ", id);
  } catch (error) {
    console.error(`Error deleting recipe with ID ${id}:`, error);
  }
};

export const addIngredients = async (ingredient) => {
  try {
    const docRef = await addDoc(collection(db, "Ingredients"), {
      name: ingredient.name,
      ingredientId: ingredient.id,
    });
    console.log("Document written with ID: ", docRef.id);
    alert("Added in Shopping Lists");
  } catch (e) {
    console.log(ingredient);
    console.error("Error adding document: ", e);
  }
};

export const deleteIngredients = async (id) => {
  try {
    const docRef = doc(db, "Ingredients", id);

    await deleteDoc(docRef);
    console.log("Document deleting with ID: ", id);
  } catch (error) {
    console.error(`Error deleting recipe with ID ${id}:`, error);
  }
};
