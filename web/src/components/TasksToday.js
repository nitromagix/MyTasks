import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const TasksToday = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <Fragment>
      <h1>Today's Tasks</h1>
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksToday;
