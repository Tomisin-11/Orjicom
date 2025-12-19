import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import CaseCovers from "./components/Categorie/CaseCovers";
import Cables from "./components/Categorie/Cables";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const router = createBrowserRouter([
    {
      element: <Layout cartItems={cartItems} setCartItems={setCartItems} />,
      children: [
        { index: true, element: <Home addToCart={addToCart} /> },
        { path: "phones", element: <Phones addToCart={addToCart} /> },
        { path: "case-covers", element: <CaseCovers addToCart={addToCart} /> },
        { path: "cables", element: <Cables addToCart={addToCart} /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
