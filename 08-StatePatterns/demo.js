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

// Designing State

// Minimizing State

this.state = {
    firstName: 'Matt',  // doesn't change, should not be state
    lastName: 'Lane',   // doesn't change, should not be state
    birthday: '1955-01-08', // doesn't change, should not be state
    age: 64,    // does change, but can be derived from birthday, so should    not be its own state
    mood: 'irate', // does change, should be state
}

// Downward Data Flow

// This way, the TodoList component contains all of the state, which are then passed down to the Todo components as props
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task: 'check email', done: false, id: 1 },
                { task: 'make haircut appointment', done: false, id: 2 }
            ]
        }
    }
    // whatever else...
    render() {
        return (
            <ul>
                {this.state.todos.map(todo => <Todo {...todo} />)}
            </ul>
        )
    }
}


// Quick example combining previous topics
class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array.from({ length: this.props.numBalls })
        }
        this.handleClick = this.handleClick.bind(this);
    }
    generate() {
        // there are other ways to setState, but this is the safest way. "The Callback Method" We don't want to mutate the numbers state directly, we want to build an entirely new array and set that equal to the numbers state. 
        this.setState(curState => ({
            numbers: curState.numbers.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }))
    }
    handleClick(e) {
        this.generate();
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="Lottery">
                    {this.state.numbers.map(n => <LottoBall number={n} />)}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

class LottoBall extends Component {
    render() {
        return (
            <div className='LottoBall'>
                {this.props.number}
            </div>
        )
    }
}