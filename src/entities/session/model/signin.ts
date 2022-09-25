import { createEffect, sample } from "effector";

import { signIn } from "@/shared/api";
import { $session } from "./session";

export const signInFx = createEffect(signIn)
export const loginPending = signInFx.pending

sample({
  clock: signInFx.doneData,
  target: $session
})


