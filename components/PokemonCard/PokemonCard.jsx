import ProgressBar from 'components/ProgressBar'

import { Container, Type, PokeImageContainer, Divider } from './styles'
import { Text } from 'styles/Typography/styles'
import { PokemonTypeColor } from 'styles/Variables'

import Image from 'next/image'
import arrow from 'public/img/arrow.svg'
import pokemon from 'public/img/pokemon-img.svg'
import pokeball from 'public/img/pokeCard-bg.svg'
import heightIcon from 'public/img/height-icon.svg'
import weightIcon from 'public/img/weight-icon.svg'
import altImg from 'public/img/pokemon-img.svg'
import { theme } from 'styles/GlobalStyles'

const PokemonCard = props => {
  const typeColor = {
    colors: PokemonTypeColor,
  }
  const poke = Object.values(props)[0][0]
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor={typeColor.colors[poke.types[0].type.name]}
      position="relative"
      padding="4px"
      maxWidth="360px"
      width="360px"
      style={{ borderRadius: 10 }}
    >
      <PokeImageContainer top="0" right="0">
        <Image src={pokeball} width="208px" height="208px" alt="pokeball" />
      </PokeImageContainer>
      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        width="90%"
        gap="16px"
        margin="24px auto"
      >
        <Image src={arrow} width="24px" height="32px" alt="" />
        <Text fontSize="24px" fontWeight="700">
          {poke.name}
        </Text>
        <Text fontSize="12px" fontWeight="700" margin="0 0 0 auto">
          #{poke.id}
        </Text>
      </Container>
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="16px"
        backgroundColor="#fff"
        padding="65px 20px 44px"
        width="100%"
        margin="135px auto 0"
        position="relative"
        style={{ borderRadius: 8 }}
      >
        <PokeImageContainer top="-144">
          <Image
            src={poke.img ? poke.img : altImg}
            width="200px"
            height="200px"
            style={{ position: 'absolute', top: 0 }}
            alt={pokemon}
          />
        </PokeImageContainer>

        <Container
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="16px"
          width="fit-content"
        >
          {poke.types.map((type, index) => {
            return (
              <Type
                key={index}
                backgroundColor={typeColor.colors[type.type.name]}
              >
                {type.type.name}
              </Type>
            )
          })}
        </Container>
        <Text
          fontSize="14px"
          fontWeight="700"
          color={typeColor.colors[poke.types[0].type.name]}
        >
          About
        </Text>
        <Container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="24px"
        >
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="8px"
          >
            <Container
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="8px"
            >
              <Image
                src={weightIcon}
                width="16px"
                height="16px"
                alt="weight-icon"
              />
              <Text
                fontSize="10px"
                fontWeight="400"
                color={theme.pokemonCard.darkGray}
              >
                0,{poke.weight} kg
              </Text>
            </Container>
            <Text
              fontSize="8px"
              fontWeight="400"
              color={theme.pokemonCard.mediumGray}
            >
              Weight
            </Text>
          </Container>
          <Divider borderColor={theme.pokemonCard.lightGray} height="48px" />
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="8px"
          >
            <Container
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="8px"
            >
              <Image
                src={heightIcon}
                width="16px"
                height="16px"
                alt="weight-icon"
              />
              <Text
                fontSize="10px"
                fontWeight="400"
                color={theme.pokemonCard.darkGray}
              >
                0,{poke.height} m
              </Text>
            </Container>
            <Text
              fontSize="8px"
              fontWeight="400"
              color={theme.pokemonCard.mediumGray}
            >
              Height
            </Text>
          </Container>
        </Container>
        <Text
          fontSize="14px"
          fontWeight="700"
          color={typeColor.colors[poke.types[0].type.name]}
        >
          Base Stats
        </Text>
        <Container display="flex" flexDirection="row" gap="12px" width="100%">
          <Container display="flex" flexDirection="column">
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors[poke.types[0].type.name]}
              lineHeight="16px"
              textAlign="right"
            >
              HP
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors[poke.types[0].type.name]}
              lineHeight="16px"
              textAlign="right"
            >
              ATK
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors[poke.types[0].type.name]}
              lineHeight="16px"
              textAlign="right"
            >
              DEF
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors[poke.types[0].type.name]}
              lineHeight="16px"
              textAlign="right"
            >
              SATK
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors[poke.types[0].type.name]}
              lineHeight="16px"
              textAlign="right"
            >
              SDEF
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors[poke.types[0].type.name]}
              lineHeight="16px"
              textAlign="right"
            >
              SPD
            </Text>
          </Container>
          <Divider borderColor={theme.pokemonCard.lightGray} height="100px" />
          <Container display="flex" flexDirection="column" width="100%">
            <Container
              display="flex"
              flexDirection="row"
              gap="8px"
              width="100%"
              alignItems="center"
            >
              <Text
                fontSize="10px"
                fontWeight="400"
                lineHeight="16px"
                color={theme.pokemonCard.darkGray}
              >
                {poke.hp ? poke.hp : '??'}
              </Text>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.hp}
              />
            </Container>
            <Container
              display="flex"
              flexDirection="row"
              gap="8px"
              width="100%"
              alignItems="center"
            >
              <Text
                fontSize="10px"
                fontWeight="400"
                lineHeight="16px"
                color={theme.pokemonCard.darkGray}
              >
                {poke.atk ? poke.atk : '??'}
              </Text>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.atk}
              />
            </Container>
            <Container
              display="flex"
              flexDirection="row"
              gap="8px"
              width="100%"
              alignItems="center"
            >
              <Text
                fontSize="10px"
                fontWeight="400"
                lineHeight="16px"
                color={theme.pokemonCard.darkGray}
              >
                {poke.def ? poke.def : '??'}
              </Text>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.def}
              />
            </Container>
            <Container
              display="flex"
              flexDirection="row"
              gap="8px"
              width="100%"
              alignItems="center"
            >
              <Text
                fontSize="10px"
                fontWeight="400"
                lineHeight="16px"
                color={theme.pokemonCard.darkGray}
              >
                {poke.satk ? poke.satk : '??'}
              </Text>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.satk}
              />
            </Container>
            <Container
              display="flex"
              flexDirection="row"
              gap="8px"
              width="100%"
              alignItems="center"
            >
              <Text
                fontSize="10px"
                fontWeight="400"
                lineHeight="16px"
                color={theme.pokemonCard.darkGray}
              >
                {poke.sdef ? poke.sdef : '??'}
              </Text>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.sdef}
              />
            </Container>
            <Container
              display="flex"
              flexDirection="row"
              gap="8px"
              width="100%"
              alignItems="center"
            >
              <Text
                fontSize="10px"
                fontWeight="400"
                lineHeight="16px"
                color={theme.pokemonCard.darkGray}
              >
                {poke.spd ? poke.spd : '??'}
              </Text>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.spd}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default PokemonCard
