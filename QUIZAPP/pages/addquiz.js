// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD17c1p4KgM8R86Pbje5hK_Bxv8THwTrHM",
  authDomain: "quizapp-84423.firebaseapp.com",
  projectId: "quizapp-84423",
  storageBucket: "quizapp-84423.appspot.com",
  messagingSenderId: "161266917887",
  appId: "1:161266917887:web:e4786c4cfbcdaeb7a787ca",
  measurementId: "G-GWWCMRPB20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()



var option = document.getElementById('option');
var optionsParent = document.getElementById('optionsParent');
var correctAnswerElem = document.getElementById('correctAnswer');
var question = document.getElementById('question');

var options = []
var correctAnswer 

function renderOptions(){
    optionsParent.innerHTML=''
    for(var i =0;i<options.length;i++){
    optionsParent.innerHTML+=`<li   onclick="SetcorrectAnswer('${options[i]}')" class="p-2 bg-light fs-5 rounded shadow my-2">${options[i]}</li>`

}
}

window.addOptions = function(){
    options.push(option.value)
    console.log(options);
    renderOptions()
}
window.SetcorrectAnswer = function(a){
correctAnswer = a
correctAnswerElem.innerHTML = correctAnswer
}

window.SubmitQuestion = function(){
   var obj ={
    question:question.value,
    options:options,
    correctAnswer:correctAnswer
}
obj.id= push(ref(db,'questions/')).key
const reference =ref(db,`questions/${obj.id}`)
set(reference,obj)
   
console.log(obj)
}