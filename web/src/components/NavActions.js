//

import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function NavButtons() {
  const navigate = useNavigate();

  const navbuttons = () => {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>|
        <button onClick={() => navigate("/create")}>Create Task</button>
      </div>
    );
  };
  return <Fragment>{navbuttons()}</Fragment>;
}

export default NavButtons;
