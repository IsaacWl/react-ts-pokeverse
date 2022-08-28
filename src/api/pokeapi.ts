const fetchPokemons = async (offset?: number, limit?: number) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    try {
        const request = await fetch(url)
        const response = await request.json()
        return response
    } catch (error) {
        return console.error(error)
    }
}

export default fetchPokemons