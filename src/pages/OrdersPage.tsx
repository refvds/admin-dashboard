import PageWrapper from "../components/ui/PageWrapper";
import { ORDER_PAGE_STATS_DATA } from "../constants";
import ChartWrapper from "../components/ui/ChartWrapper";
import { DailyOrdersChart } from "../components/Charts/DailyOrdersChart";
import OrderDistributionChart from "../components/Charts/OrderDistributionChart";
import OrdersTable from "../components/OrdersTable";

const OrdersPage = () => {
  return (
    <PageWrapper headerTitle="Orders" stats={ORDER_PAGE_STATS_DATA}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ChartWrapper title="Daily Orders">
          <DailyOrdersChart />
        </ChartWrapper>
        <OrderDistributionChart />
      </div>

      <OrdersTable />
    </PageWrapper>
  );
};

export default OrdersPage;
