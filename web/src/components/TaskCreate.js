import { Fragment, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const TaskCreate = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Create New Task</h1>
      <div style={{width:350}}>task</div>
    </Fragment>
  ) : (
    <Fragment></Fragment>

  );
};

export default TaskCreate;