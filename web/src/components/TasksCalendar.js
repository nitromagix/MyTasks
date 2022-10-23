import { Fragment, useContext, useEffect, useState, useRef, useCallback } from "react";
import { Link, Navigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { taskStatusGbColorClassName } from "../app/colors";
import Calendar from "./Calendar";
import { trace } from "../nmx";
import {
  getTaskData,
  getTaskDataThunk,
  updateTaskDataThunk,
} from "../app/taskSlice";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const TasksCalendar = () => {
  const userContext = useContext(CurrentUser);
  const dispatch = useDispatch();
  const user = userContext.currentUser;
  const taskData = useSelector(getTaskData);
  const [momentState, setMomentState] = useState(moment());


  useEffect(() => {
    async function fetchData() {
      dispatch(getTaskDataThunk);
    }
    fetchData();
  }, []);

  const scrollLeft = () => {
    setMomentState(momentState.subtract(1, "M"));
    console.log(momentState);
  };

  const scrollRight = () => {
    setMomentState(momentState.add(1, "M"));
    console.log(momentState);
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
