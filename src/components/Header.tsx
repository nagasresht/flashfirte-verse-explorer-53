import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Idea-a-Thon", path: "/idea-a-thon" },
    { name: "Game-a-Thon", path: "/game-a-thon" },
    { name: "Speak-a-Thon", path: "/speak-a-thon" },
    { name: "Design-a-Thon", path: "/design-a-thon" },
    { name: "Register", path: "/register" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
className="fixed top-0 left-0 right-0 z-50 bg-gray-800/45 backdrop-blur-md border-b border-gray-700"

    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Only */}
          <Link to="/" className="flex items-center group">
            <img
              src="/new.jpg"
              alt="Flash Forte Logo"
              className="w-100 h-16 rounded-md object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">
           {navItems.map((item) =>
  item.name === "Register" ? (
    <div key={item.name} className="relative group">
      <button
        className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-500 text-black hover:bg-yellow-400"
      >
        Register
      </button>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 min-w-[200px] bg-black border border-gray-700 rounded-md z-50 hidden group-hover:flex flex-col shadow-xl">
        <Link to="/register/ideathon" className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black">Idea-a-thon</Link>
        <Link to="/register/gameathon" className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black">Game-a-thon</Link>
        <Link to="/register/designathon" className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black">Design-a-thon</Link>
        <Link to="/register/speakathon" className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black">Speak-a-thon</Link>
      </div>
    </div>
  ) : (
    <Link
      key={item.name}
      to={item.path}
      className="px-4 py-2 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
    >
      {item.name}
    </Link>
  )
)}
</nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-gray-800"
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
            className="lg:hidden mt-4 py-4 border-t border-gray-800"
          >
            <nav className="flex flex-col space-y-2">
              <nav className="hidden lg:flex items-center space-x-3">
  {navItems.map((item) =>
    item.name === "Register" ? (
      <div
        key={item.name}
        className="relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <button className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-500 text-black hover:bg-yellow-400">
          Register
        </button>
        {showDropdown && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 min-w-[200px] bg-black border border-gray-700 rounded-md z-50 flex flex-col shadow-xl">
            <Link
              to="/register/ideathon"
              className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
            >
              Ideathon
            </Link>
            <Link
              to="/register/gameathon"
              className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
            >
              Gameathon
            </Link>
            <Link
              to="/register/designathon"
              className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
            >
              Designathon
            </Link>
            <Link
              to="/register/speakathon"
              className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
            >
              Speakathon
            </Link>
          </div>
        )}
      </div>
    ) : (
      <Link
        key={item.name}
        to={item.path}
        className="px-4 py-2 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
      >
        {item.name}
      </Link>
    )
  )}
</nav>

            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;