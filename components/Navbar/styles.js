import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  padding: 40px;
`
export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const Container = styled.div(
  ({ display, flexDirection, justifyContent, alignItems, gap }) => css`
    display: ${display};
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap};
  `
)

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
export const CustomLink = styled.a(
  ({ fontSize, color, animation, theme }) => css`
    font-size: ${fontSize};
    color: ${color || theme.gray500};
    text-decoration: none;
    cursor: pointer;
    position: ${animation && 'relative'};
    outline: none;
    animation: ${animation &&
    `
          display: inline-block;
          :after{
            content: '';
            position: absolute;
            width: 80%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: ${theme.underline};
            transform-origin:bottom right;
            transition: transform 0.25s ease-out;
          }
          :hover:after{
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `};

    :hover {
      color: ${theme.text};
      transition: color 0.15s ease;
    }
  `
)
