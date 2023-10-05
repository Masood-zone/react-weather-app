import React from "react";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Task from "../components/tasks/task";

function MainApp() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="tasks" element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainApp;
