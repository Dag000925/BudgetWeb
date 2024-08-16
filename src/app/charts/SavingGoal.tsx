import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle
} from "recharts";

import PlusSignInput from "../subComp/PlusSignInput";

interface SavingGoalProps {
  goalData: { [key: string]: number }[];
}

const colors = [
  "#8884d8", "#82ca9d", "#ffc658", "#ff7300",
  "#ffbb28", "#00c49f", "#0088fe", "#d0ed57",
];

const SavingGoal: React.FC<SavingGoalProps> = ({ goalData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={goalData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 100,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="category" dataKey="name" />
        <XAxis type="number" />
        <Tooltip />
        <Legend />
        {Object.keys(goalData[0])
          .filter(key => key !== 'name')
          .map((key, index) => (
            <Bar key={key} dataKey={key} fill={colors[index % colors.length]} 
            />
          ))}
      </BarChart>
    </ResponsiveContainer>
  )
};

export default SavingGoal;
