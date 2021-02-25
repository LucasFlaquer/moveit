import { useContext } from 'react'
import { challenngesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.scss'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(challenngesContext)
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }
  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button"
              className={styles.challengeBoxFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button type="button"
              onClick={handleChallengeSucceeded}
              className={styles.challengeBoxSucceededButton}>Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeBoxNotActive}>
            <strong>
              Finalize um ciclo para receber um desafio
        </strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios.
        </p>
          </div>
        )}
    </div>
  )
}