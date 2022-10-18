import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentUserProvider from "./contexts/CurrentUser";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
