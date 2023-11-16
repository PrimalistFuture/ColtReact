import React, { Component } from "react";
import "./Pokegame.css";
import { choice, remove } from "./helpers";
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
        let pokedex2 = [];
        for (let i = 0; i < 4; i++) {
            let poke = choice(this.props.pokemon);
            remove(this.props.pokemon, poke);
            pokedex1.push(poke);
        }
        this.props.pokemon.map(poke => pokedex2.push(poke));
        return (
            <div>
                {/* NOW i NEED A WAY TO CALCULATING THE EXP FROM EACH POKEDEX AND DETERMINING WHICH IS HIGHER. THEN I WILL DYNAMICALLY CHANGE THE CLASSNAME OF THESE H2 */}
                <h2 className="Pokegame-winner?">Hand One:</h2>
                <Pokedex pokemon={pokedex1} />
                <h2 className="Pokegame-winner?">Hand Two</h2>
                <Pokedex pokemon={pokedex2} />
            </div>
        )
    }
}

export default Pokegame;