import { Text } from 'styles/Typography/styles'
import { fetchPokemons } from 'pages/api/fetchPokemons'

export const getServerSideProps = async () => {
  const { pokemons, pokemonsMinimized } = await fetchPokemons()

  return {
    props: {
      pokemons,
      pokemonsMinimized,
    },
  }
}

export function Poke({ pokemonsMinimized, pokemons }) {
  return (
    <>
      <Text fontSize="40px" textAlign="center" data-testid="container">
        Pokemons
      </Text>
    </>
  )
}

export default Poke
