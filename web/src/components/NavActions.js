//

import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import EditModal from "./EditModal";
import CreateTasksModal from "./TaskCreateModal";
// import backImage from "../back2.png";

function NavButtons() {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const navigate = useNavigate();

  function modalSave(e) {}

  const navbuttons = () => {
    return user && user.role === "user" ? (
      <div className="nav-actions clearfix">
        <div className="nav-actions-back float-left">
        <button className="nav-actions-back-button button-link" onClick={() => navigate(-1)}>{"\u25C2"}</button>
          {/* <img src={backImage} alt="back" onClick={() => navigate(-1)} /> */}
          {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </div>
        <div className="nav-actions-modal float-right">
          <CreateTasksModal onSave={modalSave} />
        </div>
      </div>
    ) : null;
  };
  return <Fragment>{navbuttons()}</Fragment>;
}

export default NavButtons;
