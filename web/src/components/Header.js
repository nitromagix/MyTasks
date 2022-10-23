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
      <header>
        Hello, {user.firstName} | <Link onClick={logoutClick}>Log-out</Link>
      </header>
    </Fragment>
  ) : (
    <Fragment>
      <header>
        <Link to={"/login"}>Log-in</Link>
      </header>
    </Fragment>
  );
};

export default Header;
