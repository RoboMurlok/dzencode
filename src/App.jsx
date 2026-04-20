import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layout";
import Incoming from "./pages/Incoming";
import Groups from "./pages/Groups";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="incoming" replace />} />
          <Route path="incoming" element={<Incoming />} />
          <Route path="groups" element={<Groups />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
