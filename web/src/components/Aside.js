import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";


const Aside = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <Fragment>
      <aside>
        <div style={{height:200}}></div>
      </aside>
    </Fragment>
  ) : (
    <Fragment>
      <aside></aside>
    </Fragment>
  );
};

export default Aside;
