import React from "react";
import Sidebar from "../Sidebar";
import "./style.css";
const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <div>
        <h1></h1>
      </div>
    </React.Fragment>
  );
};

export default Layout;
