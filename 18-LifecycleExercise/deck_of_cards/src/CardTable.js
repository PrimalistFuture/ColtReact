import React, { Component } from "react";
import axios from 'axios';
import Card from './Card';
import './CardTable.css';
const API_BASE_URL = `https://deckofcardsapi.com/api/deck`;

class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawn: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        let response = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({
            deck: response.data
        })
    }

    async handleClick(e) {
        let deckID = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${deckID}/draw/`;
            let response = await axios.get(cardUrl);
            if (!response.data.success) {
                throw new Error(`No cards Remaining`)
            }
            let card = response.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (error) {
            alert(error);
        }

    }

    render() {
        const cards = this.state.drawn.map(c => {
            return <Card key={c.id} name={c.name} image={c.image} />
        });
        return (
            <div className="CardTable">
                <h1 className="CardTable-title">Card Dealer</h1>
                <button className='CardTable-btn' onClick={this.handleClick}>Draw a card!</button>
                <div className="CardTable-cardarea">
                    {cards}
                </div>
            </div>
        )
    }
}

export default CardTable;