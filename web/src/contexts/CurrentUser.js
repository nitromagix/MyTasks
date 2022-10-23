import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getToken, isAuthenticated } from "../app/auth";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getLoggedInUser = async () => {
      if (isAuthenticated()) {
        const response = await fetch(
          "http://localhost:3333/authentication/token",
          {
            headers: { Authorization: `Bearer ${getToken()}` },
          }
        );
        const user = await response.json();
        setCurrentUser(user);
      }
      else{
        console.log("not authenticated")
        navigate("/login")
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
