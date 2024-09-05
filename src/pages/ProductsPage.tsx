import PageWrapper from "../components/ui/PageWrapper";
import {
  ANOTHER_SALES_DATA,
  CATEGORY_DATA,
  PRODUCT_DATA,
  PRODUCTS_PAGE_STATS_DATA,
} from "../constants";
import ProductTable from "../components/ProductTable";
import ChartWrapper from "../components/ui/ChartWrapper";
import SalesTrendChart from "../components/Charts/SalesTrendChart";
import CategoryDistributionChart from "../components/Charts/CategoryDistributionChart";

const ProductsPage = () => {
  return (
    <PageWrapper headerTitle="Products" stats={PRODUCTS_PAGE_STATS_DATA}>
      <ProductTable data={PRODUCT_DATA} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartWrapper title="Sales Trend">
          <SalesTrendChart
            data={ANOTHER_SALES_DATA}
            xData="month"
            yData="sales"
          />
        </ChartWrapper>
        <ChartWrapper title="Category Distribution">
          <CategoryDistributionChart data={CATEGORY_DATA} displayData="value" />
        </ChartWrapper>
      </div>
    </PageWrapper>
  );
};

export default ProductsPage;
