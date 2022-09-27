import { useUnit } from "effector-react"
import { FormEvent } from "react"
import styled from "styled-components"

import { loginPending } from "@/entities/session"
import { LoginLayout } from "@/layouts/login"

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
    <LoginLayout>
      <Form onSubmit={submitFormHandle}>
        <h1>Login Page</h1>
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
      </Form>
    </LoginLayout>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  border-radius: 19px;
  padding: 20px;
  box-shadow: 0 0 20px #0000004a;
`
