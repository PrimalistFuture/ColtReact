import React, { Component, useState, useEffect } from "react";
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

// Simple form with React Hooks
// same issue as above, where each input would need its own handleChange-like function
function SimpleFormHooks() {
    const [email, setEmail] = useState('');
    const handleChange = () => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h1>The value is...{email}</h1>
            <input type="text" value={email} onChange={handleChange}></input>
            <buttion onClick={() => setEmail('')}>Submit</buttion>
        </div>
    )
}

// common pieces for simplifiying forms
function useInputState(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue('');
    }
    return [value, handleChange, reset]
}
// export default useInputState;


// now it scales because each input could make use of useInputState
function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = useInputState('email');
    const [password, updatePassword, resetPassword] = useInputState('email');
    return (
        <div>
            <h1>Email is...{email} & Password is {password}</h1>
            <input type="text" value={email} onChange={updateEmail}></input>
            <input type="text" value={password} onChange={updatePassword}></input>
            <buttion onClick={resetEmail}>Reset Email</buttion>
            <buttion onClick={resetPassword}>Reset Password</buttion>
        </div>
    )
}

// useEffect
function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    return (
        <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    )
}

// useEffect with API
// useEffect will only run when number is changes
import axios from "axios";
function SWMovies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState('');
    const url = `https://swampi.co/api/films/${number}/`

    useEffect(() => {
        async function getData() {
            const response = await axios.get(url);
            setMovie(response.data);
        }
        getData();
    }, [number]);

    return (
        <div>
            <h1>Pick a Movie</h1>
            <h4>{movie.title}</h4>
            <p>{movie.opening_crawl}</p>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
            </select>
        </div>
    )
}