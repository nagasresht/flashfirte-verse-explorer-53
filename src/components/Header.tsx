
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Ideathon", path: "/ideathon" },
    { name: "Speakathon", path: "/speakathon" },
    { name: "Designathon", path: "/design-realm" },
    { name: "Gameathon", path: "/gamingverse" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-orange-500/30"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/38107830-ae11-4581-b97b-d35ab052c64a.png" 
                alt="FlashForte Logo" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-xl group-hover:bg-orange-500/40 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                FLASHFORTE
              </span>
              <span className="text-sm text-gray-400 font-medium">3.0</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-6 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  location.pathname === item.path
                    ? "text-orange-400 bg-orange-500/10 border border-orange-500/30"
                    : "text-gray-300 hover:text-orange-400 hover:bg-orange-500/5"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-orange-500/10 border border-orange-500/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4 py-4 border-t border-orange-500/30"
          >
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-orange-400 bg-orange-500/10 border border-orange-500/30"
                      : "text-gray-300 hover:text-orange-400 hover:bg-orange-500/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
