import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Idea-A-Thon", path: "/ideathon" },
    { name: "Game-A-Thon", path: "/gamingverse" },
    { name: "Speak-A-Thon", path: "/speakathon" },
    { name: "Design-A-Thon", path: "/design-realm" },
    { name: "Register", path: "/register" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-[9999] bg-white/10 backdrop-blur-md shadow-sm text-black"
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logos with Links */}
          <div className="flex items-center gap-4">
            <a href="https://vnrvjiet.ac.in" target="_blank" rel="noopener noreferrer">
              <img
                src="/vnrlogo.png"
                alt="VNRVJIET"
                className="h-12 md:h-14 object-contain rounded-sm transition duration-300 hover:scale-105"
              />
            </a>
            <a href="https://www.vnrvjietcsi.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/csilogo.png"
                alt="CSI-VNRVJIET"
                className="h-12 md:h- object-contain rounded-sm transition duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) =>
              item.name === "Register" ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-500 text-black hover:bg-yellow-400 transition"
                  >
                    Register
                  </button>
                  {showDropdown && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 min-w-[200px] bg-black border border-gray-700 rounded-md z-50 flex flex-col shadow-xl transition-all duration-200">
                      <Link
                        to="/ideathon"
                        className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
                        onClick={() => setShowDropdown(false)}
                      >
                        Idea-A-Thon
                      </Link>
                      <Link
                        to="/gamingverse"
                        className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
                        onClick={() => setShowDropdown(false)}
                      >
                        Game-A-Thon
                      </Link>
                      <Link
                        to="/design-realm"
                        className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
                        onClick={() => setShowDropdown(false)}
                      >
                        Design-A-Thon
                      </Link>
                      <Link
                        to="/speakathon"
                        className="px-4 py-2 hover:bg-yellow-500 text-white hover:text-black"
                        onClick={() => setShowDropdown(false)}
                      >
                        Speak-A-Thon
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-pink-100 hover:text-black transition-all duration-300"
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
  className="lg:hidden text-black hover:bg-gray-400  bg-white/50 shadow-md z-[10000]"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  {isMenuOpen ? <X /> : <Menu />}
</Button>

{/* Mobile Dropdown Menu */}
{/* Mobile Dropdown Menu */}
{isMenuOpen && (
<div className="absolute top-full right-4 mt-2 w-44 bg-white/80 backdrop-blur-md shadow-md text-black px-2 py-2 space-y-1 rounded-lg z-[9998]">


    {navItems.map((item) =>
      item.name === "Register" ? (
        <div key={item.name} className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full text-left px-4 py-2 rounded-md font-semibold bg-yellow-500 text-black hover:bg-yellow-400 transition"
          >
            Register
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 w-60 bg-black border border-gray-700 rounded-md shadow-xl z-[9999]">
              {[
                { name: "Idea-A-Thon", path: "/ideathon" },
                { name: "Game-A-Thon", path: "/gamingverse" },
                { name: "Design-A-Thon", path: "/design-realm" },
                { name: "Speak-A-Thon", path: "/speakathon" },
              ].map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="block px-4 py-2 text-white hover:bg-yellow-500 hover:text-black"
                  onClick={() => {
                    setShowDropdown(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          key={item.name}
          to={item.path}
          className="block px-4 py-2 rounded-md font-medium bg-zinc-900 text-white hover:bg-pink-100 hover:text-black transition"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </Link>
      )
    )}
  </div>
)}


        </div>
      </div>
    </motion.header>
  );
};

export default Header;
