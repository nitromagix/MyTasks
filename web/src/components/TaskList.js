import { Fragment } from "react";
import { Link } from "react-router-dom";

import { taskStatusBgColorClassName } from "../app/colors";
import { dateToMMDDYYYY } from "../nmx";

const TasksToday = (props) => {
  const buildTaskView = (tasks) => {
    return tasks.map((task, i) => {
      return (
        <Link key={i} to={`/details/${task.uid}`}>
          <div className="task">
            <table>
              <tbody>
                <tr>
                  <td
                    className={`task-status ${taskStatusBgColorClassName(
                      task
                    )}`}
                  ></td>
                  <td>
                    <div className="task-content ">
                      <h3 className="line-clamp">{task.name}</h3>
                      <p className="line-clamp">{task.description}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>
      );
    });
  };

  const taskView = buildTaskView(props.tasks);

  return (
    <Fragment>
      {/* <h1>Today's Tasks - {dateToMMDDYYYY(props.now)}</h1> */}
      <h1>All Tasks</h1>
      {taskView}
    </Fragment>
  );
};

export default TasksToday;
