import { ReactNode } from "react"
import styled from "styled-components"

type LoginLayoutProps = {
  children: ReactNode
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
