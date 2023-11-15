import React, { Component } from "react";
import "./Pokecard.css"
const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

class Pokecard extends Component {
    render() {
        const imgSrc = `${POKE_API}${this.props.data.id}.png`
        return (
            <div className="Pokecard">
                <h1>{this.props.data.name}</h1>
                <img src={imgSrc} alt={this.props.data.name} />
                <h4>{this.props.data.type}</h4>
                <h4>{this.props.data.base_experience}</h4>
            </div>
        )
    }
}

export default Pokecard;