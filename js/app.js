// Declare todoList Variable
const todoList = document.querySelector('#todo-list');

// Event Listeners
todoListener();

function todoListener(){
  // Check for form submission
  document.querySelector('#form').addEventListener('submit', newTodo);

  // Remove todo from the list
  todoList.addEventListener('click', removeTodo);

  // Adding LocalStorage Item to DOM
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

// Adding Todo Function
function newTodo(e){
  e.preventDefault();

  // Read input content value
  const todo = document.getElementById('todo').value;
  
  // Create Remove todo button
  const removeTodo = document.createElement('a');
  removeTodo.classList = 'remove-todo';
  removeTodo.textContent = 'X';
  
  // Create list item element <li>
  const li = document.createElement('li');
  li.textContent = todo;
  li.classList = 'todolist';
  li.style.listStyleType = 'none';
  
  // Add remove button to each todo
  li.appendChild(removeTodo); 
  
  // Add to the list
  todoList.appendChild(li);

  // Add todo to localStorage
  addTodoTOLocalStorage(todo);
  
  // New todo added alert
  alert('Todo Item Added');

  // Reset form
  this.reset();
  
  console.log(todo)
}

// Remove Todo from the DOM
function removeTodo(e) {
  if(e.target.classList.contains('remove-todo')) {
    e.target.parentElement.remove();
  } else {
    console.log('not removed')
  }

  // Remove todo from localStorage
  removeTodoFromLocalStorage(e.target.parentElement.textContent);
}

// Add Todo to LocalStorage
function addTodoTOLocalStorage(todo) {
  let todos = getTodoFromLocalStorage(); 

  // Add todo into the array
  todos.push(todo);

  // convert todo array into string
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Get Todos from the localStorage
function getTodoFromLocalStorage() {
  let todos;
  const todoLS = localStorage.getItem('todos');

  // Get the todo values, if null, return empty array
  if(todoLS === null) {
    todos = [];
  } else {
    todos = JSON.parse(todoLS);
  }

  return todos;
}

// Adds Local Storage content to DOM on load
function localStorageOnLoad() {
  let todos = getTodoFromLocalStorage();

  // Loop through localStorage and add value to page
  todos.forEach(function(todo) {
    // Create Remove todo button
    const removeTodo = document.createElement('a');
    removeTodo.classList = 'remove-todo';
    removeTodo.textContent = 'X';
    
    // Create list item element <li>
    const li = document.createElement('li');
    li.textContent = todo;
    li.classList = 'todolist';
    li.style.listStyleType = 'none';
    
    // Add remove button to each todo
    li.appendChild(removeTodo); 
    
    // Add to the list
    todoList.appendChild(li);
  })
}

// Remove todo from localStorage
function removeTodoFromLocalStorage(todo){
  // Get todos from localStorage
  let todos = getTodoFromLocalStorage();
  
  // Remove the X from the todo 
  const removeX = todo.substring(0, todo.length - 1);

  // Loof through and remove the selected todo
  todos.forEach(function(todoItem, index) {
    if(removeX === todoItem) {
      todos.splice(index, 1)
    }
  })

  // Update the localStorage 
  localStorage.setItem('todos', JSON.stringify(todos));

  // Todo item deleted alert
  alert('Item Deleted')
}