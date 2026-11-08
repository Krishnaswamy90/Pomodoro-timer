const display=document.querySelector("#display");
const message=document.querySelector("#message");
const startButton=document.querySelector("#start-button")
const pauseButton=document.querySelector("#pause-button")
const resetButton=document.querySelector("#reset-button")


const startingTime=25*60;
let timeLeft=startingTime
let timerId=null;

function updateDisplay(){
const minutes=Math.floor(timeLeft/60);
const seconds=timeLeft%60;

display.textContent=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}


startButton.addEventListener("click",()=>{
  if (timerId!==null)return;

  message.textContent="Focus time!";

  timerId=setInterval(()=>{
    timeLeft--;
  updateDisplay();

  if(timeLeft<=0){
    clearInterval(timerId);
    timerId=null;
    message.textContent="Time is up! Take a break."
  }
},1000);

});


pauseButton.addEventListener("click",()=>{
  if(timerId!==null){
    clearInterval(timerId);
    timerId=null;
    message.textContent="Timer paused.";
  }
});


resetButton.addEventListener("click",()=>{
  clearInterval(timerId);
  timerId=null;
  timeLeft=startingTime;
  updateDisplay();

  message.textContent="Ready to focus?";
});

updateDisplay();