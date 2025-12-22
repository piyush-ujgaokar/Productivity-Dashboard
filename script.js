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

  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("task is empty");
  }

  function renderTask() {
    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    let allTask = document.querySelector(".allTask");
    let sum = "";
    currentTask.forEach((elem, idx) => {
      sum += `<div class="task">
              <h2>${elem.title} <span class=${elem.check}>imp</span></h2>
              <button id=${idx}>Mark as Completed</button>
           </div>`;
    });

    allTask.innerHTML = sum;
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

    location.reload();
  });

  let markCompletedBtn = document.querySelectorAll(".task button");
  markCompletedBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      currentTask.splice(btn.id, 1);
      renderTask();
      location.reload();
    });
  });
}
todoList();







