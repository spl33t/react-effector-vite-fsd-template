import { Link } from "atomic-router-react"
import React from "react"

import { MainLayout } from "@/layouts/main"
import { routes } from "@/shared/config/routes"

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <h1>404 - Такой страницы не существует</h1>
      <Link to={routes.home}>На главную</Link>
    </MainLayout>
  )
}
