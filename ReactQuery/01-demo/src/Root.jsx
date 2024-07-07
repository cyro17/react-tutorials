import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">Home </Link>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
}
