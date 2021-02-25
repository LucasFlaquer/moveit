import { useContext } from 'react'
import { challenngesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.scss'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(challenngesContext)

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
              onClick={resetChallenge}
            >
              falhei
            </button>
            <button type="button"
              className={styles.challengeBoxSucceededButton}>completei</button>
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