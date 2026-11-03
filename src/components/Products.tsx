import { ShoppingCartPlus, Star } from "lucide-react";

interface ProductObjectInterface {
  id: number;
  title: string;
  price: number;
  brand: string;
  rating: number;
  thumbnail: string;
  description: string;
  availabilityStatus: ProductAvailabilityType;
}
interface ProductInterface {
  products: ProductObjectInterface[];
}
type ProductAvailabilityType = "In Stock" | "Low Stock" | "Out of Stock";

const availabilityColors: Record<ProductAvailabilityType, string> = {
  "In Stock": "text-green-500 bg-green-100",
  "Low Stock": "text-yellow-500 bg-yellow-100",
  "Out of Stock": "text-red-500 bg-red-100",
};

const renderAvailability = (availability: ProductAvailabilityType) => {
  return (
    <p
      className={`text-xs py-1 px-3 rounded-br-full absolute top-3 ${availabilityColors[availability]}`}
    >
      {availability}
    </p>
  );
};

function Products({ data }: { data: ProductInterface | undefined }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
      {data?.products.map((product: ProductObjectInterface) => (
        <div key={product.id} className="p-3 rounded-md shadow-lg relative">
          <div className="bg-gray-200 rounded-md mb-5">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-50 object-cover"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-normal text-gray-400">
                {product.brand}
              </p>
              <p className="text-md font-semibold text-slate-800">
                {product.title.split(" ").slice(0, 2).join(" ")}...
              </p>
            </div>
            <p className="text-lg text-gray-600 font-bold">
              <span className="text-xs font-normal text-gray-400">Rs.</span>{" "}
              {product.price.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-2 items-end">
              <p className="flex text-xs gap-1 items-end">
                <Star className="text-yellow-500 w-4" />{" "}
                {product.rating.toFixed(1)}
              </p>
              {renderAvailability(product?.availabilityStatus)}
            </div>
            <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <ShoppingCartPlus className="w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
