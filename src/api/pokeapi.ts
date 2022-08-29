const baseUrl = "https://pokeapi.co/api/v2/pokemon"
const fetchPokemons = async (offset?: number, limit?: number) => {
    const url = `${baseUrl}?offset=${offset}&limit=${limit}`
    try {
        const request = await fetch(url)
        const response = await request.json()
        return response
    } catch (error) {
        return console.error(error)
    }
}

const fetchPokemon = async (pokemonNumber: number) => {
    const url = `${baseUrl}/${pokemonNumber}`
    try {
        const request = await fetch(url)
        const response = await request.json()
        return response
    } catch (error) {
        return console.error(error)        
    }
}

export {
    fetchPokemons,
    fetchPokemon
}