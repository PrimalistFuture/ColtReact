import React, { Component, useState } from "react";
// class based component
class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>The Count is: </h1>
                <button onClick={this.increment}>Add 1</button>
            </div>
        )
    }
}

// export default CounterClass;

// functional component with Hooks
function CounterHooks() {
    // useState is a function that initializes our state, and returns to us first a variable to access the state, and second a function to change the state.
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>The Count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
    )
}

// multiple pieces of state
function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [isHeartbroken, setIsHeartbroken] = useState(true);
    // these togglers work great, but they are a little clunky because of how redundant they are.
    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    };
    const toggleIsHeartbroken = () => {
        setIsHeartbroken(!isHeartbroken);
    };

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
            <h1 onClick={toggleIsHeartbroken}>
                {isHeartbroken ? "</3>" : "<3"}
            </h1>
        </div>
    )
}
// this function, which usually lives in another file, is a generic way to toggle various pieces of state. That way, we don't need custom toggler function for each piece of state as we use above.
function useToggle(initialVal = false) {
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    }
    return [state, toggle];
}

// export default useToggle;

// with our useToggle, Toggler would look much cleaner. We could have 20 pieces of state and it would now be very simple.
function ToggleWithUseToggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "</3>" : "<3"}</h1>
        </div>
    )
}