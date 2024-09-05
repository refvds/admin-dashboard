import GrowthChart from "../components/Charts/GrowthChart";
import ChartWrapper from "../components/ui/ChartWrapper";
import PageWrapper from "../components/ui/PageWrapper";
import UserTabble from "../components/UserTabble";
import { USER_GROWTH_DATA, USER_PAGE_STATS_DATA } from "../constants";

const UsersPage = () => {
  return (
    <PageWrapper headerTitle="Users" stats={USER_PAGE_STATS_DATA}>
      <UserTabble />

      <ChartWrapper title="User Growth">
        <GrowthChart data={USER_GROWTH_DATA} xData="month" yData="users" />
      </ChartWrapper>
    </PageWrapper>
  );
};

export default UsersPage;
