import { Container, ImgContainer, PokemonName } from './styles'
import Image from 'next/image'
import { Text } from 'styles/Typography/styles'
import { PokemonTypeColor } from 'styles/Variables'

const MinimizedCard = ({ name, img, bgColor, id, pokemonid, setActive }) => {
  const typeColor = {
    colors: PokemonTypeColor,
  }
  const handleClick = id => {
    pokemonid(id)
    setActive(true)
  }
  return (
    <Container
      backgroundColor={typeColor.colors[bgColor]}
      onClick={() => handleClick(id)}
    >
      <ImgContainer
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      >
        <Text
          color={typeColor.colors[bgColor]}
          textAlign="right"
          fontSize="12px"
        >
          #{id}
        </Text>
        <Image src={img} width="100px" height="100px" alt={name} />
      </ImgContainer>

      <PokemonName>{name}</PokemonName>
    </Container>
  )
}

export default MinimizedCard
