import React, { useRef } from "react";

import { Pie, PieConfig } from "@ant-design/plots";

interface PieChartProps {
  data: { type: string; value: number }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<any>(null);

  const config: PieConfig = {
    width: 450,
    height: 450,
    data,
    angleField: "value",
    colorField: "type",
    paddingRight: 80,
    paddingTop: 0,
    paddingBottom: 0,
    innerRadius: 0.7,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    //legend: false,
    // make custom legend
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    
    annotations: [
      {
        type: "text",
        style: {
          text: "Eniig yanzlah",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 20,
          fontStyle: "bold",
        },
      },
    ],
  };

  return <Pie {...config} />;
};

export default PieChart;
