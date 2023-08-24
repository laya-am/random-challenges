console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
 

form.addEventListener("submit", (event)=>{
    event.preventDefault();
   const formDdata= new FormData(event.target);
   const data = Object.fromEntries(formDdata);
   addToDoItem(data);
   event.target.reset();
   event.target.elements.headline.focus();
});


function addToDoItem(submittedData){
    const toDo = document.createElement("li");
    const toDoHeadline = document.createElement("h4");
    const toDoTask = document.createElement("p");

    todoList.append(toDo);
    toDo.append(toDoHeadline);
    toDo.append(toDoTask);

    toDoHeadline.textContent = submittedData.headline;
    toDoTask.textContent = submittedData.task;
}