import React, { Component } from "react";

// Initializing State

class Game extends Component {
    constructor(props) {
        // Below is making sure we call the Component class constructor with any props our Game might have been given
        super(props);
        this.state = {
            // state goes here:
            player: 'Whiskey',
            score: 0
        }
    };

    render() {
        return (
            <div>
                <h1>Battleship</h1>
                <p>Current Player: {this.state.player}</p>
                <p>Score: {this.player.score}</p>
            </div>
        )
    }
}

export default Game;