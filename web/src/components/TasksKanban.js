import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const TasksKanban = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  const buildKanban = () => {
    return (
      <div className="kanban">
        <div className="kanban-todo">
          <h3>ToDo</h3>
          <div>
            <h4>Task 1</h4>
          </div>
          <div>
            <h4>Task 2</h4>
          </div>
        </div>
        <div className="kanban-inprogress">
          <h3>In Progress</h3>
          <div>
            <h4>Task 3</h4>
          </div>
          <div>
            <h4>Task 4</h4>
          </div>
        </div>
        <div className="kanban-completed">
          <h3>Completed</h3>
          <div>
            <h4>Task 5</h4>
          </div>
          <div>
            <h4>Task 6</h4>
          </div>
        </div>
      </div>
    );
  };

  return user && user.role === "reviewer" ? (
    <Fragment>
      <h1>Tasks Kanban</h1>
      {buildKanban()}
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksKanban;
