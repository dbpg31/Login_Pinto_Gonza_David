import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth, getAuth, signInWithPopup, GoogleAuthProvider } from './firebase.js'
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const googleButton = document.querySelector('#googleLogin')
googleButton.addEventListener('click', async () =>{
    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)        
        console.log(credentials)
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()
        showMessage('Welcome' + credentials.user.displayName, 'success')
        } catch (error) {
        console.log(error)
    }

});

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  const provider = new GoogleAuthProvider();