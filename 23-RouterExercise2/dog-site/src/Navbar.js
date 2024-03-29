import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const dogLinks = this.props.dogs.map(d => (
            <li className='nav-item' key={d.name}>
                <NavLink
                    exact="true"
                    to={`/dogs/${d.name}`}
                    className='nav-link'

                >
                    {d.name}
                </NavLink>
            </li>
        ))
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/dogs'>
                    Dog App
                </Link>
                <button
                    className='navbar-toggler' type='button'
                    data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'>

                    </span>
                </button>
                <div
                    className='collapse navbar-collapse' id='navbarNav'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink
                                exact="true"
                                to='/dogs'
                                className='nav-link'
                            >
                                Home
                            </NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;