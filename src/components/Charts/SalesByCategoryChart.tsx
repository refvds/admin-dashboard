import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const salesByCategory = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home & Garden", value: 200 },
  { name: "Books", value: 100 },
  { name: "Others", value: 150 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];
const SalesByCategoryChart = () => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={salesByCategory}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {salesByCategory.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

export default SalesByCategoryChart;
