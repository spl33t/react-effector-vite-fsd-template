import { Link } from "atomic-router-react"
import { useUnit } from "effector-react"
import React from "react"
import styled from "styled-components"

import { routes } from "@/shared/config/routes"
import { $isAuthorized } from "@/shared/config/token"

import { clickLogoutButton } from "../model/logout"
import { $login } from "../model/session"

export const SessionPanel = () => {
  const isAuth = useUnit($isAuthorized)
  const userName = useUnit($login)

  return (
    <Wrapper>
      {isAuth ? (
        <>
          <UserName>{userName}</UserName>
          <Button onClick={() => clickLogoutButton()}>Logout</Button>
        </>
      ) : (
        <>
          <Button>
            <Link to={routes.login}>Login</Link>
          </Button>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const UserName = styled.div``

const Button = styled.div`
  background: #000;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;

  a {
    color: #fff;
  }
`
