import React, { Component } from 'react';

// Quick example of an event handler in this case onMouseEnter
class WiseSquare extends Component {
    dispenseWisdom() {
        let messages = ['do or do not, there is not try', 'I am a muppet'];
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }
    render() {
        return (
            <div
                className='WiseSquare'
                onMouseEnter={this.dispenseWisdom}>
            </div>
        )
    }
}

// Method Binding
// inline
<div className='WiseSquare' onMouseEnter={this.dispenseWisdom.bind(this)}></div>

// inline arrow
<div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom()}></div>

// in the constructor
class WiseSquareBind extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }
}

// experimental binding with arrow function
// something about this binds the this context correctly. It is very commonly done for react methods.
dispenseWisdomExperimental = () => {
    console.log('this is', this);
    // whatever you want goes here.
}


// Method Binding with Arguments
// check out the inline bind very closely.
// alternative way is done below onMouseEnter
class ButtonList extends Component {
    static defaultProps = {
        colors: ['pink', 'red', 'yellow', 'orange'];
    }
    constructor(props) {
        super(props);
        this.state = {
            color: 'cyan'
        };
    }
    changeColor(newColor) {
        this.setState({ color: newColor })
    }
    render() {
        return (
            <div
                className='ButtonList'
                style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map(color => {
                    const colorObj = { backgroundColor: color };
                    return (
                        <button
                            style={colorObj}
                            onClick={this.changeColor.bind(this, color)}
                            onMouseEnter={() => this.changeColor(color)}>
                            Click Me!
                        </button>
                    );
                })}
            </div>
        )
    }
}

// Passing down functions to child components

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [1, 2, 3, 4, 5]
        };
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    }

    render() {
        // The issue with this way is we are making and binding the remove function however many times there are numbers. Not a huge deal, but probably better not to.
        let nums = this.state.nums.map(n => <NumberItem value={n} remove={() => this.remove(n)} />);
        return (
            <div>
                <h1>First Number List</h1>
                <ul>{nums}</ul>
            </div>
        )
    }
}

class NumberItem extends Component {
    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.props.remove}>X</button>
            </li>
        );
    }
}

class BetterNumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [1, 2, 3, 4, 5]
        };
        // now remove is bound in the constructor
        this.remove = this.remove.bind(this);
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    }

    render() {
        let nums = this.state.nums.map(n =>
            <BetterNumberItem value={n} remove={this.remove} />
        );
        return (
            <div>
                <h1>First Number List</h1>
                <ul>{nums}</ul>
            </div>
        )
    }
}

class BetterNumberItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    // we can't just give it this.props.remove, we need a way to handle the event. Doing it this way also loses 'this' context, so we need a constructor to bind this.
    handleRemove(e) {
        this.props.remove(this.props.value);
    }
    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.handleRemove}>X</button>
            </li>
        );
    }
}