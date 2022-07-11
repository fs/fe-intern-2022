import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { darkTheme } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
