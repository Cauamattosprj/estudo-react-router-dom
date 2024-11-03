import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct.js";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout.jsx";
import Dashboard from "./pages/Dashboard.js";
import Login from "./pages/Login.js";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="login" element={<Login setUser={setUser}></Login>} />
            <Route
              path="dashboard"
              element={<Dashboard setUser={setUser}></Dashboard>}
            />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
