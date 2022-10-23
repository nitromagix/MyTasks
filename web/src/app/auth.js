//

const TOKEN_KEY = "token";
const getToken = () => localStorage.getItem(TOKEN_KEY);
const isAuthenticated = () => getToken() !== null; // I thought about validating the token right here in the app
const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { TOKEN_KEY, getToken, isAuthenticated, setToken, logout };
