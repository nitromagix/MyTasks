import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const Aside = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <Fragment>
      <aside>contextual controls here</aside>
    </Fragment>
  ) : (
    <Fragment>
      <aside></aside>
    </Fragment>
  );
};

export default Aside;
