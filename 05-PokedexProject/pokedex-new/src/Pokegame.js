import React, { Component } from "react";
import "./Pokegame.css";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };
    render() {
        let pokedex1 = [];
        let pokedex2 = [...this.props.pokemon];
        while (pokedex1.length < pokedex2.length) {
            let randIndex = Math.floor(Math.random() * pokedex2.length)
            let randPokemon = pokedex2.splice(randIndex, 1)[0]
            pokedex1.push(randPokemon)
        }
        let exp1 = pokedex1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = pokedex2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        return (
            <div>
                <h2 className="Pokegame-winner?">Hand One:</h2>
                <Pokedex pokemon={pokedex1} totalExp={exp1} isWinner={exp1 > exp2} />
                <h2 className="Pokegame-winner?">Hand Two</h2>
                <Pokedex pokemon={pokedex2} totalExp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export default Pokegame;