const toDoForm = document.querySelector("#todo-form");
const toDolist = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

function panitToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    toDolist.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    panitToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);