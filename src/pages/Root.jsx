import React from "react";
import { Outlet } from "react-router-dom";
import DevNav from "../components/DevNav/DevNav";
const Root = () => {
  return (
    <>
      <DevNav />
      <Outlet />
    </>
  );
};

export default Root;
