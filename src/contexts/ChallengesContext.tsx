import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json'

interface ChallgenesProps {
  children: ReactNode
}

interface ChallengeI {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface challenngesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: ChallengeI
  experienceToNextLevel: number
  levelUp: () => void
  resetChallenge: () => void
  startNewChallenge: () => void
}
export const challenngesContext = createContext({} as challenngesContextData)

export function ChallenngesProvider({ children }: ChallgenesProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  function startNewChallenge() {
    console.log('new Challenge')
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function levelUp() {
    setLevel(level + 1)
  }

  return (
    <challenngesContext.Provider value={{ level, experienceToNextLevel, currentExperience, challengesCompleted, activeChallenge, resetChallenge, levelUp, startNewChallenge }}>
      {children}
    </challenngesContext.Provider>
  )
}