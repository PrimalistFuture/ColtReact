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
// animated loader
class ZenQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            isLoaded: false,
        }
    }
    componentDidMount() {
        // load data
        // set state with that data, including isLoaded
        axios.get('some_url').then(response => {
            this.setState({ quote: response.data, isLoaded: true })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        // doesn't make a lot of sense for this component...
    }

    componentWillUnmount() {
        // clean stuff up
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ?
                    <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                    :
                    <div className="loader" />
                }
            </div>
        )
    }
}


// loading data with async functions
class GitHubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            name: '',
            isLoaded: false
        }
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({
            imgUrl: data.avatar_url,
            name: data.name,
            isLoaded: true
        })
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ?
                    <div>
                        <h1>User: {this.state.name}</h1>
                        <img src={this.state.imgUrl} />
                    </div>
                    :
                    <div className="Loading" />
                }
            </div>
        )
    }
}