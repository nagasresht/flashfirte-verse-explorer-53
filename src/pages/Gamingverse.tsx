import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Gamepad, Brain, Map, Users, Eye, Pen, Sparkles,
  Monitor, Star, Trophy, Quote, Keyboard, Target, Joystick, 
  Crosshair, Crown, Shield, Zap, Headphones, Cpu, Swords, 
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";

const GameAThon = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const skillsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleRegisterClick = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewHighlightsClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const gameOverview = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Memory Challenge",
      description: "Test your memory with celebrity guessing games",
      color: "from-orange-500 to-red-500",
      delay: 0.1
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategy & Logic",
      description: "Sharpen your critical thinking skills",
      color: "from-red-500 to-yellow-500",
      delay: 0.2
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together in creative challenges",
      color: "from-yellow-500 to-green-500",
      delay: 0.3
    },
    {
      icon: <Gamepad className="w-8 h-8" />,
      title: "Gaming Skills",
      description: "Demonstrate reflexes and adaptability",
      color: "from-green-500 to-blue-500",
      delay: 0.4
    }
  ];

    const gamingIcons = [
    { icon: Gamepad, animation: "float", color: "#F97316" },
    { icon: Joystick, animation: "pulse", color: "#EA580C" },
    { icon: Crosshair, animation: "spin", color: "#C2410C" },
    { icon: Target, animation: "bounce", color: "#F97316" },
    { icon: Crown, animation: "float", color: "#EAB308" },
    { icon: Shield, animation: "pulse", color: "#EA580C" },
    { icon: Zap, animation: "flash", color: "#F97316" },
    { icon: Headphones, animation: "wiggle", color: "#C2410C" },
    { icon: Cpu, animation: "spin", color: "#EA580C" },
    { icon: Swords, animation: "bounce", color: "#F97316" },
    { icon: Dice1, animation: "float", color: "#EAB308" },
    { icon: Dice2, animation: "pulse", color: "#EA580C" },
    { icon: Dice3, animation: "spin", color: "#C2410C" },
    { icon: Dice4, animation: "bounce", color: "#F97316" },
    { icon: Dice5, animation: "flash", color: "#EA580C" },
    { icon: Dice6, animation: "wiggle", color: "#EAB308" },
  ];

  // Add missing arrays for rounds, skills, and placeholderImages
  const rounds = [
    {
      number: 1,
      icon: <Brain className="w-6 h-6" />,
      title: "Memory Match",
      description: "Guess the celebrity or game character from clues.",
      color: "from-orange-500 to-red-500"
    },
    {
      number: 2,
      icon: <Target className="w-6 h-6" />,
      title: "Logic Puzzles",
      description: "Solve tricky puzzles and riddles under time pressure.",
      color: "from-red-500 to-yellow-500"
    },
    {
      number: 3,
      icon: <Pen className="w-6 h-6" />,
      title: "Drawing Game",
      description: "Draw and guess game titles or characters.",
      color: "from-yellow-500 to-green-500"
    },
    {
      number: 4,
      icon: <Joystick className="w-6 h-6" />,
      title: "Quick Reflex",
      description: "Fast-paced mini-games to test your reflexes.",
      color: "from-green-500 to-blue-500"
    },
    {
      number: 5,
      icon: <Crown className="w-6 h-6" />,
      title: "Final Showdown",
      description: "Top teams compete in a surprise challenge.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const skills = [
    { name: "Observation", icon: "🧐" },
    { name: "Memory", icon: "🧠" },
    { name: "Geography", icon: "🌍" },
    { name: "Speed Typing", icon: "⌨" },
    { name: "Drawing", icon: "✏" },
    { name: "Communication", icon: "💬" }
  ];

  const placeholderImages = [
    "/img1.png",
    "/img5.jpg",
    "/img6.jpg"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-900/80 to-yellow-900/80 -z-10"></div>
      <ParticleBackground />

      {/* Animated Icon Background */}
      <div className="absolute inset-0 pointer-events-none">
        {gamingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              rotate: item.animation === "spin" ? [0, 360] : 0,
              scale: item.animation === "pulse" ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 4 + 3}rem`,
              color: item.color,
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-20 pt-12 text-center">
        <motion.div style={{ y: y1 }} className="z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-3">
              <Gamepad className="w-20 h-20 sm:w-24 sm:h-24 text-[#FFC300]" />
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#FF4500] via-[#f3c315] to-[#FFA500] bg-clip-text text-transparent">
                Game-A-Thon
              </h1>
            </div>
            
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl text-[#FF5733] mb-4 leading-relaxed font-semibold"
          >
            Where Strategy Meets Skill
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed"
          >
            A thrilling gaming tournament designed to challenge your memory, strategy, logic, and reflexes. Compete with fellow gamers and rise to the top.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => skillsRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-[#FF5733] to-[#FFC300] hover:from-[#D97706] hover:to-[#FF5733] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Dice5 className="mr-2 w-5 h-5" />
              Start Gaming
            </Button>
            <Button
              onClick={() => window.open("https://forms.gle/5d8VaPR9iqwMbt487", "_blank")}
              className="bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#D97706] hover:from-[#D97706] hover:via-[#FFC300] hover:to-[#FF5733] text-white px-12 py-6 text-xl rounded-full shadow-2xl transition-all duration-300"
            >
              <Gamepad className="mr-3 w-6 h-6" />
              Join Game-A-THON
            </Button>
            <Button
              onClick={handleViewHighlightsClick}
              className="bg-gradient-to-r from-[#FF5733] to-[#FFC300] hover:from-[#D97706] hover:to-[#FF5733] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              View Highlights
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-6 sm:px-10 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="mb-6 bg-gradient-to-br from-[#FFD700]/20 to-[#FFC300]/20 backdrop-blur-md border border-[#FFC300]/40">
            <CardContent className="p-10 sm:p-12">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-6 text-[#FFC300]" />
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed italic">
                "Brought out the best in gaming enthusiasts. Participants demonstrated sharp memory, critical thinking, 
            and teamwork through an engaging 5-round format conducted via Discord. It celebrated not just gaming 
            skill but also strategy, speed, and spontaneity."
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </section>

            {/* Event Overview Section */}
      <section id="overview" className="py-20 px-6 sm:px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl pb-2 md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Gaming Arena 
          </h2>
          <p className="text-center text-gray-300 mb-8 text-lg max-w-3xl mx-auto">
            Dive into the exciting challenges and activities of Game-A-Thon 2K25.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameOverview.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gradient-to-br from-orange-900/80 to-amber-900/80 backdrop-blur-md border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-amber-100 group-hover:text-amber-300 transition-colors">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      

    {/* Skills Section */}
<section
  ref={skillsRef}
  className="pt-20 px-6 sm:px-10 md:px-16 bg-gradient-to-r from-[#431800]/20 to-[#8B3E00]/20"
>
  <motion.div
    style={{ y: y2 }}
    className="max-w-6xl mx-auto text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4 pb-2 mt-32 bg-gradient-to-r from-[#FF5733] to-[#FFC300] bg-clip-text text-transparent"
    >
      Gaming Skills & Tools
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-gray-200 mb-9 text-lg"
    >
      Master these essential skills to dominate the gaming arena
    </motion.p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="bg-gradient-to-br from-[#431800]/30 to-[#8B3E00]/30 backdrop-blur-md border border-[#FFC300]/20 rounded-xl p-6 hover:border-[#FFC300]/40 transition-all duration-300 cursor-pointer"
        >
          <div className="text-4xl mb-2">{skill.icon}</div>
          <div className="text-white font-medium">{skill.name}</div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="text-white py-20 px-6 sm:px-10 md:px-16  mt-0">
        <h2 className="text-4xl font-bold text-center mb-4 pb-2">
          A Glimpse of Last Year's Talents
        </h2>
        <p className="text-center text-[#FFC300] mb-12">
          Screenshots and moments from the intense Discord gaming sessions!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#431800] to-[#8B3E00] rounded-2xl p-4 shadow-lg flex flex-col items-center"
            >
              <img
                src={imgSrc}
                alt={`Gaming moment ${index + 1}`}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 sm:px-10 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#D97706] bg-clip-text text-transparent">
            Ready to Game?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ultimate gaming tournament and show your skills
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open("https://forms.gle/5d8VaPR9iqwMbt487", "_blank")}
              className="bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#D97706] hover:from-[#D97706] hover:via-[#FFC300] hover:to-[#FF5733] text-white px-12 py-6 text-xl rounded-full shadow-2xl transition-all duration-300"
            >
              <Gamepad className="mr-3 w-6 h-6" />
              Join Game-A-THON
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default GameAThon;