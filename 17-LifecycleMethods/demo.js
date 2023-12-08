import React, { Component } from "react";
import axios from 'axios'
// ComponentDidMount()
// shows that cdm happens after the first render, but not subsequent re-renders
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({ time: new Date() });
            console.log(`I am in the cdm!`)
        }, 1000);
    }
    render() {
        return (
            <h1>Timer:{this.state.time.getSeconds()}</h1>
        )
    }
}

// Loading DATA via AJAX

class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ''
        }
    }
    componentDidMount() {
        // load data
        // set state with that data
        axios.get('some_url').then(response => {
            this.setState({ quote: response.data })
        })
    }
    render() {
        return (
            <div>
                <h1>Always remember...</h1>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}