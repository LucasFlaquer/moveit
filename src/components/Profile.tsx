
import styles from '../styles/components/Profile.module.scss'

export default function Profile() {

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucasflaquer.png" alt="Lucas Flaquer" />
      <div>
        <strong>Lucas Flaquer</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  )
}