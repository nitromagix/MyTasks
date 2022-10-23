import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUser } from "../contexts/CurrentUser";
import {
  getTaskData,
  getTaskDataThunk,
  updateTaskDataThunk,
} from "../app/taskSlice";

import { taskStatusGbColorClassName } from "../app/colors";

const TasksToday = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const dispatch = useDispatch();
  const taskData = useSelector(getTaskData);

  useEffect(() => {
    async function fetchData() {
      dispatch(getTaskDataThunk);
    }
    fetchData();
  }, []);

  const taskView = taskData.map((task, i) => {

    const taskDate = new Date(task.taskDate)
    if (taskDate > Date.now())
      return null;
    return (
      <Link key={i} to={`/details/${task.uid}`}>
        <div className="task">
          <table>
            <tbody>
              <tr>
                <td
                  className={`task-status ${taskStatusGbColorClassName(task)}`}
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

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Today's Tasks</h1>
      {taskView}
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksToday;
