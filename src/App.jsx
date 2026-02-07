import React, { useState } from "react";
import Home from "./assets/Home";
import NewGoal from "./assets/NewGoal";
import GoalsPage from "./assets/GoalsPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./assets/ModalContext";
import Modal from "./assets/Modal";
import GoalManager from "./assets/GoalManager";
import Timing from "./assets/Timing";

function App() {
  return (
    <>
      <div dir="rtl">
        {/* <Home /> */}
        {/* <NewTask /> */}
        <ModalProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/NewGoal" element={<NewGoal />}></Route>
              <Route path="/GoalsPage" element={<GoalsPage />}></Route>
              <Route path="/GoalManager" element={<GoalManager />}></Route>
              <Route path="/Timing" element={<Timing />}></Route>
            </Routes>
          </Router>
          <Modal />
        </ModalProvider>
      </div>
    </>
  );
}

export default App;
