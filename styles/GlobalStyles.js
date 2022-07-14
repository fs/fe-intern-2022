import { createGlobalStyle, css } from 'styled-components'

export const theme = {
  mainTheme: {
    text: '#ffffff',
    primaryColor: '#1E50FF',
    secondaryColor: '#FFB830',
    backgroundColor: '#0F182E',
    gray500: '#ADB9C7',
    underline: '#1E50FF',
  },
  pokemonCard: {
    darkGray: '#212121',
    mediumGray: '#666666',
    lightGray: '#E0E0E0',
    white: '#ffffff',
  },
}

const GlobalTheme = createGlobalStyle(
  ({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Poppins', sans-serif;
      color: ${theme.text};
      background-color: ${theme.backgroundColor};
    }
  `
)

export default GlobalTheme
