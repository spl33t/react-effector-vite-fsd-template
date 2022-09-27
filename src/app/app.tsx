import { createHistoryRouter } from "atomic-router"
import { RouterProvider } from "atomic-router-react"
import { createEvent, forward, sample } from "effector"
import { useUnit } from "effector-react"
import { createBrowserHistory } from "history"
import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"

import { $sessionLoading, readyToLoadSession } from "@/entities/session"
import { Pages, routesMap } from "@/pages"
import { routes } from "@/shared/config/routes"
import { $isAuthorized } from "@/shared/config/token"
import { AppLoader } from "@/widgets/app-loader"

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: Arial;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`

//App start
const appIsReadyToLoad = createEvent()

const history = createBrowserHistory()
const router = createHistoryRouter({
  routes: routesMap,
})

sample({
  clock: appIsReadyToLoad,
  fn: () => history,
  target: router.setHistory,
})

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: routes.errors.notFound.open,
})

//Редирект на страницу логина если не авторизованый зайдет на любую из страниц
sample({
  clock: [router.$path, $isAuthorized],
  source: $isAuthorized,
  filter: (s) => !s,
  target: routes.login.open,
})

//Редирект на главную страницу если авторизованый зайдет на страницу логина
sample({
  clock: [routes.login.$isOpened, $isAuthorized],
  source: $isAuthorized,
  filter: Boolean,
  target: routes.home.open,
})

//Загрузка сессии
sample({
  clock: appIsReadyToLoad,
  target: readyToLoadSession,
})

appIsReadyToLoad()

const App = () => {
  const sessionLoading = useUnit($sessionLoading)

  if (sessionLoading) return <AppLoader />

  return (
    <RouterProvider router={router}>
      <GlobalStyle />
      <Pages />
    </RouterProvider>
  )
}

export default App
