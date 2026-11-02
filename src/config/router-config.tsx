import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ServiceLayout from "../pages/ServiceLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: "Home Page" },
      { path: "/about", element: "About Us Page" },
      { path: "/products", element: "Products Page" },
      {
        path: "/services",
        element: <ServiceLayout />,
        children: [
          { path: "service1", element: "Service 1" },
          { path: "service2", element: "Service 2" },
          { path: "service3", element: "Service 3" },
        ],
      },
      { path: "/products", element: "Products Page" },
      { path: "/products/:productId", element: "Product Details Page" },
      { path: "/contact", element: "Contact Us Page" },
      { path: "*", element: "Not Found Page" },
    ],
  },
  {
    path: "/login",
    element: "Login / Register",
  },
]);

export default router;
