import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { PageContainer, PagesList, PageItem } from './Layout.styled';

const Layout = () => {
  const location = useLocation();

  return (
    <PageContainer>
      <header>
        <nav>
          <PagesList>
            <PageItem>
              <NavLink exact="true" to="/" state={{ from: location }}>
                Home page
              </NavLink>
            </PageItem>
            <PageItem>
              <NavLink to="/movies" state={{ from: location }}>
                Movies
              </NavLink>
            </PageItem>
          </PagesList>
        </nav>
      </header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </PageContainer>
  );
};

export default Layout;
