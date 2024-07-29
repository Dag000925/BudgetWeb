import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderComponent: React.FC = () => (
  <Header className="text-left text-white !h-16 !bg-white">
    Greeting message based on the time
  </Header>
);

export default HeaderComponent;