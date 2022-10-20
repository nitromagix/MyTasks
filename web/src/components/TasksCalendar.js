import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const TasksCalendar = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <Fragment>
      <h1>Tasks Calendar</h1>
      {/* <Calendar onChange={setDate} value={date} /> */}
      <Calendar />
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TasksCalendar;