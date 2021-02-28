import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from "../components/LevelUpModal";

interface ChallgenesProps {
  children: ReactNode
  level: number,
  currentExperience: number
  challengesCompleted: number
  username: string
  avatarUrl: string
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
  completeChallenge: () => void
  closeLevelUpModal: () => void
  getUserData: () => void
}
export const challenngesContext = createContext({} as challenngesContextData)

export function ChallenngesProvider({ children, ...rest }: ChallgenesProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
    Cookies.set('username', name)
    Cookies.set('avatarUrl', avatarUrl)
  }, [level, currentExperience, challengesCompleted, name, avatarUrl])

  function startNewChallenge() {
    console.log('new Challenge')
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }

  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }
    const { amount } = activeChallenge as ChallengeI
    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      levelUp()
      finalExperience = finalExperience - experienceToNextLevel
    }
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  function levelUp() {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function getUserData() {
    console.log(name, avatarUrl)
    setName(name)
    setAvatarUrl(avatarUrl)
  }

  return (
    <challenngesContext.Provider value={{
      level,
      experienceToNextLevel,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      getUserData,
      resetChallenge,
      levelUp,
      startNewChallenge,
      completeChallenge,
      closeLevelUpModal
    }}>
      {children}
      { isLevelUpModalOpen && <LevelUpModal />}
    </challenngesContext.Provider>
  )
}