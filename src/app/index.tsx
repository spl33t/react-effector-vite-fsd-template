import { createEvent, sample } from "effector"
import { useUnit } from "effector-react"

import { $sessionLoading, readyToLoadSession } from "@/entities/session"
import { Pages, router } from "@/pages"
import { AppLoader } from "@/widgets/app-loader"

import { GlobalStyle } from "./global-css"

//Index start
const startLoadingApp = createEvent()

//Загрузка сессии
sample({
  clock: router.initialized,
  target: readyToLoadSession,
})

startLoadingApp()

export const App = () => {
  const sessionLoading = useUnit($sessionLoading)

  if (sessionLoading) return <AppLoader />

  return (
    <>
      <GlobalStyle />
      <Pages />
    </>
  )
}
