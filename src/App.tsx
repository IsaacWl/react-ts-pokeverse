import { useEffect, useState } from 'react'
import './App.css'
import { fetchPokemons } from './api/pokeapi'
import Pokemon from './components/Pokemon'
import IPokemon from './models/pokemon'

const App = () => {
  const [pokemons, setPokemons] = useState<IPokemon[] | []>([])
  const [nextUrl, setNextUrl] = useState<number>(0)
  useEffect(() => {
    (async () => {
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
        {pokemons?.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            sprite={String(index + 1)}
            pokemonNumber={index + 1}
          />
        ))}
      </section>
    </main>
  )
}

export default App
