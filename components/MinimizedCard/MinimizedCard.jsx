import { Container } from './styles'
import Image from 'next/image'
import { Text } from 'styles/Typography/styles'
import { PokemonTypeColor } from 'styles/Variables'

const MinimizedCard = ({ name, img, bgColor }) => {
  const typeColor = {
    colors: PokemonTypeColor,
  }

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justfyContent="center"
      backgroundColor={typeColor.colors[bgColor]}
      padding="20px"
      gap="10px"
      width="200px"
    >
      <Text fontSize="24px" color="#fff" textAlign="center">
        {name}
      </Text>
      <Image src={img} width="100px" height="100px" alt={name} />
    </Container>
  )
}

export default MinimizedCard
