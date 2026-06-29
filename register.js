import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!fullName || !email || !password || !confirmPassword) {
    alert("সব ঘর পূরণ করুন");
    return;
  }

  if (password !== confirmPassword) {
    alert("দুইটি পাসওয়ার্ড মিলছে না");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: fullName
    });

    alert("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");

    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
  }

});