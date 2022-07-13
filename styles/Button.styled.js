import styled, { css } from 'styled-components'

export const Button = styled.button(
  ({ backgroundColor, fontSize, width, color, theme }) => css`
    border-radius: 16px;
    border-color: ${theme.primaryColor};
    padding: 12px 24px;
    font-size: ${fontSize || '16px'};
    font-weight: 600;
    background-color: ${backgroundColor};
    color: ${color || theme.text};
    cursor: pointer;
    width: ${width || 'fit-content'};
  `
)
