import React, { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ISalesItem } from "../../types";

interface ISTCProps {
  data: Array<ISalesItem>;
  xData: string;
  yData: string;
}

const SalesTrendChart: FC<ISTCProps> = ({ data, xData, yData }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey={xData} stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31, 41, 55, 0.8)",
            borderColor: "#4B5563",
          }}
          itemStyle={{ color: "#E5E7EB" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey={yData}
          stroke="#8B5CF6"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesTrendChart;
