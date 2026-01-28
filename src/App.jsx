import { Routes, Route } from 'react-router-dom';

// Placeholder components - replace with actual page components
const Home = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-text mb-4">Welcome to Agrikonnect</h1>
      <p className="text-lg text-gray-600 mb-8">Connecting farmers and agricultural experts</p>
      <div className="space-x-4">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Learn More</button>
      </div>
    </div>
  </div>
);

const Login = () => <div className="p-8">Login Page - Coming Soon</div>;
const Register = () => <div className="p-8">Register Page - Coming Soon</div>;
const Posts = () => <div className="p-8">Posts Page - Coming Soon</div>;
const Communities = () => <div className="p-8">Communities Page - Coming Soon</div>;
const Experts = () => <div className="p-8">Experts Page - Coming Soon</div>;
const Messages = () => <div className="p-8">Messages Page - Coming Soon</div>;
const Profile = () => <div className="p-8">Profile Page - Coming Soon</div>;
const Notifications = () => <div className="p-8">Notifications Page - Coming Soon</div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/experts" element={<Experts />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default App;
