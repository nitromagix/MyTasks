import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentUserProvider from "./contexts/CurrentUser";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import TasksToday from "./components/TasksToday";
import TasksAll from "./components/TasksAll";
import TasksCalendar from "./components/TasksCalendar";
import TasksKanban from "./components/TasksKanban";
import TaskCreate from "./components/TaskCreate";

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/today" element={<TasksToday />} />
            <Route path="/all" element={<TasksAll />} />
            <Route path="/calendar" element={<TasksCalendar />} />
            <Route path="/kanban" element={<TasksKanban />} />
            <Route path="/create" element={<TaskCreate />} />
            {/* <Route path="*" element={<NoPage />} /> */}
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
