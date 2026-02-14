import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../features/marketplace/marketplaceSlice';
import axios from 'axios';

export default function SellProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', description: '', price: '', quantity: '', unit: 'kg', category: 'vegetables', image_url: '' });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formDataImg = new FormData();
    formDataImg.append('file', file);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/marketplace/upload-image', formDataImg, 
        { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' } });
      setFormData({...formData, image_url: response.data.image_url});
    } catch {
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(createProduct(formData)).unwrap();
      navigate('/marketplace');
    } catch {
      alert('Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/farm_page.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/10" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sell Your Product</h1>
        
        <form onSubmit={handleSubmit} className="glass bg-white/40 rounded-3xl shadow-lg p-8 space-y-6">
          <input type="text" placeholder="Product Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} 
            className="w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500" required />
          
          <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} 
            className="w-full px-4 py-3 border rounded-2xl focus:ring-2 focus:ring-green-500" rows="3" />
          
          <div className="grid grid-cols-2 gap-4">
            <input type="number" placeholder="Price (KES)" step="0.01" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} 
              className="px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500" required />
            <input type="number" placeholder="Quantity" value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} 
              className="px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500" required />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <select value={formData.unit} onChange={(e) => setFormData({...formData, unit: e.target.value})} 
              className="px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500">
              <option value="kg">Kilograms</option>
              <option value="g">Grams</option>
              <option value="l">Liters</option>
              <option value="pcs">Pieces</option>
              <option value="bags">Bags</option>
            </select>
            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} 
              className="px-4 py-3 border rounded-full focus:ring-2 focus:ring-green-500">
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="grains">Grains</option>
              <option value="dairy">Dairy</option>
              <option value="livestock">Livestock</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full cursor-pointer text-center transition-all">
              {uploading ? 'Uploading...' : 'Choose Image'}
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
            </label>
            {formData.image_url && <img src={`${import.meta.env.VITE_API_URL.replace('/api/v1', '')}${formData.image_url}`} alt="Preview" className="mt-4 h-40 w-full object-cover rounded-2xl" />}
          </div>
          
          <button type="submit" disabled={loading} className="w-full bg-secondary text-white py-3 rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg disabled:bg-gray-400">
            {loading ? 'Listing...' : 'List Product'}
          </button>
        </form>
      </div>
    </div>
  );
}
