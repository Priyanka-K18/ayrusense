import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold text-green-600">
        LocalMart
      </Link>

      <div className="flex gap-6">
        <Link to="/shops">Shops</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/shopkeeper">Shopkeeper</Link>
      </div>
    </nav>
  );
}
