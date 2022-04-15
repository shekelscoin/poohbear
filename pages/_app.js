import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AppleMetaProvider } from '../context/AppleMetaContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://twh7pepcvgny.usemoralis.com:2053/server'
      appId='QUAbgXijHuRTEtS4oQov2IGp8E5hk1ckd4QXD3Ic'
    >
      <AppleMetaProvider>
        <Component {...pageProps} />
      </AppleMetaProvider>
    </MoralisProvider>
  )
}

export default MyApp
