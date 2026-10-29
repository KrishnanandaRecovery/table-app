import useFetchAllProducts from "./hooks/useFetchAllProducts";

function App() {
  const { isLoading, data, error } = useFetchAllProducts();

  console.log(isLoading, error, data);

  return <div>Table App (fetching products)</div>;
}

export default App;
