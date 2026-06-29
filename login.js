alert("login.js loaded");
import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("ইমেইল এবং পাসওয়ার্ড দিন");
    return;
  }

  try {

    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful!");

    window.location.href = "home.html";

  } catch (error) {

    alert(error.message);

  }

});