import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ backgroundColor }) => css`
    height: 4px;
    width: 100%;
    background-color: ${backgroundColor};
    border-radius: 50px;
    filter: brightness(170%);
  `
)

export const Filler = styled.div(
  ({ completed, backgroundColor }) => css`
    height: 100%;
    width: calc(${completed}% / 2);
    background-color: ${backgroundColor};
    border-radius: inherit;
    text-align: right;
    filter: brightness(0.7);
  `
)
