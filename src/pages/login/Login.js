import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { InputField } from "../../components/InputField"
import { GlobalContext } from "../../context"
import './login.css'

const Login = () => {
      const {state, actions} = useContext(GlobalContext)
      const navigate = useNavigate()
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const handleSubmit = async () => {
            localStorage.setItem("email", email)
            actions.loginsAction(true)
            navigate('/home')
      }
      return (
            <div className="wrapper">
                  <h1 className="text-center text-3xl mb-10">Login</h1>
                  <div style={{ display: 'block' }}>
                        <InputField
                              type='email'
                              value={email}
                              setValue={setEmail}
                              placeholder='Email'
                        />
                        <InputField
                              type='password'
                              value={password}
                              setValue={setPassword}
                              placeholder='Password'
                        />
                  </div>
                  <button
                        onClick={handleSubmit}
                        style={{ width: 250 }}
                        type="submit"
                        className="bg-blue-500 ml-5 h-8 rounded-sm text-white text-center"
                  >
                        submit
                  </button>
            </div>
      )
}
export default Login