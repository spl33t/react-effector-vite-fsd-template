import { createEffect, createEvent, sample } from "effector"

import { sessionDropped } from "@/entities/session"
import { logout } from "@/shared/api/auth"
import { tokenErased } from "@/shared/config/token"

export const clickLogoutButton = createEvent()
export const logoutFx = createEffect(logout)

sample({
  clock: clickLogoutButton,
  target: logoutFx,
})

sample({
  clock: logoutFx.done,
  target: sessionDropped,
})
