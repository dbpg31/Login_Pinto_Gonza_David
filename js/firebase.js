
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import {getAuth, signInWithPopup, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA6qz_vTBpGd3TeXChxbsRy30K5UuHGWJI",
    authDomain: "login-app-d4507.firebaseapp.com",
    projectId: "login-app-d4507",
    storageBucket: "login-app-d4507.appspot.com",
    messagingSenderId: "1031161775954",
    appId: "1:1031161775954:web:c9d8f9ce8b39b99eba9c8b"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)




