import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [pokemons, setPokemon] = useState({})
  const apiEndPoint = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

  const getPokemon = async () => {
    const { data: res } = await axios.get(apiEndPoint)
    setPokemon(res)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <>
      <h1>pokemon count: {pokemons.count}</h1>
    </>
  )
}
