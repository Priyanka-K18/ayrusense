import { shops } from "../data/shops";
import { Link } from "react-router-dom";

export default function Shops() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {shops.map(shop => (
        <Link key={shop.id} to={`/shops/${shop.id}`}
          className="bg-white p-4 shadow rounded">
          <h3 className="font-bold">{shop.name}</h3>
          <p>{shop.distance}</p>
        </Link>
      ))}
    </div>
  );
}
