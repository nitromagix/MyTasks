//

import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import TaskCreate from "./TaskCreate";
import EditModal from "./EditModal";
import CreateTasksModal from "./TaskCreateModal";

function NavButtons() {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const navigate = useNavigate();

  function modalSave(e) {}

  const navbuttons = () => {
    return user && user.role === "user" ? (
      <div className="nav-actions clearfix">
        <div className="float-left">
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div  className="float-right">
          <CreateTasksModal onSave={modalSave} />
        </div>
      </div>
    ) : null;
  };
  return <Fragment>{navbuttons()}</Fragment>;
}

export default NavButtons;
