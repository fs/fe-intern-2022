import { Text } from 'styles/Typography/styles'
import { Container } from 'styles/Container.styled'
import { Wrapper } from 'styles/Wrapper.styled'
import MinimizedCard from 'components/MinimizedCard'
import altImg from 'public/img/pokemon-img.svg'

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
      <Wrapper>
        <Container
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="50px"
          padding="0 0 30px"
        >
          <Text fontSize="40px" textAlign="center">
            Pokemons
          </Text>
          <Container
            display="flex"
            flexDirection="row"
            gap="30px"
            flexWrap="wrap"
            justifyContent="center"
          >
            {pokemonsMinimized.map(({ id, name, img, types }) => {
              return (
                <>
                  <MinimizedCard
                    key={id}
                    name={name}
                    bgColor={types[0].type.name}
                    img={img ? img : altImg}
                  />
                </>
              )
            })}
          </Container>
        </Container>
      </Wrapper>
    </>
  )
}

export default Poke
