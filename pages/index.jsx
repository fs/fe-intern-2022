import Image from 'next/image'
import PokemonCard from 'components/PokemonCard'

export const getServerSideProps = async () => {
  const promises = [...Array(10).keys()].map(async () => {
    const num = Math.floor(Math.random() * 900) + 1
    return fetch(`${process.env.API_URL}/${num}`).then(response =>
      response.json()
    )
  })

  const results = await Promise.allSettled(promises)

  const sucessValues = results.reduce((acc, item) => {
    if (item.value) {
      acc.push(item.value)
    }
    return acc
  }, [])

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

  const arrayPokemonsMinimized = sucessValues.map(
    ({ id, name, sprites, types }) => {
      return {
        id,
        name,
        img: sprites?.other.dream_world.front_default,
        types,
      }
    }
  )

  return {
    props: {
      arrayPokemons,
      arrayPokemonsMinimized,
    },
  }
}

export function Poke({ arrayPokemonsMinimized, arrayPokemons, results }) {
  // console.log('Array down below', arrayPokemons)
  // console.log('Minimized array down below', arrayPokemonsMinimized)
  return (
    <>
      <h1>Pokemons</h1>
      <div>
        {arrayPokemonsMinimized.map(({ id, name: nameP, img, types }) => (
          <div key={id}>
            {nameP}
            <img alt={nameP} src={img} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Poke
