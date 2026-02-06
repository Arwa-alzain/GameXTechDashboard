import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Login setIsLoggedIn={setIsLoggedIn}/>} path="/login"/>
        <Route element={isLoggedIn ? (<DashboardLayout setIsLoggedIn={setIsLoggedIn}/>) : (<Navigate to="/login" />)} path="/dashboard"/>
        <Route element={<Navigate to="/login" replace />} path="/"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
