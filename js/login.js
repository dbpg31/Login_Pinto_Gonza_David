// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


//import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
//import { auth } from "./firebase.js"



//registro

registro.addEventListener('submit', async (e) => {
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        alert ("Usuario Creado");
        sendEmailVerification(auth.currentUser).then(()=>{
            alert('se a enviado un correo de verificacion')
        });
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/email-already-in-use')
            alert('El correo ya esta en uso');
        else if (errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if (errorCode == 'auth/weak-password')
            alert('La contraseña debe tener al menos 6 caracteres');
    });
  });

// login

login.addEventListener('submit', async (e) {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    singInWithEmailAndPassword(auth, email, password).then(cred => {
        alert ("Usuario Logueado");
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if (errorCode == 'auth/user-disabled')
            alert('El usuario ha sido deshabilitado');
        else if (errorCode == 'auth/user-not-found')
            alert('El usuario no existe');
        else if (errorCode =='auth/wrong-password')
            alert('Contraseña incorrecta');
    });
  });

  auth.onAuthStateChanged(user =>{
    if(user){
        console.log("Usuario Activo");
        var email= user.emailVerified;
        if(email){
            window.open("https://www.google.com/")
        }else {
            auth.signOut();
        }
    }else{
        console.log("Usuario inactivo");
    }

  });


const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password =signupForm['signup-password'].value

    console.log(email,password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

           showMessage("welcome " + userCredentials.user.email)

     } catch (error) {        
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Email already in use", "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("password is too weak", "error")
        } else if (error.code) {
            showMessage(error.message, "error")
        }

    }


});

/*

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from './firebase.js'


const signinForm = document.querySelector('#login-form');
signinForm.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showMessage('Welcome ' + credentials.user.email)
        } catch (error) {
        if(error.code === "auth/wrong-password"){
            showMessage('Wrong password', 'error')
        }else if (error.code === 'auth/user-not-found'){
            showMessage('User not found','error')
        }else{
            showMessage(error.message,'error')

        }

    }

});

*/
