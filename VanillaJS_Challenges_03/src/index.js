const range = document.querySelector(".range-form");
const userInput = document.querySelector(".input-form");
const body = document.querySelector("body");
const playBtn = document.querySelector(".play-button");
const result = document.querySelector(".result");

function onClick(e) {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random()*(parseInt(range.value)+1));
    let output;
    if(userInput.value == randomNumber){
        output = "You won!!"
        result.innerText = 
        `You chose: ${userInput.value}, the machine chose: ${randomNumber}.
        ${output}`;
    }else{
        output = "You lost!!"
        result.innerText = 
        `You chose: ${userInput.value}, the machine chose: ${randomNumber}.
        ${output}`;
    }
    console.log(typeof(range.value));
    console.log(result.innerText)
}

function numkeyCheck(e){
    if(e.key >= 0 && e.key<= 9){
        return true;
    }else{
        return false;
    }
}

playBtn.addEventListener("click", onClick);
