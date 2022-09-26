import { Link } from "atomic-router-react"

import { routes } from "@/shared/config/routes"

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={routes.about}>Абаут</Link>
    </div>
  )
}
