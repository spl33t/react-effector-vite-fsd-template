import { createQuery } from "@farfetched/core"
import { sample } from "effector"

import { getCharacters } from "@/shared/api/rick-and-morty"
import { routes } from "@/shared/config/routes"

export const currentRoute = routes.home

export const characterQuery = createQuery({ handler: getCharacters })

sample({
  clock: currentRoute.opened,
  target: characterQuery.start,
})
