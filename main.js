let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let timer = 0;
let intervalId = null;


function formatTime(seconds) {
  let hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  let secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}


startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      timer++;
      timerElement.textContent = formatTime(timer);
    }, 1000);
  }
});


stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});


resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  timer = 0;
  timerElement.textContent = "00:00:00";
});




const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {

    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.textContent = taskText;


    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "O'chirish";


    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

  
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });


    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);


    taskInput.value = "";
  }
});





const blocks = document.querySelectorAll(".block");
const movesCounter = document.getElementById("moves");
const message = document.getElementById("message");

let moves = 0; 


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function checkAllBlocksSameColor() {
  const firstBlockColor = blocks[0].style.backgroundColor;
  return Array.from(blocks).every(
    block => block.style.backgroundColor === firstBlockColor
  );
}


blocks.forEach(block => {
  block.addEventListener("click", () => {
 
    block.style.backgroundColor = getRandomColor();

 
    moves++;
    movesCounter.textContent = `Harakatlar: ${moves}`;


    if (checkAllBlocksSameColor()) {
      message.classList.remove("hidden");
    }
  });
});
