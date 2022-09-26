import { createEffect, createEvent, createStore, sample } from "effector"

import { User, refreshSession } from "@/shared/api"
import { $accessToken, tokenErased, tokenReceived } from "@/shared/config/token"

export const readyToLoadSession = createEvent()
export const refreshSessionFx = createEffect(refreshSession)
export const sessionDropped = createEvent()
export const $session = createStore<User | null>(null)
  .on(refreshSessionFx.doneData, (s, p) => p)
  .on(sessionDropped, () => null)

sample({
  clock: readyToLoadSession,
  source: $accessToken,
  filter: Boolean,
  target: refreshSessionFx,
})

sample({
  source: $session.map((state) => state?.token),
  filter: Boolean,
  target: tokenReceived,
})

sample({
  clock: refreshSessionFx.fail,
  target: sessionDropped,
})

sample({
  clock: sessionDropped,
  target: tokenErased,
})

export const $userId = $session.map((state) => state?.id)
export const $login = $session.map((state) => state?.login)
export const $sessionLoading = refreshSessionFx.pending
