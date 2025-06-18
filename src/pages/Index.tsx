
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Calendar, Clock, Trophy, Joystick, Monitor, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import EventPortal from "@/components/EventPortal";
import PreviousHighlights from "@/components/PreviousHighlights";
import EventTimeline from "@/components/EventTimeline";
import Schedule from "@/components/Schedule";

const Index = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToPortals = () => {
    document.getElementById("event-portals")?.scrollIntoView({ behavior: "smooth" });
  };

  const eventPortals = [
    {
      id: "ideathon",
      title: "Ideathon",
      subtitle: "Tech Innovation Lab",
      description: "Dive into AI holograms and transparent circuits",
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-orange-500/20 to-cyan-500/20",
      hoverGradient: "from-orange-500/40 to-cyan-500/40",
      route: "/ideathon"
    },
    {
      id: "speakathon",
      title: "Speakathon",
      subtitle: "Public Speaking Arena",
      description: "Command the glowing stage with your voice",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-cyan-500/20 to-purple-500/20",
      hoverGradient: "from-cyan-500/40 to-purple-500/40",
      route: "/speakathon"
    },
    {
      id: "designathon",
      title: "Designathon",
      subtitle: "Creative Studio",
      description: "Float through UI/UX wireframes and digital art",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/40 to-pink-500/40",
      route: "/design-realm"
    },
    {
      id: "gameathon",
      title: "Gameathon",
      subtitle: "Pixel Arcade World",
      description: "Enter retro neon gaming paradise",
      icon: <Joystick className="w-8 h-8" />,
      gradient: "from-pink-500/20 to-orange-500/20",
      hoverGradient: "from-pink-500/40 to-orange-500/40",
      route: "/gamingverse"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1)_0%,transparent_70%)]"></div>
      
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-pulse"></div>
        
        <motion.div
          style={{ y: y1 }}
          className="text-center z-10 max-w-4xl mx-auto relative"
        >
          {/* Glowing orb behind title */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 relative"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              FLASHFORTE
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-400 font-light tracking-wider mb-6">
              One Event. Many Realities.
            </p>
            
            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center justify-center text-orange-400">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-lg font-medium">28 & 29 December 2024</span>
              </div>
              <p className="text-gray-300 text-lg">
                Organized by <span className="text-orange-500 font-semibold">Computer Society of India, VNRVJIET</span>
              </p>
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Step into the multiverse of innovation, creativity, and technology.
            <br />
            Choose your reality. Shape the future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={scrollToPortals}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 border border-orange-400/30"
            >
              <span className="mr-2">Explore the Multiverse</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced floating elements */}
        <motion.div
          style={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse shadow-lg shadow-cyan-400/50"
        />
        <motion.div
          style={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01
          }}
          className="absolute bottom-20 right-10 w-6 h-6 bg-orange-500 rounded-full opacity-40 animate-bounce shadow-lg shadow-orange-500/50"
        />
        <motion.div
          style={{
            x: mousePosition.x * 0.005,
            y: mousePosition.y * 0.005
          }}
          className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-50 animate-ping"
        />
      </section>

      {/* Event Portals */}
      <section id="event-portals" className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Choose Your Reality
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Each portal leads to a unique dimension of innovation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventPortals.map((portal, index) => (
              <motion.div
                key={portal.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventPortal {...portal} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Previous Year Highlights */}
      <PreviousHighlights />

      {/* Event Timeline */}
      <EventTimeline />

      {/* Schedule */}
      <Schedule />

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-t from-gray-900/80 to-black/80 py-16 px-4 relative border-t border-orange-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.05)_0%,transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/38107830-ae11-4581-b97b-d35ab052c64a.png" 
              alt="FlashForte Logo" 
              className="w-8 h-8 object-contain mr-3"
            />
            <h3 className="text-2xl font-bold text-orange-500">FLASHFORTE 3.0</h3>
          </div>
          <p className="text-gray-400 mb-8">
            © 2024 FLASHFORTE 3.0. All rights reserved. | One Event. Many Realities.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
