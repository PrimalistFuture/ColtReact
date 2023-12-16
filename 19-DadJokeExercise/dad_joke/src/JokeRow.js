import React, { Component } from "react";

class JokeRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.joke}</div>
        )
    }
}

export default JokeRow;