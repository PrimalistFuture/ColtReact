// import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Food.css";

// URL Params
// might have a component like this
class Food extends Component {
    render() {
        const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return (
            <div className="Food">
                <h1>I love to eat {this.props.name}</h1>
                <img src={url} alt={this.props.name} />
            </div>
        );
    }
}

// and in our App Component
// one way to extract the data from the url params is this
class App extends Component {
    render() {
        return (
            <div className="App">
                <Route
                    exact
                    path="/food/:name"
                    render={routeProps => <Food name={routeProps.match.params.name} />}
                />
            </div>
        )
    }
}

// and another is this
// this way would require a small rewrite in the Food component accessing the name
// the benefit is now we have all of the information from routeProps that we might need, like history, match and location

<Route
    exact
    path="/food/:name"
    render={routeProps => <Food {...routeProps} />}
/>

{/* // Working with multiple Route Params
    // doesn't have to be done with the component render shorthand
    // could be done same as above 
    We would then have access to both foodName and drinkName in the Meal component match.params.foodName*/}
<div>
    <Route
        exact
        path="/food/:foodName/drink/:drinkName"
        component={Meal}
    />

    {/* // including a 404
// use the Switch part of react-router-dom to ensure only one Route Matches */}
    <Route exact render={() => <h1>ERROR NOT FOUND</h1> >} />
</div>
