import ProgressBar from 'components/ProgressBar'

import {
  Container,
  Type,
  PokeImageContainer,
  Divider,
  TopContainer,
  BottomContainer,
  TypesContainer,
  ProportionsContainer,
  SingleProportionContainer,
  SingleProportionTopContainer,
  StatsContainer,
  StatsNamesContainer,
  StatName,
  ProgressBarsContainer,
  StatValue,
  SinglePropgressBarContainer,
  PokemonName,
} from './styles'
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
    <Container backgroundColor={typeColor.colors[poke.types[0].type.name]}>
      <PokeImageContainer top="0" right="0">
        <Image src={pokeball} width="208px" height="208px" alt="pokeball" />
      </PokeImageContainer>
      <TopContainer>
        <Image src={arrow} width="24px" height="32px" alt="" />
        <PokemonName fontSize="24px" fontWeight="700">
          {poke.name}
        </PokemonName>
        <Text fontSize="12px" fontWeight="700" margin="0 0 0 auto">
          #{poke.id}
        </Text>
      </TopContainer>
      <BottomContainer>
        <PokeImageContainer top="-144">
          <Image
            src={poke.img ? poke.img : altImg}
            width="200px"
            height="200px"
            style={{ position: 'absolute', top: 0 }}
            alt={pokemon}
          />
        </PokeImageContainer>

        <TypesContainer>
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
        </TypesContainer>
        <Text
          fontSize="14px"
          fontWeight="700"
          color={typeColor.colors[poke.types[0].type.name]}
        >
          About
        </Text>
        <ProportionsContainer>
          <SingleProportionContainer>
            <SingleProportionTopContainer>
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
            </SingleProportionTopContainer>
            <Text
              fontSize="8px"
              fontWeight="400"
              color={theme.pokemonCard.mediumGray}
            >
              Weight
            </Text>
          </SingleProportionContainer>
          <Divider borderColor={theme.pokemonCard.lightGray} height="48px" />
          <SingleProportionContainer>
            <SingleProportionTopContainer>
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
            </SingleProportionTopContainer>
            <Text
              fontSize="8px"
              fontWeight="400"
              color={theme.pokemonCard.mediumGray}
            >
              Height
            </Text>
          </SingleProportionContainer>
        </ProportionsContainer>
        <Text
          fontSize="14px"
          fontWeight="700"
          color={typeColor.colors[poke.types[0].type.name]}
        >
          Base Stats
        </Text>
        <StatsContainer>
          <StatsNamesContainer>
            <StatName color={typeColor.colors[poke.types[0].type.name]}>
              HP
            </StatName>
            <StatName color={typeColor.colors[poke.types[0].type.name]}>
              ATK
            </StatName>
            <StatName color={typeColor.colors[poke.types[0].type.name]}>
              DEF
            </StatName>
            <StatName color={typeColor.colors[poke.types[0].type.name]}>
              SATK
            </StatName>
            <StatName color={typeColor.colors[poke.types[0].type.name]}>
              SDEF
            </StatName>
            <StatName color={typeColor.colors[poke.types[0].type.name]}>
              SPD
            </StatName>
          </StatsNamesContainer>
          <Divider borderColor={theme.pokemonCard.lightGray} height="100px" />
          <ProgressBarsContainer>
            <SinglePropgressBarContainer>
              <StatValue color={theme.pokemonCard.darkGray}>
                {poke.hp ? poke.hp : '??'}
              </StatValue>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.hp}
              />
            </SinglePropgressBarContainer>
            <SinglePropgressBarContainer>
              <StatValue color={theme.pokemonCard.darkGray}>
                {poke.atk ? poke.atk : '??'}
              </StatValue>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.atk}
              />
            </SinglePropgressBarContainer>
            <SinglePropgressBarContainer>
              <StatValue color={theme.pokemonCard.darkGray}>
                {poke.def ? poke.def : '??'}
              </StatValue>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.def}
              />
            </SinglePropgressBarContainer>
            <SinglePropgressBarContainer>
              <StatValue color={theme.pokemonCard.darkGray}>
                {poke.satk ? poke.satk : '??'}
              </StatValue>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.satk}
              />
            </SinglePropgressBarContainer>
            <SinglePropgressBarContainer>
              <StatValue color={theme.pokemonCard.darkGray}>
                {poke.sdef ? poke.sdef : '??'}
              </StatValue>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.sdef}
              />
            </SinglePropgressBarContainer>
            <SinglePropgressBarContainer>
              <StatValue color={theme.pokemonCard.darkGray}>
                {poke.spd ? poke.spd : '??'}
              </StatValue>
              <ProgressBar
                bgcolor={typeColor.colors[poke.types[0].type.name]}
                completed={poke.spd}
              />
            </SinglePropgressBarContainer>
          </ProgressBarsContainer>
        </StatsContainer>
      </BottomContainer>
    </Container>
  )
}

export default PokemonCard
