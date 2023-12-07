import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Link to="/">SignUp</Link>
      <Link to="/signin">SignIn</Link>
      <Link to="/blogs">BLOGS</Link>
    </>
  );
};
