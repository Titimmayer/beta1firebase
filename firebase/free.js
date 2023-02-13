import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { collection, addDoc  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyCJHEQXd1DXohdLh7-Gd2YIPTY0PQoviZU",
    authDomain: "appghost-54dbb.firebaseapp.com",
    projectId: "appghost-54dbb",
    storageBucket: "appghost-54dbb.appspot.com",
    messagingSenderId: "1007114067093",
    appId: "1:1007114067093:web:2f1eaffd6816b1c1968f9c",
    measurementId: "G-FJ374TRM2V"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

const email = document.getElementById("email");
const pass= document.getElementById("pass");
const btncrear = document.getElementById("crear");
const btnlog = document.getElementById("log");
const btncerrar = document.getElementById("cerrar");
const guardar = document.getElementById("guardar");
const providerGoogle = new GoogleAuthProvider();
const google = document.getElementById("google");
const providerfacebook = new FacebookAuthProvider();
const Facebook = document.getElementById("facebook");
/* formulario */
const NombreCom = document.getElementById('nomCom');
const Edd = document.getElementById('edad');
const genero = document.getElementById('gene');
const numero = document.getElementById('num');
const correo1 = document.getElementById('correo');




btncrear.addEventListener("click", function(){

createUserWithEmailAndPassword(auth, email.value, pass.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log("usuario creado")
    alert("Su cuenta fue creada")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
    
})

btnlog.addEventListener("click", function(){
    signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("sesion iniciada")
      document.getElementById("git").style.display  = "block";

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


})


btncerrar.addEventListener("click", function(){
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("sesion cerrada")
      }).catch((error) => {
        // An error happened.
      });
        

})

guardar.addEventListener("click",async() =>{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      nombre:`${NombreCom.value} `,
      Edad:`${Edd.value} `,
      sexo:`${genero.value} `,
      telefono:`${numero.value} `,
      correo:`${correo1.value} `
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})

google.addEventListener("click", function(){
signInWithPopup(auth, providerGoogle)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    alert('sesion creada')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    
    // ...
    alert('error al intentar iniciar sesion')
  });
})





Facebook.addEventListener("click", function() {
  

signInWithPopup(auth, providerfacebook)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

});







