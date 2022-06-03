import React, { FC } from 'react';
import { AppShell, Footer, Header, Navbar, Title } from '@mantine/core';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { MainLink } from '../MainLink';

export type TRoute = {
  path: string;
  element: React.FunctionComponent;
};
export type TLink = {
  label: string;
  path: string;
};

export type TLayoutProps = {
  title: string;
  routes: TRoute[];
  navLinks: TLink[];
};

export const Layout: FC<TLayoutProps> = ({ title, routes, navLinks }) => {
  return (
    <BrowserRouter>
      <AppShell
        padding='md'
        header={
          <Header height={60}>
            <Title>{title}</Title>
          </Header>
        }
        navbar={
          <Navbar width={{ base: 300 }} height={500} p='xs'>
            {navLinks.map((link) => (
              <MainLink {...link} key={link.path} />
            ))}
          </Navbar>
        }
        footer={<Footer height={60}>This is the Footer</Footer>}
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Outlet />
      </AppShell>
    </BrowserRouter>
  );
};
