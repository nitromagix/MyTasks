import { useContext, Fragment } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";
import Header from "./Header";
import Nav from "./Nav";

const Layout = () => {
  const userContext = useContext(CurrentUser);

  return userContext.currentUser && userContext.currentUser.role === "reviewer" ? (
    <Fragment>
      <div className="App">
        <Header currentUser={userContext.currentUser} />
        <div className="container">
          <Nav/>
          <main>
            <Outlet />
          </main>
          <aside>aside</aside>
          <footer>footer</footer>
        </div>
      </div>
    </Fragment>
  ) : (<Navigate to={"/login"} />);
};

export default Layout;
