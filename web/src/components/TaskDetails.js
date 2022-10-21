import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const TaskDetails = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <Fragment>
      <h1>Task Details</h1>
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TaskDetails;