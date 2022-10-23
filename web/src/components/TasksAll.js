import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

const TasksAll = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <Fragment>
      <h1>All Tasks</h1>
    </Fragment>
  ) : (
    <Fragment></Fragment>

  );
};

export default TasksAll;