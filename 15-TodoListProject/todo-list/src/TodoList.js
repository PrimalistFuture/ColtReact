import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task: 'Make todo list', id: uuid() }
            ]
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    addTodo(todo) {
        let newTodo = { ...todo, id: uuid() };
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }))
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    editTodo(id, task) {
        let todo = this.state.todos.filter(todo => todo.id === id);
        this.removeTodo(id);
        todo.task = task;
        todo.id = uuid();
        console.log(todo);
        this.addTodo(todo);
        // this.setState(state => ({
        //     todos: [...state.todos, todo]
        // }))
    }

    render() {
        return (
            <div>
                <NewTodoForm addTodo={this.addTodo} />
                {this.state.todos.map(todo =>
                    <Todo
                        task={todo.task}
                        id={todo.id}
                        removeTodo={this.removeTodo}
                        editTodo={this.editTodo}
                    />
                )}
            </div>
        )
    }
}

export default TodoList;