import React, { FC } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IUserGrowthItem } from "../../types";

interface IGrowthChartProps {
  data: Array<IUserGrowthItem>;
  xData: string;
  yData: string;
}

const GrowthChart: FC<IGrowthChartProps> = ({ data, xData, yData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <Line
          type="monotone"
          dataKey={yData}
          stroke="#8B5CF6"
          strokeWidth={2}
          dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GrowthChart;
