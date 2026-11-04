import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ServiceLayout from "../pages/ServiceLayout";
import Products from "../pages/Products";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: "About Us Page" },
      {
        path: "/services",
        element: <ServiceLayout />,
        children: [
          { path: "service1", element: "Service 1" },
          { path: "service2", element: "Service 2" },
          { path: "service3", element: "Service 3" },
        ],
      },
      { path: "/products", element: <Products /> },
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
