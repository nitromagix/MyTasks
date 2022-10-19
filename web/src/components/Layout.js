import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { trace } from "../nmx";
import Header from "./Header";
import Nav from "./Nav";

const Layout = () => {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <div className="container">
          <Nav />
          <main>
            <Outlet />
          </main>
          <aside>aside</aside>
          <footer>footer</footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
