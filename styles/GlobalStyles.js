import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  text: '#ffffff',
  primaryColor: '#1E50FF',
  secondaryColor: '#FFB830',
  backgroundColor: '#0F182E',
}

const GlobalTheme = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

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
