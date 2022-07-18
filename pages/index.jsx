import { Text } from 'styles/Typography/styles'
import { fetchPokemons } from 'pages/api/fetchPokemons'

export const getServerSideProps = async () => {
  return {
    props: {
      pokemons,
      pokemonsMinimized,
    },
  }
}

export const Poke = () => {
  const { pokemons, pokemonsMinimized } = fetchPokemons()

  return (
    <>
      <Text fontSize="40px" textAlign="center" data-testid="container">
        Pokemons {pokemons[0]}
      </Text>
    </>
  )
}

export default Poke
