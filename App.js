const todoButton = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
// const aTodos = ["test","test1"];

//event listerners

todoButton.addEventListener("click", addToDo);

//Functions

function createCheckbox() {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "todoCB";
  return checkbox;
}

function createToDoListItem() {
  let newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-listItem");
  return newTodo;
}

function addToDo(event) {
  // prevent form from submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");

  //create checkbox
  var checkbox = createCheckbox();
  //  checkbox.value = "1";
  todoDiv.appendChild(checkbox);

  // create li
  let newTodo = createToDoListItem();
  todoDiv.appendChild(newTodo);

  //event listerner for checkbox

  checkbox.addEventListener("change", function (e) {
    debugger;
    if (e.currentTarget.value) {
      newTodo.classList.add("todo-completed");
    }
  });

  //append to list
  todoList.appendChild(todoDiv);
}
