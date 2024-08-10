import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWMIAVL0Dvi1uWa84vDb_b9YhWdG8sZcs",
  authDomain: "fir-chat-e7af4.firebaseapp.com",
  databaseURL: "https://fir-chat-e7af4-default-rtdb.firebaseio.com",
  projectId: "fir-chat-e7af4",
  storageBucket: "fir-chat-e7af4.appspot.com",
  messagingSenderId: "887996610687",
  appId: "1:887996610687:web:37cf331a4939f4c764674a",
  measurementId: "G-V1ZLH8ELW0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
