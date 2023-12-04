import React, { Component } from 'react';
import uuid from "uuid/v4";

// Controlled Component Form
// The handleChange is what makes React state in lock step with the form and thus a 'controlled component'
class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // runs on every keystroke event to update state
        this.setState({
            fullName: e.target.value
        })
    }
    handleSubmit(e) {
        // resets the form data
        e.preventDefault();
        this.setState({
            fullName: ''
        })
    }
    // Since the value attribut of the input is set on an element, the displayed value will always be this.state.fullName - making React state the source of truth
    // In react we need to use htmlFor rather than for.
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullname">Full Name:</label>
                <input
                    name="fullname"
                    id='fullname'
                    value={this.state.fullName}
                    onChange={this.handleChange}>
                </input>
                <button>Add!</button>
            </form>
        );
    }
}

// Multiple Input Form
// Check out the handleChange
class MultiForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // runs on every keystroke event to update state
        // determines which piece of state to update based on the name attribute of the input. 
        // Uses 'Computed Property Names' - hence the array brackets
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        // resets the form data
        e.preventDefault();
        this.setState({
            fullName: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="email"
                    placeholder='email'
                    value={this.state.email}
                    onChange={this.handleChange}>
                </input>
                <input
                    name="password"
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.handleChange}>
                </input>
                <input
                    name="username"
                    placeholder='username'
                    value={this.state.username}
                    onChange={this.handleChange}>
                </input>
                <button>Add!</button>
            </form>
        );
    }
}


// Upwards Data Flow
// See how the stateful form sends data back up to the ShoppingList state
class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            qty: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    /** Updates the state in parent ShoppingList to contain new item */
    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name: '',
            qty: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}>
                </input>
                <label htmlFor='qty'>Quanitity</label>
                <input
                    id="qty"
                    name="qty"
                    value={this.state.qty}
                    onChange={this.handleChange}>
                </input>
                <button>Add Item!</button>
            </form>
        )
    }
}
// uses uuid in state and in the return lis. Imported at the top.
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: "Milk", qty: "2 gallons", id: uuid() },
                { name: "Bread", qty: "2 loaves", id: uuid() }
            ]
        };
        this.addItem = this.addItem.bind(this);
    }
    /** Not used by the ShoppingList, but by the Form. Creates a new uuid to add to the forms data before updating state. */
    addItem(item) {
        let newItem = { ...item, id: uuid() }
        this.setState(state => ({
            items: [...state.items, newItem]
        }))
    }
    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name}:{item.qty}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem} />
            </div>
        )
    }
}

