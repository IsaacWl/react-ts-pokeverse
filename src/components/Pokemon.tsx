import IPokemon from "../models/pokemon"
import "./pokemon.css"
import { Link } from "react-router-dom"

const Pokemon = (props: IPokemon) => {
    return <div className="pokemon">
        <div className="pokemon-image">
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.sprite}.png`} 
            alt={props.name} />
        </div>
        <div>
            <Link to={`/pokemon/${props.pokemonNumber}`}>
                <h2>{props.name}</h2>
            </Link>
        </div>
    </div>
}

export default Pokemon 