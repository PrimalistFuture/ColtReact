import React, { Component } from "react";
import { Link } from "react-router-dom";

class Podracer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Podracer">
                <h1>I am a podracer</h1>
                <Link to="/">Go Back</Link>
            </div>
        )
    }
}
export default Podracer;