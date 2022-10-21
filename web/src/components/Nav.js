import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

const Nav = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Dashboard</Link>
        </li> */}
        <li>
          <Link to="/today">Today's Tasks</Link>
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
    </nav>
  ) : (
    <nav></nav>
  );
};
export default Nav;
