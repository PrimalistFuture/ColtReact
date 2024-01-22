import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
class Chips extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Chips">
                <Message>
                    <h1>I am a chip</h1>
                    <Link to="/">Go Back</Link>
                </Message>
            </div>
        )
    }
}
export default Chips;