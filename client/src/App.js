import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import SavedNews from "./Components/SavedNews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/saved" element={<SavedNews />} />
      </Routes>
    </Router>
  );
}

export default App;
