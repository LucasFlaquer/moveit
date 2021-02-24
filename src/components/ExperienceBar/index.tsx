import styles from '../../styles/components/ExperienceBar.module.scss'


const ExperienceBar = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div className="progress" style={{ width: '50%' }}></div>
        <span className={styles.currentExperience} style={{ left: '50%' }}>300xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}

export default ExperienceBar;