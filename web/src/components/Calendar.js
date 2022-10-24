import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { taskStatusBgColorClassName } from "../app/colors";
import { trace } from "../nmx";

import moment from "moment";

const Calendar = (props) => {
  const [momentData, setData] = useState(props.moment);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    setData(props.moment);
  }, [props.moment]);

  const taskData = props.taskData;
  const calendarMoment = momentData;

  const daysInThisMonth = () => {
    return new Date(
      momentData.year().toFixed(),
      momentData.month().toFixed() + 1,
      0
    ).getDate();
  };

  const weekdayshort = moment.weekdaysShort();

  let weekdayshortnames = weekdayshort.map((day) => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });

  const firstDayOfMonth = () => {
    let firstDay = moment(calendarMoment).startOf("month").format("d");
    return firstDay;
  };

  const blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <td key={`b${i}`} className="calendar-day empty">
        {""}
      </td>
    );
  }

  const daysTasks = (day) => {
    const t = taskData.map((task, i) => {
      const taskDate = new Date(task.taskDate);
      console.log(taskDate)
      return taskDate.getMonth() === moment(calendarMoment).month() && taskDate.getDate() === day ? (
        <Link key={`${day}-${i}`} to={`/details/${task.uid}`}>
          <div
            className={`task-calendar-day line-clamp ${taskStatusBgColorClassName(
              task
            )}`}
          >
            {task.name}
          </div>
        </Link>
      ) : null;
    });
    return t;
  };

  let daysInMonth = [];
  for (let d = 1; d <= daysInThisMonth(); d++) {
    daysInMonth.push(
      <td key={d} className="calendar-day">
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
    return <tr key={i}>{d}</tr>;
  });

  const left = () => {
    props.scrollLeft();
    forceUpdate();
  };

  const right = () => {
    props.scrollRight();
    forceUpdate();
  };

  return (
    <Fragment>
      <div className="calendar-controls">
        <div className="calendar-scroll-left" onClick={left}>
          &lt;
        </div>
        <div className="calendar-title">
          <h1>Tasks Calendar - {calendarMoment.format("MMMM")}</h1>
        </div>
        <div className="calendar-scroll-right" onClick={right}>
          &gt;
        </div>
      </div>
      <div className="calendar-container">
        <table className="calendar">
          <thead>
            <tr>{weekdayshortnames}</tr>
          </thead>
          <tbody>{daysinmonth}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Calendar;
