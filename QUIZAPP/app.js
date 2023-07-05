// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,ref , onChildAdded  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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

var loader = document.getElementById('loader')
var showQuestion = document.getElementById('showQuestion')

function getDataFromDatabase(){
loader.style.display='block'
showQuestion.style.display='none'
    const reference=ref(db,'questions/')
    onChildAdded(reference,function(data){
        console.log(data.val())
        questions.push(data.val())
        loader.style.display='none'
showQuestion.style.display='block'
        renderQuestion()
    })
}


getDataFromDatabase()

var questions = [
// {
//     question:"JS stands for_____________________",
//     options:["Read Only Memory","none of these","JavaScript","random oriented momentum"],
//     correctAnswer:"JavaScript",
// },
// {
//     question:"CSS stands for_____________________",
//     options:["Read Only Memory","none of these","Cascading Style Sheet","random oriented momentum"],
//     correctAnswer:"Cascading Style Sheet",
//     },
//     {
//         question:"ROM stans for?_____________________",
//         options:["Read Only Memory","none of these","rom","random oriented momentum"],
//         correctAnswer:"Read Only Memory",
//         },
//         {
//             question:"RAM stands for?_____________________",
//             options:["Random Access Memory","none of these","rom","random access momentum"],
//             correctAnswer:"Random Access Memory",
//             },
//             {
//                 question:"SQL stands for?_____________________",
//                 options:["SQL","Structured Query Language","ssm","sqm"],
//                 correctAnswer:"Structured Query Language",
//                 },
//                 {
// question:"Is HTML a programming Language?",
// options:["yes","no"],
// correctAnswer:"no",
// },



];

var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionnumber = document.getElementById("currentQuestionnumber");
var totalQuestionnumber = document.getElementById("totalQuestionnumber");
var optionsParent = document.getElementById("optionsParent");


var indexVal = 0;
var marks = 0;


window.checkAnswer=function(correctAnswer,selectedOption){
    if(correctAnswer==selectedOption){
        marks= marks+1;
    }
    console.log(marks);
    nextQue();  
} 
 window.nextQue = function  (){
    if(indexVal+1==questions.length){
        alert("your marks is " + marks +" out of " + questions.length)
    }
   else{ indexVal++;
    renderQuestion();
}
}

function renderQuestion(){
var que = questions[indexVal];
displayQuestion.innerHTML=que.question ;
totalQuestionnumber.innerHTML=questions.length;
currentQuestionnumber.innerHTML= indexVal + 1;

optionsParent.innerHTML ="";

for(var i =0;i<que.options.length;i++){
    optionsParent.innerHTML+=`<div class="col-md-4 my-3 w-100"><button onclick="checkAnswer('${que.correctAnswer}','${que.options[i]}')"
    class="btn btn-outline-info text-black w-100 py-2">${que.options[i]}</button></div>`;
}
}
 

renderQuestion();
