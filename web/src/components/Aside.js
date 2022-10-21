import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const Aside = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <Fragment>
      <aside>
        <strong>Labels</strong>
        <div style={{width:200,height:200}}>contextual controls here</div>
      </aside>
    </Fragment>
  ) : (
    <Fragment>
      <aside></aside>
    </Fragment>
  );
};

export default Aside;
