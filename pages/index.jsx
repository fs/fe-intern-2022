import React, { useState } from 'react'

import { Text } from 'styles/Typography/styles'
import { Container } from 'styles/Container.styled'
import { Wrapper } from 'styles/Wrapper.styled'
import PokemonCard from 'components/PokemonCard'
import PokemonCardContainer from 'components/PokemonCardContainer'
import Modal from 'components/Modal'

export const getServerSideProps = async () => {
  //getting fetch requests with radnom id
  const fetches = [...Array(10)].map(() => {
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
  const [pokemonId, setPokemonId] = useState('')
  const [modalActive, setModalActive] = useState(false)
  const pokemonInfo = pokemons.filter(pokemon => pokemon.id === pokemonId)
  const pokemonInfoToDisplay = pokemonInfo.map(
    ({ id, name, sprites, types, height, weight, stats }) => {
      return {
        id,
        name,
        types,
        height,
        weight,
        img: sprites?.other.dream_world.front_default,
        hp: stats[0].base_stat,
        atk: stats[1].base_stat,
        def: stats[2].base_stat,
        satk: stats[3].base_stat,
        sdef: stats[4].base_stat,
        spd: stats[5].base_stat,
      }
    }
  )
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
          <Text
            fontSize="40px"
            textAlign="center"
            onClick={() => setModalActive(true)}
          >
            Pokemons
          </Text>
          <PokemonCardContainer
            setActive={setModalActive}
            setPokemon={setPokemonId}
            pokeMinimized={pokemonsMinimized}
          />
        </Container>
      </Wrapper>
      {modalActive && (
        <Modal setActive={setModalActive}>
          <PokemonCard pokemonInfo={pokemonInfoToDisplay} />
        </Modal>
      )}
    </>
  )
}

export default Poke
