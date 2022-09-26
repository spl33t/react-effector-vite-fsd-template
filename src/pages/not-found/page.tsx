import { Link } from "atomic-router-react"
import React from "react"

import { routes } from "@/shared/config/routes"

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Такой страницы не существует</h1>
      <Link to={routes.home}>На главную</Link>
    </div>
  )
}
