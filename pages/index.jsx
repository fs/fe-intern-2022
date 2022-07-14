import React, { useState, useEffect } from 'react'

export const getServerSideProps = async () => {
  const collectingPokemons = num => {
    return fetch(`${process.env.API_URL}/${num}`)
      .then(res => res.json())
      .then(data => data)
  }
  const arrayPokemons = []
  for (let i = 1; i <= 10; i++) {
    const randomNum = Math.floor(Math.random() * 900) + 1
    const data = await collectingPokemons(randomNum)
    arrayPokemons.push(data)
  }
  const arrayPokemonsMinimized = arrayPokemons.map(pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    }
  })
  return {
    props: {
      arrayPokemons,
      arrayPokemonsMinimized,
    },
  }
}

export function Poke() {
  const [value, setValue] = useState('')
  const [pokemonName, setPokemonName] = useState('')
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [pokemonName])

  return (
    <>
      <h1>Pokemons</h1>
      <div>
        <input
          placeholder="search pokemon"
          onChange={e => setValue(e.target.value)}
        ></input>
        <input
          type="submit"
          value="Отправить"
          onClick={() => setPokemonName(value)}
        />
        <ul>
          <h1>{value}</h1>
        </ul>
      </div>
    </>
  )
}

export default Poke
