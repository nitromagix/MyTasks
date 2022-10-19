import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const Header = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <Fragment>
      <header>Hello, {user.firstName}</header>
    </Fragment>
  ) : (
    <Fragment>
      <header><Link to={"/login"}>Log-in</Link></header>
    </Fragment>
  );
};

export default Header;
