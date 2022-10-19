import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {

  return (
    <Fragment>
      <h1>Welcome to MyTasks.</h1>
      <h2>Please <Link to={"/login"}>log in</Link></h2>
      <div style={{width:450}}></div>
    </Fragment>
  );
};

export default LandingPage;
