import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { Navigate } from "react-router";
import appStore from "./utils/appStore";
import Protected from "./components/Protected";
import './index.css'
import Login from './pages/Login.jsx';
import Dashboard from "./pages/Dashboard";
import Live from "./pages/Live";
import Tenant from "./pages/Tenant";
import Competitor from "./pages/Competitor";
import WebExtractor from "./pages/WebExtractor";
import APIExtractor from "./pages/APIExtractor";

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>}>
          <Route path="live" element={<Live />}></Route>
          <Route path="tenant" element={<Tenant />}></Route>
          <Route path="competitor" element={<Competitor />}></Route>
          <Route path="webextractor" element={<WebExtractor />}></Route>
          <Route path="apiextractor" element={<APIExtractor />}></Route>
        </Route>
      </Routes>
    </Router>
  </Provider>
)
