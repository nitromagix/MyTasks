import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import API_URL from "../app/api";
import { getToken, isAuthenticated } from "../app/auth";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getLoggedInUser = async () => {
      if (isAuthenticated()) {
        const response = await fetch(
          `${API_URL}/authentication/token`,
          // `${process.env.REACT_APP_SERVER_URL}/authentication/token`,
          {
            headers: { Authorization: `Bearer ${getToken()}` },
          }
        );
        const user = await response.json();
        setCurrentUser(user);
      } else {
        console.log("not authenticated");
        navigate("/login");
      }
    };
    getLoggedInUser();
  }, []);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}

export default CurrentUserProvider;
