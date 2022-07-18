import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ backgroundColor }) => css`
    height: 4px;
    width: 100%;
    background-color: ${backgroundColor}70;
    border-radius: 50px;
  `
)

export const Filler = styled.div(
  ({ completed, backgroundColor }) => css`
    height: 100%;
    width: calc(${completed}% / 2.3);
    background-color: ${backgroundColor};
    border-radius: inherit;
    text-align: right;
  `
)
