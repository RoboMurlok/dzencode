import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Aside from "./components/Aside";
import { navLinks } from "./constants/navlinks";
import Modal from "./components/Modal";
import avatar from "./assets/avatar.png";
import gear from "./assets/gear.png";
import { useCard, useWS } from "./store";

export default function Layout() {
  const location = useLocation();
  const isOpenModal = useCard((state) => state.isOpenModal);

  const user = {
    avatar: avatar,
    subavatar: gear,
  };

  const count = useWS((s) => s.count);
  const connect = useWS((s) => s.connect);

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <div className="layout">
      <Header />
      <Aside navLinks={navLinks} user={user} />
      <main>
        <h1>Открытых вкладок: {count}</h1>
        {isOpenModal && <Modal />}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 40 }} 
          transition={{ duration: 0.25 }}
        >
          <div className="main">
            <Outlet />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
