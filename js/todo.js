const todoForm = document.getElementById("todo-form");
const txtTodo = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let todos = [];

function saveStorage() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(event) {
    const parents = event.target.parentElement;
    parents.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(parents.id));
    saveStorage();
}

function addToDoList(todoValue) {
    const li = document.createElement("li");
    li.id = todoValue.id;
    const span = document.createElement("span");
    span.innerText = todoValue.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const todoValue = txtTodo.value;
    txtTodo.value = "";

    const newToDoObj = {
        "id": Date.now(),
        "text": todoValue,
    };

    todos.push(newToDoObj);
    addToDoList(newToDoObj);
    saveStorage();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(addToDoList);
}