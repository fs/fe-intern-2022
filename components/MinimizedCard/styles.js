import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ backgroundColor }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${backgroundColor};
    width: 200px;
    padding: 1px 1px 10px;
    cursor: pointer;
    border-radius: 10px;
  `
)

export const ImgContainer = styled.div(
  () => css`
    display: flex;
    width: 99%;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 8px 8px;
    margin: 1px;
    gap: 10px;
    border-radius: 10px;
  `
)

export const PokemonName = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  ::first-letter {
    text-transform: capitalize;
  }
`
