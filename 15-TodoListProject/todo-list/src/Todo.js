import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.editedTask = this.editedTask.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleEdit() {
        this.setState({
            isEditing: true,
        })
    }

    editedTask(e) {
        let task = e.target.value
        this.props.editTodo(this.props.id, task);
        this.setState({
            isEditing: false,
        })
    }
    render() {
        return (
            <div>
                <p>{this.props.task}</p>
                <button onClick={this.handleEdit}>Edit Todo</button>
                {this.state.isEditing && <input
                    type="text"
                    name="edit-done"
                    placeholder="Edit Todo"
                    id="edit-done"

                />}
                {this.state.isEditing && <button id="edit-done" onClick={this.editedTask}>Done Editing</button>}
                <button onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}

export default Todo;