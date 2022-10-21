import { Fragment, useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
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
  useEffect(() => {
    async function fetchData() {
      dispatch(getTaskDataThunk);
    }
    fetchData();
  }, []);

  const buildTaskView = () => {
    const t = [];
    for (let i in taskData) {
      t.push(taskData[i]);
    }
    return t;
  };

  const allTasks = buildTaskView();

  const daysInThisMonth = () => {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  };

  const state = {
    dateObject: moment(),
  };

  const weekdayshort = moment.weekdaysShort();

  let weekdayshortname = weekdayshort.map((day) => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  const firstDayOfMonth = () => {
    let dateObject = state.dateObject;
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  const blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <td
        style={{
          width: 50,
          height: 100,
          border: 1,
          borderColor: "black",
          borderStyle: "solid",
        }}
        className="calendar-day empty"
      >
        {""}
      </td>
    );
  }

  const daysTasks = (day) => {
    const t =  allTasks.map((task) => {
      const createdOn = new Date(task.createdAt);
      return createdOn.getDate() === day ? <Link key={day} to={`/details/${task.uid}`}><div style={{backgroundColor:"orange"}}>{task.name}</div></Link> : null;
    });
    return t;
  };

  let daysInMonth = [];
  for (let d = 1; d <= daysInThisMonth(); d++) {
    daysInMonth.push(
      <td
        key={d}
        style={{
          width: 50,
          height: 100,
          border: 1,
          borderColor: "black",
          borderStyle: "solid",
          verticalAlign: "top",
        }}
        className="calendar-day"
      >
        <span>{d}</span>
        {daysTasks(d)}
      </td>
    );
  }

  var totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) {
      // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr>{d}</tr>;
  });

  return user && user.role === "reviewer" ? (
    <Fragment>
      <h1>Tasks Calendar</h1>
      {/* <Calendar onChange={setDate} value={date} /> */}
      {/* {daysInThisMonth()} */}
      <table className="calendar-day">
        <thead>
          <tr>{weekdayshortname}</tr>
        </thead>
        <tbody>{daysinmonth}</tbody>
      </table>
    </Fragment>
  ) : (
    <Navigate to={"/login"}></Navigate>

  );
};

export default TasksCalendar;
