import { createEffect, createEvent, createStore, sample } from "effector"

export const tokenReceived = createEvent<string>()
export const tokenErased = createEvent()

const ACCESS_TOKEN = "accessToken"

export const $accessToken = createStore(
  localStorage.getItem(ACCESS_TOKEN) || null
)

$accessToken.on(tokenReceived, (_, token) => token).on(tokenErased, () => null)

export const $isAuthorized = $accessToken.map(Boolean)

//FIXME Вынести в либы
const setItemLocalStorageFx = createEffect(
  ({ name, value }: { name: string; value: string }) => {
    localStorage.setItem(name, value)
  }
)

const removeItemLocalStorageFx = createEffect((name: string) => {
  localStorage.removeItem(name)
})

sample({
  clock: tokenReceived,
  filter: Boolean,
  fn: (token) => ({ name: ACCESS_TOKEN, value: token }),
  target: setItemLocalStorageFx,
})

sample({
  clock: tokenErased,
  fn: () => ACCESS_TOKEN,
  target: removeItemLocalStorageFx,
})

// Очистить  localStorage после удаления токена
window.addEventListener("storage", (event) => {
  if (event.key === ACCESS_TOKEN) if (event.newValue === null) tokenErased()
})
