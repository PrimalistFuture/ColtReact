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