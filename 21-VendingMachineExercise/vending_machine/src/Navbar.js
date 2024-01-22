import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink exact activeClassName="Navbar-active" to="/">
                    Home
                </NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/chips">
                    Chips
                </NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/soda">
                    Soda
                </NavLink>
                <NavLink exact activeClassName="Navbar-active" to="/podracer">
                    Podracer
                </NavLink>
            </div>
        )
    }
}

export default Navbar;