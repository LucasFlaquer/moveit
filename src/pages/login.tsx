import { FiArrowRight } from 'react-icons/fi'


export default function Login() {
  return (
    <div className="login">
      <img src="/home-bg.svg" alt="background" className="login--logo" />

      <div className="login--content">
        <img src="/logo-white.svg" alt="Move.It" />
        <h1>Bem Vindo</h1>
        <div className="login--info">
          <img src="/Github.svg" alt="Github logo" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <form className="form-login">
          <input type="text" placeholder="Ex.: LucasFlaquer" />
          <button>
            <FiArrowRight />
          </button>
        </form>
      </div>

    </div>
  )
}