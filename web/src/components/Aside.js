import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";


const Aside = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <Fragment>
      <aside>
        <strong>Labels</strong>
        <div style={{height:200}}>contextual controls</div>
      </aside>
    </Fragment>
  ) : (
    <Fragment>
      <aside></aside>
    </Fragment>
  );
};

export default Aside;
