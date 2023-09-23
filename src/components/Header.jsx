import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { routes } from 'routes';

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to={routes.HOME}>Home</NavLink>
          <NavLink to={routes.MOVIES}>MovieSearch</NavLink>
        </nav>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </header>
    </div>
  );
};

export default Header;
