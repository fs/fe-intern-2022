import styled, { css } from 'styled-components'

export const Header = styled.h1(
  ({ fontSize, color, fontWeight }) => css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    color: ${color};
  `
)

export const Text = styled.p(
  ({ fontSize, color, fontWeight, textAlign }) => css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    text-align: ${textAlign};
    color: ${color};
  `
)
