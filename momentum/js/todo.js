const toDoForm = document.querySelector("#todo-form");
const toDolist = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "toods";

let todos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(){
    const target = this.parentElement;
    //const target = event.target.parentElement; 로 해도 위와 동일 -> event 파라미터 필요
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
    todos.push(newTodo);
    panitToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const getSavedToDos = localStorage.getItem(TODOS_KEY);
if(saveToDos !== null){
    const parsedToDos = JSON.parse(getSavedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(panitToDo);
}