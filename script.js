/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * practise by: Rokibul santo
 * Date: 25/10/2025
 */ 

// select all elements 

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form'); 
let todoList = document.querySelector('#items');
let completeList = document.querySelector('.complete-list ul'); 

//functions 

let creatTask = function (task){
   let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
} 


let addTask = function(event){
    event.preventDefault();
     if (newTask.value === "") {
        let demo = document.querySelector('.demo');
        demo.innerText = 'Please Enter a Task';
        demo.style.color = "red";
        demo.style.fontWeight = "bold";
        return; // stop the function here
    }

    let listItem = creatTask(newTask.value);
    todoList.appendChild(listItem);
    newTask.value = ""; 
    let demo = document.querySelector('.demo');
     demo.innerText = '';

    //bind the new list item to the incomplete list
    bindIncompleteItems(listItem, completeTask)
    
}  

let completeTask = function (){
    let listItem = this.parentNode; 
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete'; 
    listItem.appendChild(deleteBtn); 

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove(); 
    completeList.appendChild(listItem);

    // bind delete to the completed items
    bindCompleteItems (listItem, deleteTask);

} 

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}



let bindIncompleteItems = function (taskItem, checkBoxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
} 

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
} 

for(let i=0; i<todoList.children.length; i++){
    bindIncompleteItems (todoList.children[i], completeTask)
}

for(let i=0; i<completeList.children.length; i++){
    bindCompleteItems (completeList.children[i], deleteTask)
}


form.addEventListener('submit', addTask);

