import React, { Component } from "react";

class JokeRow extends Component {
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease(e) {
        this.props.increaseRating(this.props.id);
    }

    handleDecrease(e) {
        this.props.decreaseRating(this.props.id);
    }
    render() {
        return (
            <div className="JokeRow">
                <button onClick={this.handleIncrease}>Upvote</button>
                {this.props.rating}
                <button onClick={this.handleDecrease}>Downvote</button>
                {this.props.joke}
            </div>
        )
    }
}

export default JokeRow;