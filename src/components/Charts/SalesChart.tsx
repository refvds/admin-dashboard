import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { FC } from "react";

interface ISalesChart {
  data: Array<any>;
  xData: string;
  yData: string;
}

const SalesChart: FC<ISalesChart> = ({ data, xData, yData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
        <XAxis dataKey={xData} />
        <YAxis stroke="#9ca9af" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31, 41, 55, 0.8)",
            borderColor: "#4b5563",
          }}
          itemStyle={{ color: "#e5e7eb" }}
        />
        <Line
          type="monotone"
          dataKey={yData}
          stroke="#6366f1"
          strokeWidth={3}
          dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
          activeDot={{ r: 8, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
