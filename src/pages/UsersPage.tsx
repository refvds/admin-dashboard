import GrowthChart from "../components/Charts/GrowthChart";
import UserActivityHeatmapChart from "../components/Charts/UserActivityHeatmapChart";
import UserDemographicsChart from "../components/Charts/UserDemographicsChart";
import ChartWrapper from "../components/ui/ChartWrapper";
import PageWrapper from "../components/ui/PageWrapper";
import UserTabble from "../components/UserTabble";
import { USER_GROWTH_DATA, USER_PAGE_STATS_DATA } from "../constants";

const UsersPage = () => {
  return (
    <PageWrapper headerTitle="Users" stats={USER_PAGE_STATS_DATA}>
      <UserTabble />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <ChartWrapper title="User Growth">
          <GrowthChart data={USER_GROWTH_DATA} xData="month" yData="users" />
        </ChartWrapper>
        <ChartWrapper title="User Activity Heatmap">
          <UserActivityHeatmapChart />
        </ChartWrapper>
      </div>
      <ChartWrapper title="User Demographics">
        <UserDemographicsChart />
      </ChartWrapper>
    </PageWrapper>
  );
};

export default UsersPage;
