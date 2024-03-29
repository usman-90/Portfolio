// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDSIsGYGKwpAR7D5PkOW-Xwwo2Ln9jEF0",
  authDomain: "project-1461d.firebaseapp.com",
  projectId: "project-1461d",
  storageBucket: "project-1461d.appspot.com",
  messagingSenderId: "386134303744",
  appId: "1:386134303744:web:1675e95b120c041c1e64e5",
  measurementId: "G-RLHGQ94HRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var namee = document.getElementById("namee");
var lnamee = document.getElementById("lnamee");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signup = function(e) {
  e.preventDefault();
  var obj = {
    firstName: namee.value,
    lastName: lnamee.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then(function(success){
    console.log(success.user.uid)
    window.location.replace('login.html');
  })
  .catch(function(err){
    console.log(err)
    alert(err)
  });
};