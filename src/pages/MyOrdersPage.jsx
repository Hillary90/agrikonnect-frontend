import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchMyOrders } from '../features/marketplace/marketplaceSlice';

const MyOrdersPage = () => {
  const dispatch = useAppDispatch();
  const { orders, loading } = useAppSelector((state) => state.marketplace);

  useEffect(() => { dispatch(fetchMyOrders()); }, [dispatch]);

  if (loading) return <div className="min-h-screen flex justify-center items-center"><div className="text-gray-600">Loading...</div></div>;

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="glass bg-white/40 rounded-3xl shadow-lg p-12 text-center">
            <p className="text-gray-600 text-xl">No orders yet. Start shopping in the marketplace!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="glass bg-white/40 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{order.product_name}</h3>
                    <p className="text-gray-600">Quantity: {order.quantity}</p>
                    <p className="text-gray-600">Total: KES {order.total_price}</p>
                    <p className="text-sm text-gray-500 mt-2">{new Date(order.created_at).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    order.status === 'paid' ? 'bg-green-100 text-green-800' :
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrdersPage;
