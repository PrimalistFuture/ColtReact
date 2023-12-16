import React, { Component } from "react";
import axios from 'axios';
import JokeRow from "./JokeRow";

const API_URL = `https://icanhazdadjoke.com/`;
const MAX_JOKES = 10;

class JokeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            isLoaded: false,
        }
    }

    async componentDidMount() {
        let jokes = [];
        if (localStorage.getItem('joke-9') === null) {
            while (jokes.length < MAX_JOKES) {
                try {
                    let response = await axios.get(
                        API_URL,
                        { headers: { Accept: "application/json" } }
                    );
                    if (!jokes.includes(response.data.id)) {
                        jokes.push(
                            {
                                id: response.data.id,
                                joke: response.data.joke,
                                rating: 0,
                            }
                        )
                    };
                } catch (error) {
                    alert(error);
                }
            }
            this.setState({
                jokes: jokes,
                isLoaded: true
            });
            this.addToLocalStorage();
        } else {
            this.retrieveFromLocalStorage();
            this.setState({
                isLoaded: true,
            })
        }
    }

    addToLocalStorage() {
        for (let i = 0; i < this.state.jokes.length; i++) {
            localStorage.setItem(`joke-${i}`, this.state.jokes[i].joke);
            localStorage.setItem(`joke-${i}-rating`, 0);
            localStorage.setItem(`joke-${i}-id`, this.state.jokes[i].id)
        }
    }

    retrieveFromLocalStorage() {
        let jokes = [];
        for (let i = 0; i < MAX_JOKES; i++) {
            let joke = localStorage.getItem(`joke-${i}`);
            let rating = localStorage.getItem(`joke-${i}-rating`);
            let id = localStorage.getItem(`joke-${i}-id`)
            jokes.push(
                {
                    id: id,
                    joke: joke,
                    rating: rating
                }
            )
        };
        this.setState({
            jokes: jokes
        })
    }

    render() {
        const jokes = this.state.jokes.map(joke => {
            return (
                <JokeRow key={joke.id} joke={joke.joke} rating={joke.rating} id={joke.id} />
            )
        });
        return (
            <div>
                {jokes}
            </div>
        )
    }
}

export default JokeList;