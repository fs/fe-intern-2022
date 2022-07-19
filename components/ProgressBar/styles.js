import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div(
  ({ backgroundColor }) => css`
    height: 4px;
    width: 100%;
    background-color: ${backgroundColor}70;
    border-radius: 50px;
  `
)

const animationSettings = ({ completed }) => keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: calc(${completed}% / 2.3);
    }

`
export const Filler = styled.div(
  ({ completed, backgroundColor }) =>
    css`
      height: 100%;
      width: calc(${completed}% / 2.3);
      background-color: ${backgroundColor};
      border-radius: inherit;
      max-width: 100%;
      text-align: right;
      animation: ${animationSettings(completed)} 1s ease;
    `
)
