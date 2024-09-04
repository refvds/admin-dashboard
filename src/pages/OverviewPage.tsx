import Header from "../components/ui/Header";
import Stats from "../components/ui/Stats";
import Stat from "../components/ui/Stat";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesChart from "../components/Charts/SalesChart";
import { CATEGORY_DATA, SALES_CHANNEL_DATA, SALES_DATA } from "../constants";
import CategoryDistributionChart from "../components/Charts/CategoryDistributionChart";
import SalesChannelChart from "../components/Charts/SalesChannelChart";
import ChartWrapper from "../components/Charts/ChartWrapper";

const OverviewPage = () => {
  return (
    <section className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <section className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <Stats>
          <Stat
            title="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366f1"
          />
          <Stat title="New Users" icon={Users} value="1,234" color="#8b5cf6" />
          <Stat
            title="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#ec4899"
          />
          <Stat
            title="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10b981"
          />
        </Stats>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartWrapper title="Sales Overview">
            <SalesChart data={SALES_DATA} xData="month" yData="sales" />
          </ChartWrapper>
          <ChartWrapper title="Category Distribution">
            <CategoryDistributionChart
              data={CATEGORY_DATA}
              displayData="value"
            />
          </ChartWrapper>
        </div>
        <ChartWrapper title="Sales by Channel">
          <SalesChannelChart data={SALES_CHANNEL_DATA} xData="value" />
        </ChartWrapper>
      </section>
    </section>
  );
};

export default OverviewPage;
