import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ANOTHER_COLORS, USER_DEMOGRAPHICS_DATA } from "../../constants";

const UserDemographicsChart = () => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={USER_DEMOGRAPHICS_DATA}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {USER_DEMOGRAPHICS_DATA.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={ANOTHER_COLORS[index % ANOTHER_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31, 41, 55, 0.8)",
            borderColor: "#4B5563",
          }}
          itemStyle={{ color: "#E5E7EB" }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default UserDemographicsChart;
