export default function LiveMap() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-2">Live Delivery Tracking</h3>
      <img src="/assets/map/mock-map.png" alt="Map" />
      <p className="text-sm text-gray-500 mt-2">
        Delivery partner is nearby
      </p>
    </div>
  );
}
