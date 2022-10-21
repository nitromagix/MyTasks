import { useContext, useState } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link, useNavigate} from "react-router-dom"
import API_URL from "../app/api"

function LoginForm() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`${API_URL}/authentication/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const responseJson = await response.json();

    if (response.status === 200) {
      setCurrentUser(responseJson.user);
      // console.log(responseJson.token)
      localStorage.setItem("token", responseJson.token);
      navigate("/today");
    } else {
      setErrorMessage(responseJson.message);
    }

    // console.log("responseJson", responseJson);
  }

  return (
    <main>
      <h1>Login</h1>
      {errorMessage !== null ? (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
      <h4><Link to="/signup">Sign up</Link></h4>
    </main>
  );
}

export default LoginForm;
