import './App.css';
import ProfilePage from "./profilepage/Profilepage";
import React, { useState, useContext } from "react";
import StepOne from './instructions/StepOne';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
      <Routes>
            <Route path="/profilepage" element={<ProfilePage/>} />
            <Route path="/stepone" element={<StepOne />} />
      </Routes>
    </div>
  );
}

export default App;
