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
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`
