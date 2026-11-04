import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Hyperlocal Grocery Delivery
      </h1>
      <p className="text-gray-600 mb-6">
        Fresh groceries from nearby shops
      </p>
      <Link
        to="/shops"
        className="bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        Browse Shops
      </Link>
    </div>
  );
}
