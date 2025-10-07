import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4w3YodBPq4jrIh3OvILHwopP6Rjogwfo",
  authDomain: "inno-database.firebaseapp.com",
  projectId: "inno-database",
  storageBucket: "inno-database.firebasestorage.app",
  messagingSenderId: "218803017037",
  appId: "1:218803017037:web:51f8549c127bd2cef5d304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
