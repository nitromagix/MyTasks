import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

const Nav = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "user" ? (
    <nav>
      <div>
        <ul style={{ marginRight: 10 }}>
          {/* <li>
          <Link to="/">Dashboard</Link>
        </li> */}
          <li>
            <Link to="/today">Today</Link>
          </li>
          <li>
            <Link to="/all">All Tasks</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/kanban">Kanban</Link>
          </li>
        </ul>
      </div>
    </nav>
  ) : (
    <nav></nav>
  );
};
export default Nav;
