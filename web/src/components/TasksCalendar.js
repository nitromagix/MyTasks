import { Fragment, useContext, useEffect, useState } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import Calendar from "./Calendar";
import { getTasks, getTasksDataThunk } from "../app/tasksSlice";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const TasksCalendar = () => {
  const userContext = useContext(CurrentUser);
  const dispatch = useDispatch();
  const user = userContext.currentUser;
  const taskData = useSelector(getTasks);
  const [momentState, setMomentState] = useState(moment());

  useEffect(() => {
    async function fetchData() {
      dispatch(getTasksDataThunk);
    }
    fetchData();
  }, []);

  const scrollLeft = () => {
    setMomentState(momentState.subtract(1, "M"));
  };

  const scrollRight = () => {
    setMomentState(momentState.add(1, "M"));
  };

  return user && user.role === "user" ? (
    <Fragment>
      <span key={momentState}>
        <Calendar
          moment={momentState}
          taskData={taskData}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />
      </span>
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksCalendar;
