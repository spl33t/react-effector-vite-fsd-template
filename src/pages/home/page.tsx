import { useQuery } from "@farfetched/react"
import styled from "styled-components"

import { MainLayout } from "@/layouts/main"

import { characterQuery } from "./model"

export const HomePage = () => {
  const { data: characters } = useQuery(characterQuery)

  return <MainLayout>as</MainLayout>
}

const CharactersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const CharacterCard = styled.div`
  width: calc(33% - 20px);

  img {
    width: 100%;
  }
`
