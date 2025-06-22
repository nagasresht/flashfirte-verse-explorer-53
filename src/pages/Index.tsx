import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home, Calendar, Clock, Trophy,
  Joystick, Monitor, Star, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import EventPortal from "@/components/EventPortal";
import PreviousHighlights from "@/components/PreviousHighlights";
import Schedule from "@/components/Schedule";
import EventDateCard from "@/components/EventDateCard";
import EventPosters from "@/components/EventPosters"

const Index = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
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
      title: "IdeaThon",
      subtitle: "Tech Innovation Lab",
      description: "Dive into AI holograms and transparent circuits",
      icon: <Monitor className="w-8 h-8" />,
      gradient: "from-orange-500/20 to-cyan-500/20",
      hoverGradient: "from-orange-500/40 to-cyan-500/40",
      route: "/ideathon"
    },
    {
      id: "speakathon",
      title: "Speak-A-Thon",
      subtitle: "Public Speaking Arena",
      description: "Command the glowing stage with your voice",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-cyan-500/20 to-purple-500/20",
      hoverGradient: "from-cyan-500/40 to-purple-500/40",
      route: "/speakathon"
    },
    {
      id: "design-realm",
      title: "Design-A-Thon",
      subtitle: "Creative Studio",
      description: "Float through UI/UX wireframes and digital art",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      hoverGradient: "from-purple-500/40 to-pink-500/40",
      route: "/design-realm"
    },
    {
      id: "gamingverse",
      title: "Game-A-Thon",
      subtitle: "Pixel Arcade World",
      description: "Enter retro neon gaming paradise",
      icon: <Joystick className="w-8 h-8" />,
      gradient: "from-pink-500/20 to-orange-500/20",
      hoverGradient: "from-pink-500/40 to-orange-500/40",
      route: "/gamingverse"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />

      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center px-4 pt-28 md:pt-32">
        <motion.div style={{ y: y1 }} className="text-center z-10 max-w-4xl mx-auto">
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="mb-8 flex flex-col items-center"
>
  <div className="flex justify-center items-center mb-8">
  <img
    src="/new.png"
    alt="Flash Forte Logo"
    className="h-24 md:h-28 object-contain rounded-xl transition duration-500 hover:scale-105 hover:shadow-[0_0_20px_#facc15]"
  />
</div>

</motion.div>



          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-end justify-center gap-4">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
                FlashForte
              </h1>
              <span className="text-3xl md:text-4xl font-bold text-gray-400 mb-2">3.0</span>
            </div>
            <p className="text-2xl md:text-3xl text-cyan-400 font-light tracking-wider">
              One Event. Many Realities.
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-medium mt-2">
              Conducted by <span className="text-white font-semibold">Computer Society of India, VNRVJIET</span>
              </p>

          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
           Unleash your creativity and innovation in a boundless multiverse 
            <br />
             of ideas, design, games, and expression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={scrollToPortals}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">Explore the Multiverse</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-pulse"
        />
        <motion.div
          style={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01
          }}
          className="absolute bottom-20 right-10 w-6 h-6 bg-orange-500 rounded-full opacity-40 animate-bounce"
        />
      </section>

      {/* ✅ Event Date Section */}
      <EventDateCard />

      {/* Event Portals */}
      <section id="event-portals" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
         <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent leading-tight pb-2">
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
      <EventPosters />
      <PreviousHighlights />
      <Schedule />

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-black py-16 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <div className="flex items-center justify-center mb-8 space-x-3">
      <img
        src="/new.png"
        alt="Flash Forte Logo"
        className="w-50 h-24 object-contain"
      />
    </div>

    <p className="text-gray-400 mb-8">
      © 2025 FlashForte. All rights reserved. | One Event. Many Realities.
    </p>

  </div>
</footer>

    </div>
  );
};

export default Index;