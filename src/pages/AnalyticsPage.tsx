import React from "react";
import PageWrapper from "../components/ui/PageWrapper";
import OverviewCards from "../components/OverviewCards";
import RevenueChart from "../components/Charts/RevenuChart";
import ChartWrapper from "../components/ui/ChartWrapper";
import ChannelPerformanceChart from "../components/Charts/ChannelPerformanceChart";
import ProductPerformanceChart from "../components/Charts/ProductPerformanceChart";
import UserRetentionChart from "../components/Charts/UserRetentionChart";
import CustomerSegmentationChart from "../components/Charts/CustomerSegmentationChart";
import AIPoweredInsights from "../components/AIPoweredInsights";

const AnalyticsPage = () => {
  return (
    <PageWrapper headerTitle="Analytics Dashboard">
      <OverviewCards />
      <RevenueChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ChartWrapper>
          <ChannelPerformanceChart />
        </ChartWrapper>
        <ChartWrapper>
          <ProductPerformanceChart />
        </ChartWrapper>
        <ChartWrapper>
          <UserRetentionChart />
        </ChartWrapper>
        <ChartWrapper>
          <CustomerSegmentationChart />
        </ChartWrapper>
      </div>

      <AIPoweredInsights />
    </PageWrapper>
  );
};

export default AnalyticsPage;
