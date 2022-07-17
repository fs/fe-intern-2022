import { Container } from './styles'
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
      display="flex"
      flexDirection="column"
      alignItems="center"
      justfyContent="center"
      backgroundColor={typeColor.colors[bgColor]}
      padding="1px 1px 10px"
      gap="10px"
      width="200px"
      onClick={() => handleClick(id)}
    >
      <Container
        width="99%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        backgroundColor="#fff"
        padding="8px 8px"
        margin="1px 1px"
        gap="10px"
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
      </Container>

      <Text fontSize="24px" color="#fff" textAlign="center">
        {name}
      </Text>
    </Container>
  )
}

export default MinimizedCard
