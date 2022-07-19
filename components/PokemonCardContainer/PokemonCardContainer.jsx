import { Container } from './styles'
import MinimizedCard from 'components/MinimizedCard'
import altImg from 'public/img/pokemon-img.svg'

const PokemonCardContainer = ({ pokeMinimized, setPokemon, setActive }) => {
  return (
    <>
      <Container>
        {pokeMinimized.map(({ id, name, img, types }) => {
          return (
            <MinimizedCard
              key={id}
              name={name}
              bgColor={types[0].type.name}
              img={img ? img : altImg}
              id={id}
              pokemonid={setPokemon}
              setActive={setActive}
            />
          )
        })}
      </Container>
    </>
  )
}

export default PokemonCardContainer
