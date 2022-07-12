import styled from 'styled-components'
import { TextColors } from './GlobalStyles'

export const CustomLink = styled.a`
  font-size: ${props => props.fontSize};
  color: ${TextColors.gray500};
  text-decoration: none;
  cursor: pointer;
`
