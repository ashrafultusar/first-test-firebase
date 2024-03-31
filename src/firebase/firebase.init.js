// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCen3VkLRU5czm5rRdaK1NnwYReh5Osz00",
  authDomain: "first-test-firebase-165e6.firebaseapp.com",
  projectId: "first-test-firebase-165e6",
  storageBucket: "first-test-firebase-165e6.appspot.com",
  messagingSenderId: "190878809529",
  appId: "1:190878809529:web:8a3395fcd952e7e4414a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app