import { createEffect, createEvent, sample } from "effector"

import { logout } from "@/shared/api"
import { tokenErased } from "@/shared/config/token"

export const clickLogoutButton = createEvent()
export const logoutFx = createEffect(logout)

sample({
  clock: clickLogoutButton,
  target: logoutFx,
})

sample({
  clock: clickLogoutButton,
  target: tokenErased,
})
