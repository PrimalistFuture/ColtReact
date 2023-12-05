import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.handleEdit();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleComplete() {
        this.props.toggleCompletion(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <p
                        className={this.props.completed ? 'Completed' : ""}
                        onClick={this.handleComplete}
                    >{this.props.task}</p>
                    <button onClick={this.handleEdit}>Edit Todo</button>
                    <button onClick={this.handleRemove}>X</button>
                </div>
            )
        }
        return result;
    }
}

export default Todo;