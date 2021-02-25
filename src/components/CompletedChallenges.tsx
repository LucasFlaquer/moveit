import { useContext } from 'react'
import { challenngesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.scss'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(challenngesContext)
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}