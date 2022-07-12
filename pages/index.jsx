// const getRandomNum = (min, max) => {
//   let rand = min - 0.5 + Math.random() * (max - min + 1)
//   return Math.round(rand)
// }

import { useState } from 'react'

export const getServerSideProps = async () => {
  const url = `${process.env.API_URL}?limit=100&offset=0}`
  const res = await fetch(url)
  const pokes = await res.json()

  return {
    props: {
      pokes,
    },
  }
}

function Poke({ pokes }) {
  // const [randomPokemon, setRandomPokemon] = useState('')
  const [randomPoke, setRandomPoke] = useState('Pokemon')
  let pokeAll = Object.entries(pokes)
  let pokeInfo = []
  pokeAll[3][1].map(names => pokeInfo.push(names))

  let pokeNames = pokeInfo.map(a => a.name)

  const randomNum = Math.floor(Math.random() * pokeNames.length)

  // Finding api url of generated Pokemon
  const pokeObj = randomPoke
    ? pokes['results'].find(item => item.name === randomPoke)
    : ''
  console.log(pokeObj['url'])

  return (
    <>
      <h1>Poke Names</h1>
      <h1>{randomPoke}</h1>
      <button onClick={() => setRandomPoke(pokeNames[randomNum])}>
        generate pokemon
      </button>
      <ul>
        {pokeNames.map(pokeName => (
          <li key={pokeName.id}>{pokeName}</li>
        ))}
      </ul>
    </>
  )
}

export default Poke
