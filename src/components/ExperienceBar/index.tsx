import { useContext } from 'react';
import { challenngesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/ExperienceBar.module.scss'


const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(challenngesContext)
  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div className="progress" style={{ width: `${percentToNextLevel}%` }}></div>
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience}xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}

export default ExperienceBar;