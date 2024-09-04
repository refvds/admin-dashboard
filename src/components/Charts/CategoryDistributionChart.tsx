import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FC } from "react";
import { COLORS } from "../../constants";

interface ICDCProps {
  data: Array<any>;
  displayData: string;
}

const CategoryDistributionChart: FC<ICDCProps> = ({ data, displayData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey={displayData}
          label={({ category, percent }) =>
            `${category} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((_, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31, 41, 55, 0.8)",
            borderColor: "#4b5563",
          }}
          itemStyle={{ color: "#e5e7eb" }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryDistributionChart;
