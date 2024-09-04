import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import { FC } from "react";
import { COLORS } from "../../constants";

interface ICDCProps {
  title: string;
  data: Array<any>;
  displayData: string;
}

const CategoryDistributionChart: FC<ICDCProps> = ({
  title,
  data,
  displayData,
}) => {
  return (
    <motion.article
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border rounded-xl p-6 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {title && (
        <h2 className="text-lg font-medium mb-4 text-gray-100">{title}</h2>
      )}
      <div className="h-80">
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
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
      </div>
    </motion.article>
  );
};

export default CategoryDistributionChart;
