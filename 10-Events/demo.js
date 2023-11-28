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