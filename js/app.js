// Event Listeners
todoListener();

function todoListener(){
  // Check for form submission
  document.querySelector('#form').addEventListener('submit'. newTodo);
}

// Adding Todo Function
function newTodo(e){
  e.preventDefault();

  console.log('Submitted')
}