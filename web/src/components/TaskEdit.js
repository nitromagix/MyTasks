import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

const TaskEdit = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Edit Task</h1>
      <div style={{width:350}}>task</div>
    </Fragment>
  ) : (
    <Fragment></Fragment>

  );
};

export default TaskEdit;