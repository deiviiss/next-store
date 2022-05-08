import React from "react";
import "@styles/Layout.scss";
import "@styles/_animations.scss";

const Layout = ({ children }) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;
