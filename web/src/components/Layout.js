import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import NavActions from "./NavActions";

const Layout = () => {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <div className="container">
          <Nav />
          <main>
            <div className="content">
              <NavActions />
              <Outlet />
            </div>
          </main>
          <Aside />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
