import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../features/marketplace/marketplaceSlice';
import { Link } from 'react-router-dom';

export default function MarketplacePage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.marketplace);
  const user = useSelector((state) => state.auth.user);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  const handleDelete = async (productId) => {
    if (window.confirm('Delete this product?')) {
      await dispatch(deleteProduct(productId));
      dispatch(fetchProducts());
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) return <div className="min-h-screen flex justify-center items-center"><div className="text-gray-600">Loading...</div></div>;

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketplace</h1>
            <p className="text-xl text-gray-600">Buy and sell agricultural products</p>
          </div>
          <Link to="/marketplace/sell" className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg">
            + Sell Product
          </Link>
        </div>
        
        <div className="glass bg-white/40 rounded-3xl shadow-lg p-6 mb-8">
          <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} 
            className="glass bg-white/40 w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500" />
        </div>
        
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {['all', 'vegetables', 'fruits', 'grains', 'dairy', 'livestock', 'other'].map(cat => (
            <button key={cat} onClick={() => setCategory(cat)} 
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${category === cat ? 'bg-secondary text-white shadow-lg' : 'glass bg-white/40 text-gray-700 hover:bg-gray-50'}`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isLowStock = product.quantity <= 5;
            const isSoldOut = product.quantity === 0;
            return (
            <div key={product.id} className="glass bg-white/40 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <Link to={`/marketplace/products/${product.id}`}>
                <div className="relative">
                  {product.image_url ? (
                    <img src={`${import.meta.env.VITE_API_URL.replace('/api/v1', '')}${product.image_url}`} alt={product.name} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center"><span className="text-gray-400">No image</span></div>
                  )}
                  {isSoldOut && <div className="absolute inset-0 bg-black/60 flex items-center justify-center"><span className="text-white text-2xl font-bold">SOLD OUT</span></div>}
                  {isLowStock && !isSoldOut && <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Low Stock</div>}
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  {user && user.id == product.seller_id && (
                    <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">KES {product.price}</span>
                  <span className={`text-sm ${isLowStock ? 'text-orange-600 font-semibold' : 'text-gray-500'}`}>{product.quantity} {product.unit}</span>
                </div>
                <Link to={`/marketplace/products/${product.id}`} className={`block w-full py-2 rounded-full text-center font-semibold transition-all ${isSoldOut ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-secondary text-white hover:bg-secondary/90'}`}>
                  {isSoldOut ? 'Sold Out' : 'Buy Now'}
                </Link>
              </div>
            </div>
          )})}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16"><p className="text-gray-500 text-xl">No products found.</p></div>
        )}
      </div>
    </div>
  );
}
