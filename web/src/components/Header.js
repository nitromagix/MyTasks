import { Fragment } from "react";
import { trace } from "../nmx";

const Header = (props) => {
  const user = props.currentUser;

  return user ? (
    <Fragment>
      <header>Hello, {user.firstName}</header>
    </Fragment>
  ) : null;
};

export default Header;
