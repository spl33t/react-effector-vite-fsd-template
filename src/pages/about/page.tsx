import { Link } from "atomic-router-react"

import { MainLayout } from "@/layouts/main"
import { routes } from "@/shared/config/routes"

export const AboutPage = () => {
  return (
    <MainLayout>
      <h1>About</h1>
      <Link to={routes.home}>go to Home page</Link>
    </MainLayout>
  )
}
