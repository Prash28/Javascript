let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

// localStorage.setItem("Name","Prashanth");
// localStorage.setItem("Car","BMW");
// let names = localStorage.getItem("Name");
// console.log(names);
// localStorage.clear();

// let saveButton = document.getElementById("saveButton");
// let textAreaElement = document.getElementById("message");

// if(localStorage.getItem("uservalue")){
//     textAreaElement.textContent = localStorage.getItem("uservalue");
// }
// else{
//     textAreaElement.textContent = "";
// }

// saveButton.onclick = function() {
//     let userEnteredText = textAreaElement.value;
//     localStorage.uservalue = userEnteredText;
//     console.log(userEnteredText);
// }

// sessionStorage.clear();

todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

// addTodoButton.onclick = function(){
//     onAddTodo();
// }

saveTodoButton.onclick = function(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

function getTodoListFromLocalStorage(){
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if(parsedTodoList === null){
        return [];
    }
    else{
        return parsedTodoList;
    }
}

addTodoButton.onclick=function(){
    onAddTodo();
}

function onAddTodo(){
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if(userInputValue == ""){
        alert("Enter valid Text");
    }
    else{
        todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
        isChecked: false
    }

    createAndAppendTodo(newTodo);
    userInputElement.value = "";

    todoList.push(newTodo);
    }
};

function onTodoStatusChange(checkboxId, labelId, todoId){
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
    checkboxElement.classList.toggle("checked");
    let statusChangedTodoItemIndex = todoList.findIndex(function(eachTodo){
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if(eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });
    let todoObject = todoList[statusChangedTodoItemIndex];
    if(todoObject.isChecked === true){
        todoObject.isChecked = false;
    }
    else{
        todoObject.isChecked = true;
    }
}

function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
    let deletedTodoItemIndex = todoList.findIndex(function(eachTodo){
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if(eachTodoId === todoId){
            return true;
        }
        else{
            return false;
        }
    });
    console.log(deletedTodoItemIndex);
    todoList.splice(deletedTodoItemIndex,1);
}

function createAndAppendTodo(todo){
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let isStriked = todo.isChecked;

    let todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("todo-element-container","d-flex","flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.checked = todo.isChecked;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId, labelId, todoId);
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex","flex-row","label-container");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.id = labelId;
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("checkbox-label");
    if(isStriked === true){
        labelElement.classList.add("checked");
    }
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa","fa-trash-o","delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    }
}

for (let todo of todoList){
    createAndAppendTodo(todo);
}



