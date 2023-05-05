// import { logDOM } from "@testing-library/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login/Login";
import LoginForm from "./components/Login/LoginForm";
import Profile from "./components/Profile/Profile";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      {token ? <Profile /> : <LoginForm />}
    </div>
  
  );
};

export default App;
