import { request } from "./axios-instance"

export const getCharacters = () => {
  return request<{ info: { count: number }; results: [] }>({
    url: `https://rickandmortyapi.com/api/character/`,
    method: "get",
  }).then((response) => response)
}
