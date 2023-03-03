import "./App.css";
import ContextProvider from "./data/ContextProvider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductItem from "./pages/ProductItem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/store",
      element: <Home />,
    },
    {
      path: "/store/checkout",
      element: <Checkout />,
    },
    {
      path: "/store/product/:id",
      element: <ProductItem />,
    },
  ]);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
