const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value;
    //console.log(loginInput.value);
    if(username === ""){
        console.log("Please write your name");
    }else if(username.length > 15){
        console.log("your name is too long. under 15 plz");
    }
}

function onLoginSubmit(evenet){
    evenet.preventDefault();
    const username = loginInput.value;
    console.log(loginInput.value);
}

loginButton.addEventListener("click",onLoginBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);

