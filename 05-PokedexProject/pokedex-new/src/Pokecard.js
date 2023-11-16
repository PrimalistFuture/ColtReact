import React, { Component } from "react";
import "./Pokecard.css"
import { threeDigits } from "./helpers";
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

class Pokecard extends Component {
    render() {
        const id = threeDigits(this.props.id);
        const imgSrc = `${POKE_API}${id}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;