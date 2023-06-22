// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUwfEyTL4E8cQcPWCEs1DgknAAwh0mG2c",
  authDomain: "practice-203c9.firebaseapp.com",
  databaseURL: "https://practice-203c9-default-rtdb.firebaseio.com",
  projectId: "practice-203c9",
  storageBucket: "practice-203c9.appspot.com",
  messagingSenderId: "748134227378",
  appId: "1:748134227378:web:bc172bce6cfd4bcf2658ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    window.location = "chat_room.html";
}