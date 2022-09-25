import { createEvent, createStore, sample } from "effector"

export const tokenReceived = createEvent<any>()
export const tokenErased = createEvent()

const ACCESS_TOKEN = "accessToken"
const REFRESH_TOKEN = "refreshToken"

export const $accessToken = createStore(localStorage.getItem(ACCESS_TOKEN) || null)

$accessToken
  .on(tokenReceived, (_, token) => token)
  .on(tokenErased, () => null)

export const $isAuthorized = $accessToken.map(Boolean)

sample({
    clock: tokenReceived,
    filter: Boolean,
    fn: (token) => localStorage.setItem(ACCESS_TOKEN, token)
})

sample({
    clock: tokenErased,
    fn: () => localStorage.removeItem(ACCESS_TOKEN)
})

window.addEventListener('storage', (event) => {
    if (event.key === ACCESS_TOKEN)
        if (event.newValue === null)
            tokenErased()
})
