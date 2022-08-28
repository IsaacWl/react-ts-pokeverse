import IPokemon from "../models/pokemon"
import "./pokemon.css"

const Pokemon = (props: IPokemon) => {
    return <div className="pokemon">
        <div>
            <a href="">
                <h2>{props.name}</h2>
            </a>
        </div>
        <div>
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.sprite}.png`} 
            alt={props.name} />
        </div>
    </div>
}

export default Pokemon 