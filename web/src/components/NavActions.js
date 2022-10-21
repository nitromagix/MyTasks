//

import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import TaskCreate from "./TaskCreate"
import EditModal from "./EditModal"

function NavButtons() {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const navigate = useNavigate();

  const navbuttons = () => {
    return user && user.role === "user" ? (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <div>
        <EditModal form={<TaskCreate />} />
      </div>
      </div>
    ) : null;
  };
  return <Fragment>{navbuttons()}</Fragment>;
}

export default NavButtons;
