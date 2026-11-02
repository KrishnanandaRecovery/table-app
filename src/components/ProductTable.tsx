interface ProductObjectInterface {
  id: number;
  title: string;
  price: number;
  rating: number;
  tumbnail: string;
  description: string;
  availabilityStatus: string;
}
interface ProductInterface {
  products: ProductObjectInterface[];
}

function ProductTable({ data }: { data: ProductInterface | undefined }) {
  console.log(data?.products);
  return <div>Product Table</div>;
}

export default ProductTable;
