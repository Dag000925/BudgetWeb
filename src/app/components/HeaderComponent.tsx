import React from "react";
import { Layout } from "antd";
import Marquee from "react-fast-marquee";
import Message from "../subComp/Message";

const { Header } = Layout;

const HeaderComponent: React.FC = () => (
  <Header className="!bg-white flex flex-row">
    <div className="text-black text-3xl flex justify-between items-center w-full">
      <div className="w-1/3">
        <Marquee direction="right" className="">
          <Message/>
        </Marquee>
      </div>
      <button className="size-5 ml-auto">
        <img src="/assets/icons/log.png" alt="Log icon" />
      </button>
    </div>
  </Header>
);

export default HeaderComponent;
