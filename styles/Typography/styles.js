import styled, { css } from 'styled-components'

export const Text = styled.p(
  ({
    fontSize,
    color,
    fontWeight,
    textAlign,
    margin,
    theme,
    lineHeight,
  }) => css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    text-align: ${textAlign};
    color: ${color || theme.text};
    margin: ${margin};
    line-height: ${lineHeight};
  `
)
