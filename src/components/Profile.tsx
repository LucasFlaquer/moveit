
import { useContext } from 'react'
import { challenngesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'

export default function Profile() {
  const {level} = useContext(challenngesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucasflaquer.png" alt="Lucas Flaquer" />
      <div>
        <strong>Lucas Flaquer</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}