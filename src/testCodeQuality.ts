import {
  createEffect,
  createEvent,
  createStore,
  forward,
  guard,
  sample,
} from "effector"

const evt = createEvent<number>()
const $value = createStore(0)

sample({
  source: $value,
  target: evt,
})

forward({
  from: evt,
  to: $value,
})

export const test = "sda-sad"
console.log(test)
