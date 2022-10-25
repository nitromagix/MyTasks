import { Fragment, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentUser } from "../contexts/CurrentUser";
import { getTasks, getTasksDataThunk } from "../app/tasksSlice";
import Kanban from "./Kanban";

const TasksKanban = () => {
  const userContext = useContext(CurrentUser);
  const dispatch = useDispatch();
  const user = userContext.currentUser;
  const tasks = useSelector(getTasks);

  useEffect(() => {
    async function fetchData() {
      dispatch(getTasksDataThunk);
    }
    fetchData();
  }, []);

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Tasks Kanban</h1>
      <Kanban data={tasks} />
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksKanban;
