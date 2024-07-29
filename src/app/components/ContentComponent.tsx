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
  { type: "Night Out", value: 30 },
];

const config: PieConfig = {
  width: 550,
  height: 550,
  data,
  angleField: "value",
  colorField: "type",
  paddingRight: 80,
  paddingTop: 0,
  paddingBottom: 0,
  innerRadius: 0.5,
  label: {
    text: "value",
    style: {
      fontWeight: "bold",
    },
  },
  legend: {
    color: {
      title: false,
      position: "left",
      rowPadding: 5,
    },
  },
  annotations: [
    {
      type: "text",
      style: {
        text: "Random\nData",
        x: "50%",
        y: "50%",
        textAlign: "center",
        fontSize: 20,
        fontStyle: "bold",
      },
    },
  ],
};

const lineData = data.map((d) => ({
  category: d.type,
  value: d.value,
}));

const lineConfig: LineConfig = {
  height: 200,
  width: 550,
  data: lineData,
  xField: "category",
  yField: "value",
  point: {
    size: 5,
    shape: "circle",
  },
  lineStyle: {
    stroke: "#4f9aff",
  },
  color: "#4f9aff",
};
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

  return (
    <Content className="text-center min-h-[120px] leading-[50px] text-white flex-shrink-0">
      Content za enen dotr chn yu yu hiine gd bla bile?shs
  
      <div className="flex justify-start mt-4 pl-10">
        <div className="flex flex-col space-y-0">
          <div className="flex items-start">
            <Pie {...config} />
            <div className="ml-4">
              <Button onClick={handleAddExpenseClick} className="mb-4">
                Add Expense
              </Button>
              {showInputs && (
                <div className="flex flex-col space-y-2">
                  <InputComponent
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                  />
                  <InputComponent
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Amount"
                  />
                  <Button onClick={handleAddExpense}>Submit</Button>
                </div>
              )}
            </div>
          </div>
          <div className="mt-1 mb-1">
            <span className="pr-9">Select data based on range</span>
            <RangePicker presets={rangePresets} onChange={onRangeChange} />
          </div>
          <Line {...lineConfig} />
        </div>
      </div>
    </Content>
  );
}
export default ContentComponent;
