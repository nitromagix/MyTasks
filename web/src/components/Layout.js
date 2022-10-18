import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="App">
        <header>header</header>
        <div class="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Outlet />
          </main>
          <aside>aside</aside>
          <footer>footer</footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
