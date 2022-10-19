import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const Footer = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <Fragment>
      <footer>footer contents</footer>
    </Fragment>
  ) : (
    <Fragment>
      <footer></footer>
    </Fragment>
  );
};

export default Footer;
