import '../styles/global.scss'

import { challenngesContext, ChallenngesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallenngesProvider>
      <Component {...pageProps} />
    </ChallenngesProvider>

  )
}

export default MyApp
