import React from "react";

//import { Button } from 'antd';
import NavBar from "./home/NavBar";
import About from "./home/About";
import Feature from "./home/Feature";
import Contact from "./home/Contact";
import Login from "./home/Login";

const Home: React.FC = () => {
  return (
    <>
      <NavBar/>
      <About/>
      <Feature/>
      <Contact/>
      <Login/>
    </>
  );
};

export default Home;
