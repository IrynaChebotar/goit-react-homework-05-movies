import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PageContainer, PagesList, PageItem, Link } from './Layout.styled';

const Layout = () => {
  const location = useLocation();

  return (
    <PageContainer>
      <header>
        <nav>
          <PagesList>
            <PageItem>
              <Link exact="true" to="/" state={{ from: location }}>
                Home page
              </Link>
            </PageItem>
            <PageItem>
              <Link to="/movies" state={{ from: location }}>
                Movies
              </Link>
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
