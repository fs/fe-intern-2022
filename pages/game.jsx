import Image from 'next/image'
import { useState } from 'react'

export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=100&offset=0`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)

  const { results: pokemons } = data

  const randomNum = Math.floor(Math.random() * (pokemons.length - 1))
  const randomPokemon = pokemons[randomNum]
  const resPoke = await fetch(randomPokemon.url)
  const randomPokeObj = await resPoke.json()

  return {
    props: {
      randomPokeObj,
      data,
      pokemons,
    },
  }
}

export default function Game({ pokemons }) {
  const [pokemon, setPokemon] = useState('')
  const [photo, setPhoto] = useState('')
  const randomNum = Math.floor(Math.random() * pokemons.length - 1)

  function setObj(randomNum) {
    const { name } = pokemons[randomNum]

    setPhoto(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        randomNum + 1
      }.svg`
    )

    setPokemon(name)
  }

  return (
    <div>
      <h1>Game Page</h1>
      {photo && <Image width="300px" height="300px" alt="poke" src={photo} />}
      <h2>{pokemon ? pokemon : 'Hit Generate to see Pokemon'}</h2>
      <button onClick={() => setObj(randomNum)}>Generate</button>
    </div>
  )
}
