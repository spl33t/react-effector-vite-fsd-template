import { Route } from 'atomic-router-react';

import { routes } from '@/shared/config/routes';

import { HomePage } from './home';
import { AboutPage } from './about';
import { LoginPage } from './login';
import { NotFoundPage } from '@/pages/not-found';

export const routesMap = [
  { path: '/', route: routes.home },
  { path: '/about', route: routes.about },
  { path: '/login', route: routes.login },
  { path: '/not-found-page', route: routes.errors.notFound },
];

export const Pages = () => {
  return (
    <>
      <Route route={routes.home} view={HomePage} />
      <Route route={routes.about} view={AboutPage} />
      <Route route={routes.login} view={LoginPage} />

      <Route route={routes.errors.notFound} view={NotFoundPage} />
    </>
  );
};
