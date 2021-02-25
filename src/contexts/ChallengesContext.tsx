import { createContext, ReactNode, useEffect, useState } from "react";
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
  completeChallenge: ()=> void
}
export const challenngesContext = createContext({} as challenngesContextData)

export function ChallenngesProvider({ children }: ChallgenesProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  
  useEffect(()=> {
    Notification.requestPermission()
  }, [])
  
  function startNewChallenge() {
    console.log('new Challenge')
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if(Notification.permission=== 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }

  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return
    }
    const {amount} = activeChallenge as ChallengeI
    let finalExperience = currentExperience + amount

    if(finalExperience >= experienceToNextLevel) {
      levelUp()
      finalExperience = finalExperience - experienceToNextLevel
    }
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted+1)
  }

  function levelUp() {
    setLevel(level + 1)
  }

  return (
    <challenngesContext.Provider value={{ level, experienceToNextLevel, currentExperience, challengesCompleted, activeChallenge, resetChallenge, levelUp, startNewChallenge , completeChallenge}}>
      {children}
    </challenngesContext.Provider>
  )
}