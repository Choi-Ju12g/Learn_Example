const toDoForm = document.querySelector("#todo-form");
const toDolist = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

function deleteTodo(){
    const target = this.parentElement;
    target.remove();
}

function panitToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo;
    button.innerText = "❌";

    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);

    toDolist.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    panitToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);