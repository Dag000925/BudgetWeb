'use client'
import React from "react";
import { Layout } from "antd";
import Marquee from "react-fast-marquee";
import Message from "../subComp/Message";
import { useRouter } from 'next/navigation'

const { Header } = Layout;


const HeaderComponent: React.FC = () => {
  const router = useRouter()

  return (
    <Header className="!bg-white flex flex-row">
      <div className="text-black text-3xl flex justify-between items-center w-full">
        <div className="w-1/3">
          <Marquee direction="right" className="">
            <Message />
          </Marquee>
        </div>
        <button 
          type="button"
          onClick={() => router.push('/')}
          className="size-5 ml-auto">
          <img src="/assets/icons/log.png" alt="Log icon" />
        </button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
