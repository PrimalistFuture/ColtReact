import React, { Component } from "react";
import axios from 'axios'
import Card from './Card';
class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckID: '',
            cardsRemaining: 0,
            cardImg: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        const url = `https://deckofcardsapi.com/api/deck/new/shuffle/`;
        let response = await axios.get(url);
        let deckID = response.data.deck_id;
        let cardsRemaining = response.data.remaining;
        this.setState({
            deckID: deckID,
            cardsRemaining: cardsRemaining
        })
    }

    async handleClick(e) {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/`
        let response = await axios.get(url);
        let cardImg = response.data.cards[0].image;
        let cardsRemaining = response.data.remaining;
        this.setState({
            cardsRemaining: cardsRemaining,
            cardImg: cardImg
        })
    }

    render() {
        return (
            <div>
                {this.state.cardsRemaining ? <button onClick={this.handleClick}>Draw a card!</button> : ''}
                <h1><Card image={this.state.cardImg} /></h1>
            </div>
        )
    }
}

export default CardTable;