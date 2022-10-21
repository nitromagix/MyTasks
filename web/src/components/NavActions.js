//

import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";

function NavButtons() {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const navigate = useNavigate();

  const navbuttons = () => {
    return user && user.role === "reviewer" ? (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>|
        <button onClick={() => navigate("/create")}>Create Task</button>
      </div>
    ) : null;
  };
  return <Fragment>{navbuttons()}</Fragment>;
}

export default NavButtons;
