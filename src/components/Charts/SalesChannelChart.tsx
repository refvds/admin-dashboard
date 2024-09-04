import { FC } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS, SALES_CHANNEL_DATA } from "../../constants";

interface ISalesChannelProps {
  data: Array<any>;
  xData: string;
}

const SalesChannelChart: FC<ISalesChannelProps> = ({ data, xData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
        <XAxis dataKey={xData} stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31,41,55,0.8)",
            borderColor: "#4b5563",
          }}
          itemStyle={{ color: "#e5e7eb" }}
        />
        <Legend />
        <Bar dataKey={xData} fill="#8884d8">
          {SALES_CHANNEL_DATA.map((_, index) => (
            <Cell key={`cell ${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChannelChart;
