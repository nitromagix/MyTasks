import { useState, useEffect, useParams, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../app/api";

function SignUpForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${API_URL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    navigate(`/login`);
  }

  return (
    <Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-row">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
          </div>
          <div className="form-row">
            <input
              required
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>

          <div className="form-row">
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="form-row">
            <input
              required
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              className="form-control"
              id="lastName"
              name="lastName"
            />
          </div>

          <div className="form-row">
            <label htmlFor="setemail">Email</label>
          </div>
          <div className="form-row">
            <input
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
              id="setemail"
              name="setemail"
            />
          </div>

          <div className="form-row">
            <label htmlFor="setpassword">Password</label>
          </div>
          <div className="form-row">
            <input
              type="password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="form-control"
              id="setpassword"
              name="setpassword"
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>
    </Fragment>
  );
}

export default SignUpForm;
