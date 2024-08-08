"use client";
import React from "react";
import { Layout } from "antd";
import HeaderComponent from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";
//import SiderComponent from "../components/SiderComponent";
//import FooterComponent from "../components/FooterComponent";
import { Liquid, LiquidConfig } from "@ant-design/plots";

const { Sider } = Layout;

//const percent = 0.3;
/* const config: LiquidConfig = {
  percent: 0.9,
  style: {
    shape: "pin",
    textFill: "#fff",
    outlineBorder: 4,
    outlineDistance: 8,
    waveLength: 128,
  },
}; */

const Main: React.FC = () => (
  <div className="min-h-screen flex">
    <Layout className="flex-grow overflow-hidden w-full">
      <HeaderComponent />
      <Layout>
        <ContentComponent />
        {/* <SiderComponent /> */}
        
      </Layout>
      {/* <FooterComponent /> */}
    </Layout>
  </div>
);

export default Main;

{
  /*
"use client";
import React from "react";
//import './index.css';
import { Layout, Button } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Main: React.FC = () => (
  <div className="min-h-screen flex">
    <Layout className="flex-grow overflow-hidden w-full">
      <Header className="text-left text-white !h-16 !bg-blue-500">
        Greeting message based on the time
      </Header>
      <Layout>
        <Content className="text-center min-h-[120px] leading-[100px] text-white bg-blue-700">
          Content za enen dotr chn yu yu hiine gd bla bile?shs
        </Content>
        <Sider
          reverseArrow = {true}
          collapsible={true}
          width="25%"
          collapsedWidth={0}
          zeroWidthTriggerStyle={{backgroundColor: 'white', color: 'black', top: '0px'}}
          theme='light'
          className="text-center leading-[100px] text-black"
        >
          Sider
        </Sider>
      </Layout>
      {/*<Footer className="text-center text-white h-10 !bg-purple-100">
        Footer
      </Footer>
      </Layout>
      </div>
    );
    
    export default Main;
*/
}
