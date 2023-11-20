import React, { Component } from "react";

class Rand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({ number: rand })
    }
    render() {
        return (
            <div>
                <h1>Random Number Generator</h1>
                <h2>Number is: {this.state.number}</h2>
                {/* {this.state.number === 7 || <button onClick={this.handleClick}>Click Me!</button>}
                {this.state.number === 7 && <h2>You Win!</h2>} */}
                {this.state.number === 7
                    ? <h2>YOU WIN!</h2>
                    : <button onClick={this.handleClick}>Click Me!</button>
                }
            </div>
        )
    }
}

export default Rand;