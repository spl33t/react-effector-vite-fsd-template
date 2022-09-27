import { useQuery } from "@farfetched/react"
import styled from "styled-components"

import { MainLayout } from "@/layouts/main"

import { characterQuery } from "./model"

export const HomePage = () => {
  const { data: characters } = useQuery(characterQuery)

  return (
    <MainLayout>
      <h1>Home</h1>
      <br /> <br />
      <CharactersWrapper>
        {characters?.results.map((character: any) => {
          return (
            <CharacterCard key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} />
            </CharacterCard>
          )
        })}
      </CharactersWrapper>
    </MainLayout>
  )
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
