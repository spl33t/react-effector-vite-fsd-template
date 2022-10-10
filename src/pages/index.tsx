import { createHistoryRouter } from "atomic-router"
import { Route, RouterProvider } from "atomic-router-react"
import { sample } from "effector"
import { createBrowserHistory } from "history"

import { NotFoundPage } from "@/pages/not-found"
import { routes } from "@/shared/config/routes"
import { $isAuthorized } from "@/shared/config/token"

import { AboutPage } from "./about"
import { HomePage } from "./home"
import { LoginPage } from "./login"

export const Pages = () => {
  return (
    <RouterProvider router={router}>
      <Route route={routes.home} view={HomePage} />
      <Route route={routes.about} view={AboutPage} />
      <Route route={routes.login} view={LoginPage} />
      <Route route={routes.errors.notFound} view={NotFoundPage} />
    </RouterProvider>
  )
}

export const routesMap = [
  { path: "/", route: routes.home },
  { path: "/about", route: routes.about },
  { path: "/login", route: routes.login },
  { path: "/not-found-page", route: routes.errors.notFound },
]

const history = createBrowserHistory()
export const router = createHistoryRouter({
  routes: routesMap,
})

router.setHistory(history)

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: routes.errors.notFound.open,
})

//Редирект на страницу логина если не авторизованый зайдет на любую из страниц
$isAuthorized.watch((s: boolean) => !s && routes.login.open({}))

//Редирект на страницу на главную страницу после авторизации
$isAuthorized.watch((s: boolean) => {
  // eslint-disable-next-line effector/no-getState
  s && routes.login.$isOpened.getState() && routes.home.open({})
})

//Редирект на главную если авторизованый зайдет на страницу логина
routes.login.$isOpened.watch((s: boolean) => {
  // eslint-disable-next-line effector/no-getState
  if (s && $isAuthorized.getState()) {
    routes.home.open({})
  }
})
