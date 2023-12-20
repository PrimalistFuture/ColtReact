import React, { Component } from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Chips from './Chips';
import Soda from './Soda';
import Podracer from './Podracer';

class VendingMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="VendingMachine">
                <Link exact to="/chips">Chips</Link>
                <Link exact to="/soda">Soda</Link>
                <Link exact to="/podracer">Podracer</Link>
                <h1>I am a vending machine</h1>
            </div>
        )
    }
}

export default VendingMachine;