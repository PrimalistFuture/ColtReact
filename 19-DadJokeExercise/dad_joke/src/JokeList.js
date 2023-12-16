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
        this.increaseRating = this.increaseRating.bind(this);
        this.decreaseRating = this.decreaseRating.bind(this);
    }

    async componentDidMount() {
        let jokes = [];
        if (localStorage.getItem('joke-9') === null) {
            for (let i = 0; i < MAX_JOKES; i++) {
                while (jokes.length < MAX_JOKES) {
                    try {
                        let response = await axios.get(
                            API_URL,
                            { headers: { Accept: "application/json" } }
                        );
                        if (!jokes.includes(response.data.id)) {
                            jokes.push(
                                {
                                    number: i,
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
            }
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
                    number: i,
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

    increaseRating(id) {
        // Increases rating in state then in localstorage
        let joke = this.state.jokes.filter(joke => joke.id === id);
        console.log(joke);
        let jokeRating = joke[0].rating;
        jokeRating++;
        let updatedJokes = this.state.jokes.map(joke => {
            if (joke.id === id) {
                return {
                    ...joke, rating: jokeRating
                }
            }
            return joke;
        })
        this.setState({
            jokes: updatedJokes
        });
        let localJokeRating = parseInt(localStorage.getItem(`joke-${joke.number}-rating`));
        localJokeRating++;
        localStorage.setItem(`joke-${joke.number}-rating`, localJokeRating);
    }

    decreaseRating(id) {
        // decreases rating in state then in localstorage
        let joke = this.state.jokes.filter(joke => joke.id === id);
        let jokeRating = joke[0].rating;
        jokeRating--;
        let updatedJokes = this.state.jokes.map(joke => {
            if (joke.id === id) {
                return {
                    ...joke, rating: jokeRating
                }
            }
            return joke;
        })
        this.setState({
            jokes: updatedJokes
        });
        let localJokeRating = parseInt(localStorage.getItem(`joke-${joke.number}-rating`));
        localJokeRating--;
        localStorage.setItem(`joke-${joke.number}-rating`, localJokeRating);
    }

    render() {
        const jokes = this.state.jokes.map(joke => {
            return (
                <JokeRow key={joke.id} joke={joke.joke} rating={joke.rating} id={joke.id} increaseRating={this.increaseRating} decreaseRating={this.decreaseRating} />
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