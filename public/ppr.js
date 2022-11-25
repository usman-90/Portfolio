// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  push,
  remove,
  onChildAdded,
  onValue,
  update,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


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
const database = getDatabase();
const auth = getAuth();
var uid;

var log = document.getElementById("log");


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    log.innerHTML = "Logout";
    // ...
  } else {
    // User is signed out
    // ...
    log.innerHTML = "Login";
  }
});

window.loginout = function() {
  if (log.innerHTML === "Logout") {
    signOut(auth)
      .then(function () {
        console.log("Logout Successfully");
      })
      .catch(function (err) {
        console.log(err);
      });
  } else if (log.innerHTML === "Login") {
    window.location.href = "login.html";
  }
}
















var article = document.getElementById('article')
var coverimg = document.getElementById('coverimg')

function renderarticle(){
    
  var idd = localStorage.getItem(`id`) 
  const cardref = ref(database, `cards/`);
  onChildAdded( cardref, function(data){
     if (data.val().id === idd){
      article.innerHTML = data.val().article
      coverimg.setAttribute(`src`,`${data.val().coverimg}`)
     }
  
  })

}

renderarticle()