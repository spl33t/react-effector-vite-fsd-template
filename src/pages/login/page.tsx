import { useUnit } from "effector-react"
import { FormEvent } from "react"

import { loginPending } from "@/entities/session"

import {
  $login,
  $password,
  changeInputLogin,
  changeInputPassword,
  submitForm,
} from "./model"

export const LoginPage = () => {
  const login = useUnit($login)
  const password = useUnit($password)
  const pending = useUnit(loginPending)

  const submitFormHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submitForm()
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={submitFormHandle}>
        <input
          value={login}
          onChange={(event) => changeInputLogin(event.target.value)}
          type="text"
        />
        <input
          value={password}
          onChange={(event) => changeInputPassword(event.target.value)}
          type="text"
        />
        <button type="submit" className="btn" disabled={pending}>
          {pending ? "loading" : "submit"}
        </button>
      </form>
    </div>
  )
}
