import { Outlet, Link } from 'react-router';

export function Root() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
