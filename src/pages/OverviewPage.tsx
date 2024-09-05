import SalesChart from "../components/Charts/SalesChart";
import {
  CATEGORY_DATA,
  OVERVIE_PAGE_STATS_DATA,
  SALES_CHANNEL_DATA,
  SALES_DATA,
} from "../constants";
import CategoryDistributionChart from "../components/Charts/CategoryDistributionChart";
import SalesChannelChart from "../components/Charts/SalesChannelChart";
import ChartWrapper from "../components/ui/ChartWrapper";
import PageWrapper from "../components/ui/PageWrapper";

const OverviewPage = () => {
  return (
    <PageWrapper headerTitle="Overview" stats={OVERVIE_PAGE_STATS_DATA}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartWrapper title="Sales Overview">
          <SalesChart data={SALES_DATA} xData="month" yData="sales" />
        </ChartWrapper>
        <ChartWrapper title="Category Distribution">
          <CategoryDistributionChart data={CATEGORY_DATA} displayData="value" />
        </ChartWrapper>
      </div>
      <ChartWrapper title="Sales by Channel">
        <SalesChannelChart data={SALES_CHANNEL_DATA} xData="value" />
      </ChartWrapper>
    </PageWrapper>
  );
};

export default OverviewPage;
