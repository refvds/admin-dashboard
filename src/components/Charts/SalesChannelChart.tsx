import { motion } from "framer-motion";
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
  title: string;
  data: Array<any>;
  xData: string;
}

const SalesChannelChart: FC<ISalesChannelProps> = ({ title, data, xData }) => {
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
        <ResponsiveContainer>
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
                <Cell
                  key={`cell ${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.article>
  );
};

export default SalesChannelChart;
