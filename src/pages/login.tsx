import axios from 'axios'
import { useRouter } from 'next/router'
import { FormEvent, useContext, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { challenngesContext } from '../contexts/ChallengesContext'


export default function Login() {
  const [username, setUsername] = useState('')
  const router = useRouter()
  const { getUserData } = useContext(challenngesContext)
  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log('usuario: ', response.data)
      const { name, avatar_url } = response.data
      console.log(typeof (getUserData()))
      setUsername('')
      router.push('/')
    } catch (error) {
      console.log(error)
      alert(`${username} não encontrado`)
      setUsername('')
    }
  }

  return (
    <div className="login">
      <img src='/home-bg.svg' alt="background" className="login--logo" />

      <div className="login--content">
        <img src="/logo-white.svg" alt="Move.It" />
        <h1>Bem Vindo</h1>
        <div className="login--info">
          <img src="/Github.svg" alt="Github logo" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <form className="form-login" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Ex.: LucasFlaquer"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }} />
          <button>
            <FiArrowRight />
          </button>
        </form>
      </div>

    </div>
  )
}