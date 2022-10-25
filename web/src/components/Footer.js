import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

const Footer = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <Fragment>
      <footer>Nitromagix 2022</footer>
    </Fragment>
  ) : (
    <Fragment>
      <footer></footer>
    </Fragment>
  );
};

export default Footer;
