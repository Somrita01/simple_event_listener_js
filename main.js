const buttonToBeClicked = document.getElementById("example-button");
const resetButton = document.getElementById("reset-button");

const initialText = buttonToBeClicked.textContent;

const clickedText = "You have clicked this button."

function eventListener(){
    buttonToBeClicked.textContent = clickedText;
}

function addListener(){
    buttonToBeClicked.addEventListener(
        "click",
        eventListener,
        {
            passive:true,
            once:true
        }
    );
}

resetButton.addEventListener(
    "click",
    () =>{
buttonToBeClicked.textContent = initialText;
addListener();
    }
);

addListener();