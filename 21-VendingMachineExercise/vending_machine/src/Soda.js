import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
class Soda extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Soda">
                <Message>
                    <h1>I am a soda</h1>
                    <Link to="/">Go Back</Link>
                </Message>
            </div>
        )
    }
}
export default Soda;