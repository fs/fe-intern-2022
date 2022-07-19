import styled, { css } from 'styled-components'
export const Container = styled.div(
  ({ backgroundColor }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${backgroundColor};
    position: relative;
    padding: 4px;
    width: 360px;
    border-radius: 10px;
  `
)

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  gap: 16px;
  margin: 24px auto;
`
export const BottomContainer = styled.div(
  ({ bgColor }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: ${bgColor};
    padding: 65px 20px 44px;
    width: 100%;
    border-radius: 8px;
    position: relative;
    margin: 135px auto 0;
  `
)
export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: fit-content;
`
export const PokemonName = styled.p`
  font-size: 24px;
  font-weight: 700;
  ::first-letter {
    text-transform: capitalize;
  }
`
export const Type = styled.div(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    color: #fff;
    border-radius: 10px;
    padding: 2px 8px;
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    ::first-letter {
      text-transform: capitalize;
    }
  `
)

export const PokeImageContainer = styled.div(
  ({ top, right }) => css`
    position: absolute;
    top: ${top}px;
    right: ${right}px;
  `
)

export const ProportionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
`
export const SingleProportionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
export const SingleProportionTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`
export const StatsNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Divider = styled.div(
  ({ borderColor, height }) => css`
    border-right: 1px solid ${borderColor};
    height: ${height};
  `
)

export const StatName = styled.p(
  ({ color }) => css`
    font-size: 10px;
    font-weight: 700;
    color: ${color};
    line-height: 16px;
    text-align: right;
  `
)

export const StatValue = styled(StatName)`
  font-weight: 400;
  text-align: center;
  min-width: 13px;
`

export const ProgressBarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SinglePropgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  align-items: center;
`
