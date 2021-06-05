import React from "react";
import Nav from "./Nav";
import Footer from './Footer'


const Layout = (props) => <div className="layout">{props.children}</div>;

export { Layout, Nav , Footer};
