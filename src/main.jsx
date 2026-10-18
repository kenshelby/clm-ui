import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navigate } from "react-router";
import Dashboard from "./components/Dashboard"

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  </Router>
)
