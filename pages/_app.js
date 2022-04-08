import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AppleMetaProvider } from '../context/AppleMetaContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://ifpljwcmdtfp.usemoralis.com:2053/server'
      appId='dm8e4rxkGR5MZtYcvRh6ovi3waKRtk5WdvKKRFS3'
    >
      <AppleMetaProvider>
        <Component {...pageProps} />
      </AppleMetaProvider>
    </MoralisProvider>
  )
}

export default MyApp
