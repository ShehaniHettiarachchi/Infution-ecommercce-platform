import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import HomeNavBar from "./components/HomeNavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/authSlice";
import CheckoutSuccess from "./components/CheckoutSuccess";

import AddProduct from "./components/AddProduct";
import ViewProducts from "./components/ViewProduct";
import PrintReport from "./components/PrintReport";

import AddDeliveries from "./containers/deliveryManagement/AddDelivery";
import ViewDeliveries from "./containers/deliveryManagement/ViewDeliveries";
import BeautyProducts from "./components/BeautyProducts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/view-product" element={<ViewProducts />} />
            <Route path="/printreport" element={<PrintReport />} />

            <Route path="/add-delivery" element={<AddDeliveries />} />
            <Route path="/view-delivery" element={<ViewDeliveries />} />

            <Route path="/beauty-products" element={<BeautyProducts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
