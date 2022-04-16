import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AppleMetaProvider } from '../context/AppleMetaContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://mb6gbmbaexd3.usemoralis.com:2053/server'
      appId='8vRC7NOcVoaLDCp24CwBZFan63hGTuHDCJ9Kionz'
    >
      <AppleMetaProvider>
        <Component {...pageProps} />
      </AppleMetaProvider>
    </MoralisProvider>
  )
}

export default MyApp
