import { Text } from 'styles/Typography/styles'
import { Container } from 'styles/Container.styled'
import { Wrapper } from 'styles/Wrapper.styled'
import MinimizedCard from 'components/MinimizedCard'
import altImg from 'public/img/pokemon-img.svg'

export const getServerSideProps = async () => {
  //getting fetch requests with radnom id
  const promises = [...Array(10).keys()].map(async () => {
    const num = Math.floor(Math.random() * 900) + 1
    return fetch(`${process.env.API_URL}/${num}`).then(response =>
      response.json()
    )
  })

  const results = await Promise.allSettled(promises)
  const pokemons = await Promise.all(results)

  const pokemonsInfo = pokemons.reduce((acc, item) => {
    if (item.value) return [...acc, item.value]
  }, [])

  const pokemonsInfoMinimized = pokemonsInfo.map(
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
      pokemonsInfo,
      pokemonsInfoMinimized,
    },
  }
}

export function Poke({ pokemonsInfoMinimized, pokemonsInfo }) {
  console.log('Array down below', pokemonsInfo)
  console.log('Minimized array down below', pokemonsInfoMinimized)
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
            {pokemonsInfoMinimized.map(({ id, name, img, types }) => {
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
