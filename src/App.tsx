import { useEffect, useState } from 'react'
import './App.css'
import { fetchPokemons } from './api/pokeapi'
import Pokemon from './components/Pokemon'
import IPokemon from './models/pokemon'
import CircularProgress from "@mui/material/CircularProgress"

const App = () => {
  const [pokemons, setPokemons] = useState<IPokemon[] | []>([])
  const [nextUrl, setNextUrl] = useState<string|null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    const Signal = new AbortController();
    (async () => {
      setIsLoading(false)
      const { results, next } = await fetchPokemons(nextUrl, {
        signal: Signal.signal
      })
      setNextUrl(next)
      if (results) {
        setPokemons((prev) => {
          return [...prev, ...results]
        })
      }
    })()
    return () => {
      Signal.abort()
    }
  }, [page])

  useEffect(() => {
    const detectBottom = async () => {
      const bottomOfPage = window.innerHeight + window.scrollY >= (document.body.offsetHeight - 500)
      if (bottomOfPage) {
        setIsLoading(true)
        setPage((prevPage) => prevPage + 1)
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
