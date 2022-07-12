import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  text: '#ffffff',
  primaryColor: '#1E50FF',
  secondaryColor: '#FFB830',
  backgroundColor: '#0F182E',
}

const GlobalTheme = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.backgroundColor};;
  }
`

export default GlobalTheme
