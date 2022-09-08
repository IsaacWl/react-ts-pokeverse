import { Box, CircularProgress, Container, Paper, Typography, Zoom } from "@mui/material"
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
    return <Paper className="single-pokemon" elevation={3}>
        {!pokemon && <CircularProgress />}
        <div>
            <Typography variant="h2" color="primary">{pokemon?.name}</Typography>
        </div>
        <div>
            <img src={pokemon?.sprite} alt={pokemon?.name} />
        </div>
        <Box>
            {pokemon?.abilities?.map((ability, index) => (
                <Zoom in={true} key={index} className="ability">
                    <Typography variant="h6" mb={1}>{ability}</Typography>
                </Zoom>
            ))}
        </Box>
    </Paper>
}

export default SinglePokemon