import { Text } from 'styles/Typography/styles'
export const getServerSideProps = async () => {
  //getting fetch requests with radnom id
  const promises = [...Array(10).keys()].map(async () => {
    const num = Math.floor(Math.random() * 900) + 1
    return fetch(`${process.env.API_URL}/${num}`).then(response =>
      response.json()
    )
  })

  const results = await Promise.allSettled(promises)

  const arrayPokemons = results.reduce((acc, item) => {
    if (item.value) {
      acc.push(item.value)
    }
    return acc
  }, [])

  const arrayPokemonsMinimized = arrayPokemons.map(
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

export function Poke({ arrayPokemonsMinimized, arrayPokemons }) {
  console.log('Array down below', arrayPokemons)
  console.log('Minimized array down below', arrayPokemonsMinimized)
  return (
    <>
      <Text fontSize="40px" textAlign="center">
        Pokemons
      </Text>
    </>
  )
}

export default Poke
