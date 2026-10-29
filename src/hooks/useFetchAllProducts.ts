import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/productApi";

const useFetchAllProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async ({ signal }) => getAllProducts(signal)
    });
};

export default useFetchAllProducts;