import React, { Component } from 'react';

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
