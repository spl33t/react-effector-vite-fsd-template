import { createRoute } from "atomic-router"

export const routes = {
  home: createRoute(),
  about: createRoute(),
  login: createRoute(),
  contactUs: createRoute(),
  errors: {
    notFound: createRoute(),
  },
}
