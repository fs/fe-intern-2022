import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import { theme } from '../styles/GlobalStyles'
import Layout from '../components/Layout.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme.mainTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
