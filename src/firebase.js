// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Auth

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo5QXZX4IMTyCJLyuzyI1GB2PBiEi_47w",
    authDomain: "fridgefy-c7e37.firebaseapp.com",
    projectId: "fridgefy-c7e37",
    storageBucket: "fridgefy-c7e37.appspot.com",
    messagingSenderId: "382758110737",
    appId: "1:382758110737:web:83e6f1fac51eb572ced3b0",
    measurementId: "G-0V7995QZ8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Create Firestore instance
const auth = getAuth(app); // Create Auth instance

// Function to add a recipe
const addRecipe = async () => {
    try {
        const recipeRef = await db.collection('Recipes').add({
            title: "Margherita Pizza",
            description: "A classic Italian pizza with tomatoes, mozzarella cheese, and fresh basil.",
            steps: ["Knead the dough", "Add toppings", "Bake in oven"],
            ingredients: [
                {name: "Flour", amount: "200g"},
                {name: "Tomatoes", amount: "100g"}
            ]
        });
        console.log("Document written with ID: ", recipeRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

// Export instances for use in other parts of the application
export { db, auth, addRecipe };
