import ShopkeeperSidebar from "../shopkeeper/ShopkeeperSidebar";
import ProductManager from "../shopkeeper/ProductManager";


export default function ShopkeeperDashboard() {
return (
<div className="flex min-h-screen">
<ShopkeeperSidebar />
<main className="flex-1 p-6 bg-gray-50">
<h1 className="text-3xl font-bold mb-4">Shopkeeper Dashboard</h1>
<ProductManager />
</main>
</div>
);
}