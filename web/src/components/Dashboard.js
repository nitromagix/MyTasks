import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

const Dashboard = () => {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;

  return user && user.role === "reviewer" ? (
    <Fragment>
      <h1>Dashboard</h1>
      <div style={{ width: 350 }}></div>
    </Fragment>
  ) : (
    <Fragment>
      {/* <h1>Welcome to MyTasks.</h1>
      <h2>Please <Link to={"/login"}>log in</Link></h2>
      <div style={{width:350}}></div> */}
    </Fragment>
  );
};

export default Dashboard;
