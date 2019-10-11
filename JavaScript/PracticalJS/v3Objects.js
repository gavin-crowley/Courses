// It should store the todos array on an object
var todoList = {
    todos: ["item 1", "item 2", "item 3"]
};

// It should have a displayTodos method
var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    }
};
todoList.displayTodos();

// It should have an addTodo method
var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    }
};
todoList.addTodo('added item');



// It should have a changeTodo method
var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    }
};
todoList.changeTodo(1,'changed item');


// It should have a deleteTodo method
var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
todoList.deleteTodo(0);

