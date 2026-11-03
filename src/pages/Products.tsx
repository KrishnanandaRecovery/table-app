import Error from "../components/Error";
import Loader from "../components/Loader";
import ProductTable from "../components/Products";
import useFetchAllProducts from "../hooks/useFetchAllProducts";

function Products() {
  const { data, isLoading, isError, error } = useFetchAllProducts();

  return (
    <div className="p-5">
      <h1 className="text-xl md:text-3xl mb-5">Products</h1>
      {isLoading && <Loader />}
      {isError && <Error error={error} />}
      <ProductTable data={data} />
    </div>
  );
}

export default Products;
