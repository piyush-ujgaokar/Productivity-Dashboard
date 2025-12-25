function openFeatures() {
  let allElem = document.querySelectorAll(" .elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElem.forEach((elem) => {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach((back) => {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}
openFeatures();

function todoList() {
  let form = document.querySelector(".addTask form");
  let titleInput = document.querySelector(".addTask form #task-input");
  let detailInput = document.querySelector(".addTask form textarea");
  let taskCheckBox = document.querySelector(".addTask form #check");

  let currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("task is empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");
    let sum = "";
    currentTask.forEach((elem, idx) => {
      sum += `<div class="task">
          <h2>${elem.title} <span class=${elem.check}>imp</span></h2>
          <button id=${idx}>Mark as Completed</button>
          </div>`;
      allTask.innerHTML = sum;
      localStorage.setItem("currentTask", JSON.stringify(currentTask));

      document.querySelectorAll(".task button").forEach((btn) => {
        btn.addEventListener("click", function () {
          currentTask.splice(btn.id, 1);
          renderTask();
        });
      });
    });
  }
  renderTask();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    //   console.log(titleInput.value);
    // console.log(detailInput.value);

    // console.log(taskCheckBox.checked);
    // console.log(allTask);

    currentTask.push({
      title: titleInput.value,
      detail: detailInput.value,
      check: taskCheckBox.checked,
    });

    titleInput.value = "";
    detailInput.value = "";
    taskCheckBox.checked = false;
    renderTask();
  });
}
todoList();

function dailyPlanner(){

  let dayPlanData=JSON.parse(localStorage.getItem('dayPlanData')) ||{}
let dayPlanner=document.querySelector(".day-planner")
let hours=Array.from({length:18},(_,idx)=>`${6+idx}:00 - ${7+idx}:00`)

let time=''

hours.forEach((elem,idx)=>{
  
  let saveData=dayPlanData[idx] || "";
  
  
  time+=`<div class="day-planner-time">
  <p>${elem}</p>
        <input id=${idx} type="text" placeholder="Type Your Daily Plan here....." value="${saveData}">
        </div>`
        
        dayPlanner.innerHTML=time
        
        let dayPlannerInput=document.querySelectorAll(".day-planner-time input")
        
        dayPlannerInput.forEach((elem)=>{
          elem.addEventListener('input',function(){
            console.log(elem.id);
            
            dayPlanData[elem.id]=elem.value
            
            localStorage.setItem('dayPlanData',JSON.stringify(dayPlanData))
          
        })
        
    })
    
  })
  



}
dailyPlanner()

function motivationalQuote(){

  let quote=document.querySelector(".motivation-2 p")
let author=document.querySelector(".motivation-3 h3")

async function quotes(){
  let response= await fetch('https://motivational-spark-api.vercel.app/api/quotes/random')
  let data=await response.json()
  
  quote.innerHTML=data.quote;
  author.innerHTML=data.author
  
  
}
quotes()

}
motivationalQuote()


let totalSeconds=(25*60)
let timer=document.querySelector(".pomo-timer h2")
let startBtn=document.querySelector(".pomo-timer .start")
let pauseBtn=document.querySelector(".pomo-timer .pause")
let resetBtn=document.querySelector(".pomo-timer .reset")

let timeInterval=null;
function updateTime(){
   let minutes=Math.floor(totalSeconds/60)
    let seconds=totalSeconds%60

  timer.innerHTML=`${minutes}:${seconds}`
}

function startTimer(){
  timeInterval=setInterval(function(){
      totalSeconds--
      updateTime()
  },100)
}
startBtn.addEventListener("click",startTimer)

function pauseTimer(){
  clearInterval(timeInterval)
}
pauseBtn.addEventListener("click",pauseTimer)