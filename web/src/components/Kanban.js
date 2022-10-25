import { Fragment } from "react";
import { Link } from "react-router-dom";
import { taskStatusBgColorClassName } from "../app/taskStatus";

const Kanban = (props) => {
  const tasks = props.data;

  const toDoTasks = (predicate) => {
    const t = tasks.map((task, i) => {
      return predicate(task) ? (
        <Fragment>
          <Link className="kanban-task-link" key={`td-${i}`} to={`/details/${task.uid}`}>
            <div
              className={`kanban-task line-clamp ${taskStatusBgColorClassName(
                task
              )}`}
            >
              {task.name}
            </div>
          </Link>
          <hr />
        </Fragment>
      ) : null;
    });
    return t;
  };

  const toDoPredicate = (task) => {
    return !task.startedOn && !task.completedOn;
  };

  const inProgressPredicate = (task) => {
    return task.startedOn && !task.completedOn;
  };

  const completedPredicate = (task) => {
    return task.startedOn && task.completedOn;
  };

  const buildKanban = () => {
    return (
      <div className="kanban">
        <div className="kanban-column">
          <h3>To Do</h3>
          {toDoTasks(toDoPredicate)}
        </div>
        <div className="kanban-column">
          <h3>In Progress</h3>
          {toDoTasks(inProgressPredicate)}
        </div>
        <div className="kanban-column">
          <h3>Completed</h3>
          {toDoTasks(completedPredicate)}
        </div>
      </div>
    );
  };

  return <Fragment>{buildKanban()}</Fragment>;
};

export default Kanban;
