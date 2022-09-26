import { createRoute } from "atomic-router"
import { sample } from "effector"

import { $isAuthorized } from "../token"

export const routes = {
  home: createRoute(),
  about: createRoute(),
  login: createRoute(),
  contactUs: createRoute(),
  errors: {
    notFound: createRoute(),
  },
}

//Редирект на главную страницу если авторизованый зайдет на страницу логина
sample({
  clock: [routes.login.$isOpened, $isAuthorized],
  source: $isAuthorized,
  filter: Boolean,
  target: routes.home.open,
})

//Редирект с любой страницы на страницу логина для не авторизованных юзеров
$isAuthorized.watch((s) => {
  if (!s) routes.login.open({})
})
