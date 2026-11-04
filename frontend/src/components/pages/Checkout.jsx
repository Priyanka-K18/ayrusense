import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { total } = useCart();
  return (
    <div className="p-6 text-center">
      <h2>Pay ₹{total}</h2>
      <button onClick={() => alert("Payment Success")} className="bg-green-600 text-white px-6 py-2">
        Pay Now
      </button>
    </div>
  );
}
