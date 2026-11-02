import Error from "../components/Error";
import Loader from "../components/Loader";
import ProductTable from "../components/ProductTable";
import useFetchAllProducts from "../hooks/useFetchAllProducts";

function Products() {
  const { data, isLoading, isError, error } = useFetchAllProducts();

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error error={error} />}
      <ProductTable data={data} />
    </div>
  );
}

export default Products;
