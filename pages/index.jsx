import { Text } from 'styles/Typography/styles'
export const getServerSideProps = async () => {
  //getting fetch requests with radnom id
  const fetches = [...Array(10).keys()].map(async () => {
    const number = Math.floor(Math.random() * 900) + 1
    return fetch(`${process.env.API_URL}/${number}`)
  })

  const results = await Promise.allSettled(fetches)
  const filteredResults = results
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value)

  const responses = await Promise.all(filteredResults).then(res => {
    const responses = res.map(response => response.json())
    return responses
  })
  const pokemons = await Promise.all(responses)

  const pokemonsMinimized = pokemons.map(({ id, name, sprites, types }) => {
    return {
      id,
      name,
      img: sprites?.other.dream_world.front_default,
      types,
    }
  })
  return {
    props: {
      pokemons,
      pokemonsMinimized,
    },
  }
}

export function Poke({ pokemonsMinimized, pokemons }) {
  console.log('Array down below', pokemons)
  console.log('Minimized array down below', pokemonsMinimized)
  return (
    <>
      <Text fontSize="40px" textAlign="center">
        Pokemons
      </Text>
    </>
  )
}

export default Poke
