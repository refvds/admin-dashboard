import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IChartWrapperProps {
  title?: string;
  children: ReactNode;
}

const ChartWrapper: FC<IChartWrapperProps> = ({ title, children }) => {
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
      <div className="h-80">{children}</div>
    </motion.article>
  );
};

export default ChartWrapper;
