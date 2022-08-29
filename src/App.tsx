import { useEffect, useState } from 'react'
import './App.css'
import {fetchPokemons} from './api/pokeapi'
import Pokemon from './components/Pokemon'
import IPokemon from './models/pokemon'

const App = () => {
  const [pokemons, setPokemons] = useState<IPokemon[] | []>([])

  useEffect(() => {
    (async () => {
      const { results } = await fetchPokemons()
      setPokemons(results)
    })()
  }, [])

  useEffect(() => {
    const detectBottom = async () => {
      const bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (bottomOfPage) {
        const { results, next } = await fetchPokemons(20, 10)
        if (next) {
          setPokemons((prev) => {
            return [...prev, ...results]
          })
        }
      }
    }
    window.addEventListener("scroll", detectBottom)
    return () => {
      window.removeEventListener("scroll", detectBottom)
    }
  }, [])
  return (
    <main className="center">
      <div>
        <section>
          {pokemons?.map((pokemon, index) => (
            <Pokemon
              key={index}
              name={pokemon.name}
              sprite={String(index + 1)}
              pokemonNumber={index+1}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
