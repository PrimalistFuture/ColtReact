import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task: 'Make todo list', id: uuid(), completed: false }
            ]
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    addTodo(todo) {
        let newTodo = { ...todo, id: uuid(), completed: false };
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }))
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTodo(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, task: updatedTask
                }
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        return (
            <div>
                <NewTodoForm addTodo={this.addTodo} />
                {this.state.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        removeTodo={this.removeTodo}
                        updateTodo={this.updateTodo}
                        toggleCompletion={this.toggleCompletion}
                    />
                )}
            </div>
        )
    }
}

export default TodoList;