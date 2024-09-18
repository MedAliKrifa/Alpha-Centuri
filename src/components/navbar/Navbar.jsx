import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="logo-container">
          <motion.img
            src="/logo.png"
            alt="Logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ height: '50px' }} 
          />
        </div>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
