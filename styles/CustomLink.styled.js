import styled from 'styled-components'
import { TextColors } from './GlobalStyles'

export const CustomLink = styled.a`
  font-size: ${props => props.fontSize};
  color: ${props => props.color || TextColors.gray500};
  text-decoration: none;
  cursor: pointer;
  position: ${props => (props.animation ? 'relative' : '')};
  outline: none;
  animation: ${props =>
    props.animation
      ? 'true' &&
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
      : ''};

  &:hover {
    color: #ffffff;
    transition: color 0.15s ease;
  }
`
