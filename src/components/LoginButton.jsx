import { useAuth0 } from '@auth0/auth0-react'
import { FcGoogle } from 'react-icons/fc'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button className='LoginButton' onClick={() => loginWithRedirect()}><FcGoogle />Iniciar Sesión</button>
}

export default LoginButton
