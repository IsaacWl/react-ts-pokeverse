import { useEffect, useState } from 'react'
import './App.css'
import { fetchPokemons } from './api/pokeapi'
import Pokemon from './components/Pokemon'
import IPokemon from './models/pokemon'
import CircularProgress from "@mui/material/CircularProgress"

const App = () => {
  const [pokemons, setPokemons] = useState<IPokemon[] | []>([])
  const [nextUrl, setNextUrl] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      setIsLoading(false)
      const { results } = await fetchPokemons(nextUrl)
      setPokemons((prev) => {
        return [...prev, ...results]
      })
    })()
  }, [nextUrl])

  useEffect(() => {
    const detectBottom = async () => {
      const bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (bottomOfPage) {
        setIsLoading(true)
        setNextUrl((prev) => prev + 10)
      }
    }
    window.addEventListener("scroll", detectBottom)
    return () => {
      window.removeEventListener("scroll", detectBottom)
    }
  }, [])

  return (
    <main className="center">
      <section className="pokemons-container">
        {pokemons?.length <= 0 && <CircularProgress />}
        {pokemons?.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            sprite={String(index + 1)}
            pokemonNumber={index + 1}
          />
        ))}
        {isLoading && <CircularProgress />}
      </section>
    </main>
  )
}

export default App
