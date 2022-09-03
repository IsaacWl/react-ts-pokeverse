const baseUrl = "https://pokeapi.co/api/v2/pokemon"
const fetchPokemons = async (nextUrl: string | null, options?: {}) => {
    let url = `${baseUrl}?offset=0&limit=10`
    if (nextUrl) {
        url = nextUrl
    }
    try {
        const request = await fetch(url, options)
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