import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "../component/SignUp";
import { Login } from "../component/Login";
import { Blogs } from "../component/Blogs";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<SignUp />} />
        <Route path={"/sigin"} element={<Login />} />
        <Route path={"/blogs"} element={<Blogs />} />
      </Routes>
    </>
  );
};
