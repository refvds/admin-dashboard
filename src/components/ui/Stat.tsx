import { FC } from "react";
import { TypeIcon } from "lucide-react";
import { motion } from "framer-motion";

interface IStatProps {
  title: string;
  icon: typeof TypeIcon;
  value: number | string;
  color: string;
}

const Stat: FC<IStatProps> = ({ title, icon: Icon, value, color }) => {
  return (
    <motion.article
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-700 cursor-pointer"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    >
      <article className="px-4 py-5 sm:p-6">
        <header className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          <h3>{title}</h3>
        </header>
        <p className=" mt-1 text-3xl font-semibold text-gray-100">{value}</p>
      </article>
    </motion.article>
  );
};

export default Stat;
