import React, { Component } from "react";

// Updating existing state with callback pattern
this.setState(curState => ({ count: curState.count + 1 }));

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    singleKill() {
        // Updating Existing State like below works, but is not a good idea generally speaking - see below for why
        this.setState({ score: this.state.score + 1 });
    }
    tripleKill() {
        // Updating existing state like below won't work, because only the last one will trigger correctly.
        // this.setState({ score: this.state.score + 1 });
        // this.setState({ score: this.state.score + 1 });
        // this.setState({ score: this.state.score + 1 });

        // With the callback pattern
        // this.setState(st => {
        //     return { score: st.score + 1 }
        // });
        // this.setState(st => {
        //     return { score: st.score + 1 }
        // });
        // this.setState(st => {
        //     return { score: st.score + 1 }
        // });

        // with functional setState pattern
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

    incrementScore(curState) {
        return { score: curState.score + 1 }
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill!</button>
            </div>
        )
    }
}

export default ScoreKeeper;

// Mutating State the safe way

function completeTodo(id) {

    // Array.prototype.map returns a new array
    const newTodos = this.state.todos.map((todo) => {
        if (todo.id === id) {
            // make a copy of the todo object with done: true
            // the spread operator copys the codo into a new object, then we set done = true
            return { ...todo, done: true };
        }
        return todo;     //old todos can pass through
    });

    this.setState({
        todos: newTodos  // setState to the new array
    });
}

function addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    this.setState({ icons: [...this.state.icons, newIcon] });
}