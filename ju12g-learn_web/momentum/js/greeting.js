const loginPage = document.querySelector("#login-page") //modal
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); //name
const loginButton = document.querySelector(".login-btn");

const USERNAME_KEY = "username";
console.log(loginInput);
function onLoginSubmit(event){
    event.preventDefault();
    loginPage.style.display = "none";
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName);

}

function paintGreetings(username){
    if(userName ===''){
        greeting.innerText = `???'s ToDo-List`;
    }else{
        greeting.innerText = `${username}' ToDo-List`;
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginPage.addEventListener("submit",onLoginSubmit);
}else{
    loginPage.style.display = "none";
    paintGreetings(savedUsername);
}

loginButton.addEventListener("click",onLoginSubmit);