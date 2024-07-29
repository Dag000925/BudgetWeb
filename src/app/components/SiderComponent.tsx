import React from "react";
import { Layout } from "antd";

const { Sider } = Layout;

const SiderComponent: React.FC = () => (
  <Sider
    reverseArrow={true}
    collapsible={true}
    width="25%"
    collapsedWidth={0}
    breakpoint="xs"
    zeroWidthTriggerStyle={{ backgroundColor: 'white', color: 'black', top: '0px' }}
    theme='light'
    className="text-center leading-[100px] text-black"
  >
    Sider
  </Sider>
);

export default SiderComponent;
