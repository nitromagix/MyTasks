import { Fragment, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";
import { trace } from "../nmx";

const TaskCreate = () => {
  const userContext = useContext(CurrentUser);
  const navigate = useNavigate();
  const user = userContext.currentUser;

  const [task, setTask] = useState({
    name: "",
    description: "",
    startOn: "",
    completedOn: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    // await fetch(`http://localhost:5000/places`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // });

    navigate("/today");
  }

  return user && user.role === "user" ? (
    <Fragment>
      <h1>Create New Task</h1>
      <div style={{ width: 350 }}>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            // value=""
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            // value=""
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="form-control"
            id="description"
            name="description"
          />
        </div>
        {/* <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, pic: e.target.value })}
              className="form-control"
              id="pic"
              name="pic"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, city: e.target.value })}
              className="form-control"
              id="city"
              name="city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, state: e.target.value })}
              className="form-control"
              id="state"
              name="state"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, cuisines: e.target.value })}
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div> */}
        {/* <br />
          <button type="submit">Save</button>
          <button type="reset">Cancel</button>
          <br /> */}
        {/* <input className="btn btn-primary" type="submit" value="Add Place" /> */}
        {/* </form> */}
      </div>
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

export default TaskCreate;
