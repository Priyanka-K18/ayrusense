import { useCart } from "../context/CartContext";

export default function ShopDetails() {
  const { addToCart } = useCart();

  const product = { id: 1, name: "Rice 1kg", price: 60 };

  return (
    <div className="p-6">
      <h2 className="font-bold text-xl">{product.name}</h2>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
