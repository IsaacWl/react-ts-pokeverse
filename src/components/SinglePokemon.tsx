import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchPokemon } from "../api/pokeapi"
import IPokemon from "../models/pokemon"
import "./singlePokemon.css"

const SinglePokemon = () => {
    const { pokemonNumber } = useParams()
    const [ pokemon, setPokemon ] = useState<IPokemon|null>(null)
    useEffect(() => {
        (async () => {
            const pokemonId = Number(pokemonNumber)
            const { name , sprites: { front_default }, abilities } = await fetchPokemon(pokemonId)
            type Abilities = {
                ability: {
                    name: string
                }
            } 
            const getAbilities = abilities?.map(( ability: Abilities ) => {
                const { name } = ability.ability
                return name
            }) 
            setPokemon({
                name: name,
                sprite: front_default,
                abilities: getAbilities
            })
        })()

    }, [])
    return <article className="single-pokemon">
        {!pokemon && <div>loading..</div>}
        <div>
            <h1>{pokemon?.name}</h1>
        </div>
        <div>
            <img src={pokemon?.sprite} alt={pokemon?.name} />
        </div>
        <div>
            {pokemon?.abilities?.map((ability, index) => (
                <div key={index} className="ability">
                    <h6>{ability}</h6>
                </div>
            ))}
        </div>
    </article>
}

export default SinglePokemon