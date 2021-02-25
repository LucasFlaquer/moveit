import '../styles/global.scss'

import { ChallenngesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallenngesProvider>
      
        <Component {...pageProps} />
      
    </ChallenngesProvider>
  )
}

export default MyApp
