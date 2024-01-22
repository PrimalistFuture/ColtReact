import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
class Podracer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Podracer">
                <Message>
                    <h1>I am a podracer</h1>
                    <Link to="/">Go Back</Link>
                </Message>
            </div>
        )
    }
}
export default Podracer;