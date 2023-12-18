import React, { Component } from "react";
import axios from 'axios';
import './ColtJokeList.css';
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

const API_URL = `https://icanhazdadjoke.com/`;

class ColtJokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || "[]"),
            loading: false,
        };
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getJokes();
        }
    }

    async getJokes() {
        try {
            let jokes = [];
            while (jokes.length < this.props.numJokesToGet) {
                let res = await axios.get(API_URL, {
                    headers: { Accept: "application/json" }
                });
                if (!this.seenJokes.has(res.data.joke)) {
                    jokes.push(
                        {
                            id: uuid(),
                            text: res.data.joke,
                            votes: 0,
                        }
                    );
                }
            }
            this.setState(st => ({
                jokes: [...st.jokes, ...jokes],
                loading: false
            }),
                () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));

            window.localStorage.setItem("jokes", JSON.stringify(jokes));
        } catch (e) {
            alert(e);
            this.setState({ loading: false })
        }
    }

    handleVote(id, delta) {
        this.setState(
            st => ({
                jokes: st.jokes.map(j =>
                    j.id === id ? { ...j, votes: j.votes + delta } : j
                )
            }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );
    }

    handleClick() {
        this.setState({
            loading: true
        }, this.getJokes);
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="ColtJokeList-spinner">
                    <i className="far fa-8x fa-laugh fa-spin" />
                    <h1 className="ColtJokeList-title">Loading...</h1>
                </div>
            );
        }
        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
        return (
            <div className="ColtJokeList">
                <div className="ColtJokeList-sidebar">
                    <h1 className="ColtJokeList-title">
                        <span>Dad</span> Jokes
                    </h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="crying laughing face" />
                    <button className="ColtJokeList-getmore" onClick={this.handleClick}>Fetch Jokes</button>
                </div>

                <div className="ColtJokeList-jokes">
                    {jokes.map(j => (
                        <Joke
                            key={j.id}
                            votes={j.votes}
                            text={j.text}
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default ColtJokeList;