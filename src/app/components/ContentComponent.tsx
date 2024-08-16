import React, { useState } from "react";
// layout
import { Layout, Button, Dropdown, DatePicker, Space } from "antd";
// date picker
import type { TimeRangePickerProps } from "antd";

import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
// chart
import { Pie, PieConfig } from "@ant-design/plots";
import { Line, LineConfig } from "@ant-design/charts";

// input
import InputComponent from "./InputComponent";

import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";

import EmojiButton from "../subComp/EmojiButton";

import SavingGoal from "../charts/SavingGoal";

import PlusSignInput from "../subComp/PlusSignInput";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const { Content } = Layout;
const { RangePicker } = DatePicker;

const rangePresets: TimeRangePickerProps["presets"] = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
];
const data = [
  { type: "Category One", value: 27 },
  { type: "Category Two", value: 25 },
  { type: "Category Three", value: 18 },
  { type: "Category Four", value: 15 },
  { type: "Category Five", value: 10 },
  { type: "Others", value: 5 },
  { type: "Night 1", value: 50 },
  /*{ type: "Category 1", value: 27 },
  { type: "Category 2", value: 25 },
  { type: "Category 3", value: 18 },
  { type: "Category 4", value: 15 },
  { type: "Category 5", value: 10 },
  { type: "Others 2", value: 5 },
  { type: "Night 3", value: 1 },
  { type: "Category 12", value: 27 },
  { type: "Category 22", value: 25 },
  { type: "Category 32", value: 18 },
  { type: "Category 43", value: 15 },
  { type: "Category 54", value: 10 },
  { type: "Others 23", value: 5 },
  { type: "Night 31", value: 1 },
  { type: "Category 59", value: 10 },
  { type: "Others 28", value: 5 },
  { type: "Night 37", value: 1 },
  { type: "Category 16", value: 27 },
  { type: "Category 25", value: 25 },
  { type: "Category 37", value: 18 },
  { type: "Category 49", value: 15 },
  { type: "Category 59", value: 10 },
  { type: "Others 20", value: 5 },
  { type: "Night 39", value: 1 },
  { type: "分类一", value: 27 },
  { type: "分类二", value: 25 },
  { type: "分类三", value: 18 },
  { type: "分类四", value: 15 },
  { type: "分类五", value: 10 },
  { type: "其他", value: 5 }, */
];

const ContentComponent: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [showInputs, setShowInputs] = useState<boolean>(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(Number(value));
  };

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
    } else {
      console.log("Clear");
    }
  };

  const handleAddExpenseClick = () => {
    setShowInputs(true);
  };

  const handleAddExpense = () => {
    setCategory("");
    setAmount(0);
    setShowInputs(false);
  };

  const [goalData, setGoalData] = useState<{[key: string]: number}>({});

  const addSavingGoal = (name: string, amount: number) => {
    setGoalData(prevData => ({
      ...prevData,
      [name]: amount
    }))
  };
  const removeSavingGoal = (name: string) => {
    setGoalData(prevData => {
      const newData = {...prevData};
      delete newData[name];
      return newData;
    })
  }

  


  return (
    <Content className="w-screen h-full flex">
      <div className="flex w-full h-full">
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center pt-mx-auto">
            <div className="box-content bg-white grid items-center justify-center border-2 rounded-lg w-full h-[550px]">
              <h1 className="font-bold text-xl mb-4 mt-4 text-center">
                Expense per day
              </h1>
              <hr className="h-px bg-gray-200 w-72 mx-auto"></hr>
              <PieChart data={data} />
            </div>
            <div className="pt-3">
              <div className="flex flex-col box-content bg-white items-center justify-center border-2 rounded-lg">
                <h1 className="font-bold text-xl mb-4 mt-4">
                  Expense by range
                </h1>
                <hr className="h-px bg-gray-200 w-72 mx-auto mb-4"></hr>
                <RangePicker presets={rangePresets} onChange={onRangeChange} />
                <LineChart data={data} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between shrink m-3 ">
              <div className="container box-content h-96 w-96 border-2 bg-white rounded-lg p-4 overflow-y-auto scrollbar-hide">
                <h1 className="font-bold text-xl text-center mb-4">
                  Categories
                </h1>
                <hr className="h-px bg-gray-200 w-72 mx-auto mb-4"></hr>
                <EmojiButton />
              </div>
              <div className="box-content w-[50%] h-96 mr-10 border-2 bg-white rounded-lg p-4">
                <h1 className="font-bold text-xl ml-4 mb-4 text-center">
                  Ask AI
                </h1>
                <hr className="h-px bg-gray-200 w-72 mx-auto mb-4"></hr>
                end AI shaan pesda, ai-d prompt udhud saving goal bolon expense
                ruu add hiih --"Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum."
              </div>
            </div>
            {/* <div className="flex justify-around m-10 shrink "></div> */}
            <div className="pl-3 pt-16">
              <div className="box-content w-[95%] h-[413px] mr-10 border-2 bg-white rounded-lg p-4">
                <div className="flex flex-row items-center justify-between">
                  <h1 className="font-bold text-xl ml-4 mb-4 flex-grow text-center">
                    Saving Goal
                  </h1>
                  <div className="flex items-center space-x-2">
                    <Popup
                      trigger={
                        <button
                          className="w-13 h-12"
                          onClick={() => console.log("plus clicked")}
                        >
                          <img
                            src="/assets/icons/plus.png"
                            alt="plus sign"
                            className="w-10 h-10"
                          />
                        </button>
                      }
                      position="left center"
                    >
                      <div>
                        <PlusSignInput
                          addSavingGoal={addSavingGoal}
                          removeSavingGoal={removeSavingGoal}
                          currentGoals={goalData}
                        />
                      </div>
                    </Popup>
                    <button onClick={() => console.log("minus clicked")}>
                      <img
                        src="/assets/icons/minus.png"
                        alt="minus sign"
                        className="w-10"
                      />
                    </button>
                  </div>
                </div>
                <hr className="h-px bg-gray-200 w-96 mx-auto mb-4"></hr>
                <SavingGoal goalData={[goalData]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
export default ContentComponent;

{
  /**/
}
