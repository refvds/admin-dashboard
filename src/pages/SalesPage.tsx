import DailySalesTrendChart from "../components/Charts/DailySalesTrendChart";
import SalesByCategoryChart from "../components/Charts/SalesByCategoryChart";
import SalesOverviewChart from "../components/Charts/SalesOverviewChart";
import ChartWrapper from "../components/ui/ChartWrapper";
import PageWrapper from "../components/ui/PageWrapper";
import { SALES_PAGE_STATS_DATA } from "../constants";

const SalesPage = () => {
  return (
    <PageWrapper headerTitle="Sales Dashboard" stats={SALES_PAGE_STATS_DATA}>
      <SalesOverviewChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ChartWrapper title="Sales by Category">
          <SalesByCategoryChart />
        </ChartWrapper>
        <ChartWrapper title="Daily Sales Trend">
          <DailySalesTrendChart />
        </ChartWrapper>
      </div>
    </PageWrapper>
  );
};

export default SalesPage;
