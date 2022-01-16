const memberNum = Number(prompt("몇명이 참가하나요?"));
if(memberNum){
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const word = document.querySelector("#word");
    const order = document.querySelector("#order");
    let preWord;
    let newWord;

    
    function onInput(e){
      newWord = e.target.value;
    }

    const onClickButton = () => {
    //첫 번째 참가자 인지 아닌지 판별
    if((!preWord || preWord[preWord.length -1] === newWord[0]) && newWord.length === 3){
        preWord = newWord;
        word.textContent = input.value;
        const orderNum = Number(order.textContent);
        if(orderNum + 1 > memberNum){
            order.textContent = 1;
            console.log("ge");
        }else{
            order.textContent = orderNum+1;
        } 
    }else{
        alert('올바르지 않은 단어입니다.')
    }
    input.value = "";
    input.focus();
    };

    button.addEventListener("click",onClickButton);
    input.addEventListener("input",onInput);3
}




