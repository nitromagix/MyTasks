import { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { logout } from "../app/auth";

const Header = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const navigate = useNavigate();

  const logoutClick = () => {
    logout();
    window.location.reload();
  };

  return user && user.role === "user" ? (
    <Fragment>
      <header className="clearfix">
        {/* <img
          src={process.env.PUBLIC_URL + "/favicon-32x32.png"}
          alt="logo"
          className="logo-image float-left"
        /> */}
        <div className="logo float-left">MyTasks</div>
        <div className="log-in-out-profile float-right">
          <span>Hello, {user.firstName}</span> |{" "}
          <Link onClick={logoutClick}>Log out</Link>
        </div>
      </header>
    </Fragment>
  ) : (
    <Fragment>
      <header className="clearfix">
        <div className="log-in-out-profile float-right">
          <Link to={"/login"}>Log-in</Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
