import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrder, initiatePayment } from '../features/marketplace/marketplaceSlice';
import axios from 'axios';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({ quantity: 1, phone: '', name: '', address: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/marketplace/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const handleBuy = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const orderResult = await dispatch(createOrder({ product_id: product.id, quantity: formData.quantity, buyer_phone: formData.phone, buyer_name: formData.name, delivery_address: formData.address })).unwrap();
      const paymentResult = await dispatch(initiatePayment(orderResult.order_id)).unwrap();
      alert(paymentResult.message);
      navigate('/marketplace');
    } catch {
      alert('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  if (!product) return <div className="min-h-screen flex justify-center items-center"><div className="text-gray-600">Loading...</div></div>;

  const isSoldOut = product.quantity === 0;
  const isLowStock = product.quantity <= 5 && product.quantity > 0;

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="glass bg-white/40 rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              {product.image_url ? (
                <img src={`${import.meta.env.VITE_API_URL.replace('/api/v1', '')}${product.image_url}`} alt={product.name} className="w-full rounded-2xl" />
              ) : (
                <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center"><span className="text-gray-400">No image</span></div>
              )}
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              {isSoldOut && <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full inline-block mb-4 font-semibold">SOLD OUT</div>}
              {isLowStock && <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full inline-block mb-4 font-semibold">Only {product.quantity} left!</div>}
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-3xl font-bold text-green-600 mb-2">KES {product.price} / {product.unit}</p>
              <p className={`text-sm mb-6 ${isLowStock ? 'text-orange-600 font-semibold' : 'text-gray-500'}`}>{product.quantity} {product.unit} available</p>
              
              {isSoldOut ? (
                <div className="bg-gray-100 rounded-2xl p-8 text-center">
                  <p className="text-gray-600 text-lg">This product is currently out of stock</p>
                </div>
              ) : (
              <form onSubmit={handleBuy} className="space-y-4">
                <input type="number" placeholder="Quantity" min="1" max={product.quantity} value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} 
                  className="w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500" required />
                
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500" required />
                
                <input type="tel" placeholder="M-Pesa Phone (254...)" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  className="w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500" required />
                
                <textarea placeholder="Delivery Address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} 
                  className="w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-green-500" rows="3" required />
                
                <div className="text-2xl font-bold text-gray-900">Total: KES {(product.price * formData.quantity).toFixed(2)}</div>
                
                <button type="submit" disabled={loading} className="w-full bg-secondary text-white py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg disabled:bg-gray-400">
                  {loading ? 'Processing...' : 'Pay with M-Pesa'}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
