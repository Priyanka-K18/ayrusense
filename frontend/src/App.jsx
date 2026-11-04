import { CartProvider } from "./components/context/CartContext";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home";
import Shops from "./components/pages/Shops";
import ShopDetails from "./components/pages/ShopDetails";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Orders from "./components/pages/Orders";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ShopkeeperDashboard from "./components/pages/ShopkeeperDashboard";
import TrackOrder from "./components/pages/TrackOrder";
import LiveMap  from "./components/delivery/LiveMap";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shop/:id" element={<ShopDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shopkeeper" element={<ShopkeeperDashboard />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}
