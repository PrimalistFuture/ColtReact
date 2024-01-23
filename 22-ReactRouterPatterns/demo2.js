import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

// Simple Seach Form
// might go on the home page
class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ query: e.target.value })
    }
    render() {
        return (
            <div>
                <h1>Search For A Food</h1>
                <input
                    type='text'
                    placeholder='search for food'
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.query}`}>Go!</Link>
            </div>
        )
    }
}


//Redirect on problem
// if the user tried to go to a route that started with a digit, as denoted by the regex, then redirect them home
// doesnt have to be regex, could be any condition
class Food extends Component {
    render() {
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return (
            <div className='Food'>
                {/\d/.test(name) ? (
                    < Redirect to='/' />
                ) : (
                    <div>
                        <h1>I love to eat {name}</h1> <img src={url} alt={name}></img>
                    </div>
                )}
            </div>
        )
    }
}

// Redirecting using the history object
class FoodSearch2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({ query: e.target.value })
    }

    handleClick() {
        alert('Saved your food to database');
        // run some code that actually saves the food to the db
        // then redirect somewhere else
        // in order for this to work, we would have to pass in the routeProps to this component. Check demo1 for how to do that.
        // Right now, there is no history object in props
        this.props.history.push(`/food/${this.state.query}`);
    }
    render() {
        return (
            <div>
                <h1>Search For A Food</h1>
                <input
                    type='text'
                    placeholder='search for food'
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.query}`}>Go!</Link>
                <button onClick={this.handleClick}>Save New Food!</button>
            </div>
        )
    }
}

import { withRouter } from "react-router-dom";

// withRouter
// if our navbar component relied on the history object, but was not given the history object by the parent component (which it generally would not because the navbar exists outside of react-router), this would not work.
// so we pass it into withRouter in the export statement.

// Back button
// also makes use of the history object.
// there is also a goForward method.
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }
    handleLogin() {
        alert(`Logged you in`);
        this.props.history.push(`/food/salmon`)
    }

    handleBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogin}>Log in</button>
                <button onClick={this.handleBack}>Go back</button>
            </div>
        );
    }
}

export default withRouter(Navbar);



