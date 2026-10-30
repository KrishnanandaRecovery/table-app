import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import useFetchAllProducts from "./hooks/useFetchAllProducts";

function App() {
  const { isLoading, data, error } = useFetchAllProducts();

  console.log(isLoading, error, data);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="flex-1">
        <ProductTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
