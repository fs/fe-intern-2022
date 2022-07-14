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
import { theme } from 'styles/GlobalStyles'

const PokemonCard = () => {
  const typeColor = {
    colors: PokemonTypeColor,
  }
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor={typeColor.colors.grass}
      position="relative"
      padding="4px"
      maxWidth="360px"
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
          Bulbasaur
        </Text>
        <Text fontSize="12px" fontWeight="700" margin="0 0 0 auto">
          #001
        </Text>
      </Container>
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="16px"
        backgroundColor="#fff"
        padding="56px 20px 44px"
        margin="135px auto 0"
        position="relative"
        style={{ borderRadius: 8 }}
      >
        <PokeImageContainer top="-144">
          <Image
            src={pokemon}
            width="200px"
            height="200px"
            style={{ position: 'absolute', top: 0 }}
            alt=""
          />
        </PokeImageContainer>

        <Container
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="16px"
          width="fit-content"
        >
          <Type backgroundColor={typeColor.colors.grass}>Grass</Type>
          <Type backgroundColor={typeColor.colors.poison}>Poison</Type>
        </Container>
        <Text fontSize="14px" fontWeight="700" color={typeColor.colors.grass}>
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
                6,9 kg
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
                0,7 m
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
          fontSize="10px"
          fontWeight="400"
          color={theme.pokemonCard.darkGray}
        >
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </Text>
        <Text fontSize="14px" fontWeight="700" color={typeColor.colors.grass}>
          Base Stats
        </Text>
        <Container display="flex" flexDirection="row" gap="12px" width="100%">
          <Container display="flex" flexDirection="column">
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors.grass}
              lineHeight="16px"
              textAlign="right"
            >
              HP
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors.grass}
              lineHeight="16px"
              textAlign="right"
            >
              ATK
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors.grass}
              lineHeight="16px"
              textAlign="right"
            >
              DEF
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors.grass}
              lineHeight="16px"
              textAlign="right"
            >
              SATK
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors.grass}
              lineHeight="16px"
              textAlign="right"
            >
              SDEF
            </Text>
            <Text
              fontSize="10px"
              fontWeight="700"
              color={typeColor.colors.grass}
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
                045
              </Text>
              <ProgressBar bgcolor={typeColor.colors.grass} completed={45} />
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
                049
              </Text>
              <ProgressBar bgcolor={typeColor.colors.grass} completed={49} />
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
                049
              </Text>
              <ProgressBar bgcolor={typeColor.colors.grass} completed={49} />
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
                065
              </Text>
              <ProgressBar bgcolor={typeColor.colors.grass} completed={65} />
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
                065
              </Text>
              <ProgressBar bgcolor={typeColor.colors.grass} completed={65} />
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
                045
              </Text>
              <ProgressBar bgcolor={typeColor.colors.grass} completed={45} />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default PokemonCard
