import React from 'react';

import { Line, LineConfig } from "@ant-design/charts";

interface LineChartProps {
    data: {type: string, value: number}[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
    const lineConfig: LineConfig = {
        height: 200,
        width: 900,
        data,
        xField: "type",
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
    
      return <Line {...lineConfig} />;
};

export default LineChart;