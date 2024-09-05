import React from "react";
import PageWrapper from "../components/ui/PageWrapper";
import { PRODUCT_DATA, PRODUCTS_PAGE_STATS_DATA } from "../constants";
import ProductTable from "../components/ProductTable";

const ProductsPage = () => {
  return (
    <PageWrapper headerTitle="Products" stats={PRODUCTS_PAGE_STATS_DATA}>
      <ProductTable data={PRODUCT_DATA} />
    </PageWrapper>
  );
};

export default ProductsPage;
