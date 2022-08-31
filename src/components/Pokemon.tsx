import IPokemon from "../models/pokemon"
import "./pokemon.css"
import { Link } from "react-router-dom"
import { Card, CardContent, Typography } from "@mui/material"
import { Container } from "@mui/system"

const Pokemon = (props: IPokemon) => {
    return <Card className="pokemon">
        <Container className="pokemon-image">
           <img 
            height="100"
            width="100"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.sprite}.png`} 
            alt={props.name} />
        </Container>
        <CardContent>
            <Link to={`/pokemon/${props.pokemonNumber}`}>
                <Typography variant="h6">{props.name}</Typography>
            </Link>
        </CardContent>
    </Card>
}

export default Pokemon 