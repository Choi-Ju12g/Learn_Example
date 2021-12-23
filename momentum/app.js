const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(evenet){
    evenet.preventDefault();
    const username = loginInput.value;
    console.log(loginInput.value);
}

function handleLinkClikc(){
    alert("clicked!");
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClikc);