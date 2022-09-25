import { createEffect, createEvent, sample } from "effector";

import { tokenErased } from "@/shared/config/token";
import { logout } from "@/shared/api"

export const clickLogoutButton = createEvent<any>()
export const logoutFx = createEffect(logout)

sample({
  clock: clickLogoutButton,
  target: logoutFx
})

sample({
  clock: clickLogoutButton,
  target: tokenErased
})