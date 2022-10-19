import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { trace } from "../nmx";
import Aside from "./Aside";
import Footer from "./Footer";
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
          <Aside/>
          <Footer/>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
