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

import { collection, addDoc } from "firebase/firestore";

export const addRecipe = async (recipe) => {
  try {
    const docRef = await addDoc(collection(db, "Recipes"), {
      title: recipe.title,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
