import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <h2>Thomas Shelby - Site</h2>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
