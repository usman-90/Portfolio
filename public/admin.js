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

var article = document.getElementById("article");
var coverimg = document.getElementById("coverimg");
var cardimg = document.getElementById("cardimg");
var title = document.getElementById("title");
var description = document.getElementById("description");

var obj = {};

window.submitt = function () {
  obj.article = article.value;
  obj.title = title.value;
  obj.description = description.value;
  obj.cardimg = cardimg.value;
  obj.coverimg = coverimg.value;
  const refKey = ref(database, `cards/`);
  obj.id = push(refKey).key;
  const reference = ref(database, `cards/${obj.id}/`);
  set(reference, obj);
  // arr[arr.length] = obj;

  article.value = "";
  coverimg.value = "";
  cardimg.value = "";
  title.value = "";
  description.value = "";
};


window.deletee = function(idd , param2){
  var text = "Are you sure you want to delete this article?"
  if (confirm(text) == true) {
    const cardref = ref(database, `cards/${idd}/`);
    remove(cardref);
    param2.parentNode.parentNode.parentNode.remove();
  } 
 

}

var articlediv = document.getElementById("articlediv");
var main = document.getElementById('main')

window.sarticles = function () {

  articlediv.innerHTML=`<button type="button" onclick="closee()" class="myclosebtn btn-close btn-close-white" aria-label="Close"></button>`;

  articlediv.style.display = "flex";
  main.style.overflow = "hidden"

  const cardref = ref(database, `cards/`);
  onChildAdded(cardref, function (data) {
    articlediv.innerHTML += `<div class="my-3 col-md-4">

  
    <div class="card mx-auto border-white" style="width: 18rem">
      <img style="height: 16rem " src="${data.val().cardimg}"
        class="card-img-top rounded" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${data.val().title}</h5>
        <p class="card-text">
        ${data.val().description}
        </p>
        <button href="#" onclick="deletee('${data.val().id}',this)" class="btn btn-danger mybtn">Delete </button>
      </div>
    </div>
  </div>`;
  });

};

window.closee = function (){
  articlediv.style.display = "none"
}