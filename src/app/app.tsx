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
import { AppLoader } from "@/widgets/app-loader"
import { Layout } from "@/widgets/layout"

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
    font-weight: 600;
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

//Загрузка сессии
sample({
  clock: appIsReadyToLoad,
  target: readyToLoadSession,
})

forward({ from: appIsReadyToLoad, to: readyToLoadSession })

appIsReadyToLoad()

const App = () => {
  const sessionLoading = useUnit($sessionLoading)

  if (sessionLoading) return <AppLoader />

  return (
    <RouterProvider router={router}>
      <GlobalStyle />
      <Layout>
        <Pages />
      </Layout>
    </RouterProvider>
  )
}

export default App
