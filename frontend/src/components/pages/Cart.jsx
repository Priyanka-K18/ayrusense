import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  if (!cart.length) return <p className="p-6">Cart is empty</p>;

  return (
    <div className="p-6">
      {cart.map(item => (
        <div key={item.id} className="flex justify-between">
          <span>{item.name} x {item.qty}</span>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}
      <p>Total: ₹{total}</p>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}
