import styled, { css } from 'styled-components'

export const CustomLink = styled.a(
  ({ fontSize, color, animation, theme }) => css`
    font-size: ${fontSize};
    color: ${color || theme.gray500};
    text-decoration: none;
    cursor: pointer;
    position: ${animation ? 'relative' : ''};
    outline: none;
    animation: ${animation
      ? animation &&
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
            background-color: #1E50FF;
            transform-origin:bottom right;
            transition: transform 0.25s ease-out;
          }
          :hover:after{
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `
      : 'inherit'};

    :hover {
      color: ${theme.text};
      transition: color 0.15s ease;
    }
  `
)
