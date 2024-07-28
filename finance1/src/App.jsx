// app.jsx
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './components/Admin'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDashboard' // Import AdminDashboard

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* Add route for AdminDashboard */}
      </Routes>
    </>
  );
}

export default App;
