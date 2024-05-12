// Importado desde firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMow0pA9upSWJXiMdLR_SqHZuj_pN2c6A",
  authDomain: "restauranteapp-4fd04.firebaseapp.com",
  projectId: "restauranteapp-4fd04",
  storageBucket: "restauranteapp-4fd04.appspot.com",
  messagingSenderId: "277625006581",
  appId: "1:277625006581:web:8adc02e9ddac29824858bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)