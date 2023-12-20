import React, { Component } from "react";
import { Link } from "react-router-dom";
class Soda extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Soda">
                <h1>I am a soda</h1>
                <Link to="/">Go Back</Link>
            </div>
        )
    }
}
export default Soda;