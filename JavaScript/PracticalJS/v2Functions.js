// It should have a function to display todos
var todos = ["item 1", "item 2", "item 3"]

function displayTodos() {
    console.log('My Todos:', todos);
}
displayTodos();


// It should have a function to add new todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
addTodo('hey there');


// It should have a function to change a todo
function changeTodo(position, newValue) {
    todos[position] = newValue;
}
changeTodo(0,'change')
todos


// It should have a function to delete a todo
function deleteTodo(position) {
    todos.splice(position, 1);
}
deleteTodo(0);






