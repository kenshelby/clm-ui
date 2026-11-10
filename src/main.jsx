import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { Navigate } from "react-router";
import './index.css'
import Login from './pages/Login.jsx';
import Dashboard from "./pages/Dashboard";
import appStore from "./utils/appStore";
import Protected from "./components/Protected";

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>}></Route>
      </Routes>
    </Router>
  </Provider>
)
