// todoList.addTodo should add objects

var todoList = {
    todos: [],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
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
todoList.addTodo('this is an object')
// console.log(todoList.todos[0].todoText)

// todoList.changeTodo should change the todoText property

var todoList = {
    todos: [],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        // this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

todoList.addTodo('this is an object');
todoList.changeTodo(0, 'changed');



// todoList.toggleCompleted should flip the completed property

var todoList = {
    todos: [],
    displayTodos: function(){
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        // this.todos[position] = newValue;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

todoList.addTodo('boolean testing');
todoList.toggleCompleted(0);






