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
    // Scroll to skills section
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

  const rounds = [
    {
      number: 1,
      title: "Guess the Star + Memory Game",
      description: "Fun-based entry round with no eliminations. Guess celebrities from childhood photos or tattoos. Watch clips and answer memory-based questions.",
      icon: <Star className="w-8 h-8" />,
      color: "from-[#FF5733] to-[#FFC300]"
    },
    {
      number: 2,
      title: "Quiz (Technical + Non-Technical)",
      description: "Fast-paced individual quiz round. Tested both general and technical knowledge. Conducted on Konfhub platform.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-[#FFC300] to-[#D97706]"
    },
    {
      number: 3,
      title: "GeoGuessr Challenge",
      description: "Identify global locations using clues. Tested geographical awareness and deduction.",
      icon: <Map className="w-8 h-8" />,
      color: "from-[#D97706] to-[#FF5733]"
    },
    {
      number: 4,
      title: "Draw Asuras",
      description: "Like Scribble: sketch and guess gameplay. Focused on creativity, fast guessing, and collaboration.",
      icon: <Pen className="w-8 h-8" />,
      color: "from-[#FF5733] to-[#FFC300]"
    },
    {
      number: 5,
      title: "Scavenger Hunt",
      description: "Multi-room Discord navigation challenge. Solve a chain of clues and note the navigation path. Submit the final answer to your mentor.",
      icon: <Target className="w-8 h-8" />,
      color: "from-[#FFC300] to-[#D97706]"
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
  
  return (
     <div className="relative min-h-screen bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-900/80 to-yellow-900/80 -z-10"></div>
      <ParticleBackground />

      {/* Animated Gaming Remote Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFC300] opacity-10"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `calc(${Math.random() * 4 + 3}rem - 2vw)`, // Adjust font size for responsiveness
            }}
          >
            <Gamepad />
          </motion.div>
        ))}
      </div>

      {/* Animated Gaming Icons Background */}
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
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div style={{ y: y1 }} className="text-center z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Gamepad className="w-20 h-20  text-[#FFC300] mr-4" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#D97706] bg-clip-text text-transparent">
                Game-A-Thon
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-[#FFC300] font-light  tracking-wider">
              2K25
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-2 leading-relaxed"
          >
            Where Strategy Meets Skill
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-md text-gray-400 mb-8 leading-relaxed"
          >
            A thrilling gaming tournament designed to challenge your memory, strategy, logic, and reflexes. 
            Compete with fellow gamers and rise to the top.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleRegisterClick}
              className="bg-gradient-to-r from-[#FF5733] to-[#FFC300] hover:from-[#D97706] hover:to-[#FF5733] text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-[#D97706]/25 hover:shadow-[#D97706]/40 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Register Now
            </Button>
            <Button
              onClick={handleViewHighlightsClick}
              variant="outline"
              className="border-[#FFC300] text-[#FFC300] hover:bg-[#FFC300] hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              <Monitor className="mr-2 w-5 h-5" />
              View Highlights
            </Button>
          </motion.div>

          {/* Event Date and Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-6 text-center text-[#FFC300] font-semibold text-lg"
          >
            <div className="flex flex-col items-center gap-2">
              {/* <p className="flex items-center gap-2">
                🎮 <span className="text-white">Level Up Your Calendar!</span>
              </p> */}
              <p className="flex items-center gap-2">
                🗓 <span>Date: 28 June 2025</span>
              </p>
              <p className="flex items-center gap-2">
                ⌚ <span>Time: 2:00 PM – 5:00 PM</span>
              </p>
              {/* <p className="flex items-center gap-2">
                🕹 <span className="text-white">Get Ready to Play!</span>
              </p> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Remove Floating Gaming Elements */}
        {/* 
        <motion.div
          style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#FFC300]/20 to-[#D97706]/20 rounded-full backdrop-blur-sm border border-[#FFC300]/30"
        />
        <motion.div
          style={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-[#D97706]/20 to-[#FF5733]/20 rounded-lg backdrop-blur-sm border border-[#FFC300]/30 rotate-45"
        />
        <motion.div
          style={{ x: mousePosition.x * 1, y: mousePosition.y * 1 }}
          className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-[#FF5733]/20 to-[#FFC300]/20 rounded-full backdrop-blur-sm border border-[#FFC300]/30"
        />
        */}
      </section>

      {/* Event Overview Section */}
      <section id="overview" className="py-20 px-4 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Game-a-thon 2K25
          </h2>
          <p className="text-center text-amber-100 mb-8 text-lg max-w-4xl mx-auto">
            Brought out the best in gaming enthusiasts. Participants demonstrated sharp memory, critical thinking, 
            and teamwork through an engaging 5-round format conducted via Discord. It celebrated not just gaming 
            skill but also strategy, speed, and spontaneity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Rounds Section */}
      <section id="rounds" className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 pb-2 bg-gradient-to-r from-[#FF5733] to-[#FFC300] bg-clip-text text-transparent">
            Rounds Breakdown
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Your gaming journey through 5 exciting rounds
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rounds.map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer h-full flex"
              >
                <Card
                  style={{
                    background: "rgba(0, 0, 255, 0.06)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 16,
                    padding: 20,
                    boxShadow: "0 4px 20px rgba(255, 165, 0, 0.15)",
                    minHeight: 320, // Ensures all boxes have the same minimum height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                  }}
                  className="transition-all duration-200 h-full flex flex-col"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${round.color} flex items-center justify-center mr-4`}
                        style={{
                          boxShadow: "0 0 10px rgba(255, 150, 50, 0.6)",
                        }}
                      >
                        <span className="text-white font-bold">{round.number}</span>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${round.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-200`}
                        style={{
                          color: "#FFC300",
                          transition: "transform 0.2s ease-in-out"
                        }}
                      >
                        {round.icon}
                      </div>
                    </div>
                    <h3
                      style={{
                        color: "#FFD166",
                        fontWeight: 700,
                        textShadow: "0 0 8px rgba(255, 209, 102, 0.6)"
                      }}
                      className="text-xl font-bold mb-3"
                    >
                      {round.title}
                    </h3>
                    <p
                      style={{
                        color: "#E0E0E0",
                        fontSize: "16px",
                        lineHeight: "1.5em",
                        fontWeight: 500,
                        textShadow: "0 0 4px rgba(255,255,255,0.1)"
                      }}
                      className="transition-colors"
                    >
                      {round.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Outcome Quote Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className=" mb-6 bg-gradient-to-br from-[#FFD700]/20 to-[#FFC300]/20 backdrop-blur-md border border-[#FFC300]/40">
            <CardContent className="p-12">
              <Quote className="w-12 h-12 mx-auto mb-6 text-[#FFC300]" />
              <blockquote className="text-xl md:text-2xl text-gray-600 leading-relaxed italic">
                "Game-a-thon 2K25 proved to be an electrifying mix of strategy, skill, and excitement. 
                From puzzles to drawing games, students showed remarkable adaptability and creativity. 
                It not only fostered fun but built a stronger sense of community among the first years."
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="pt-[220px] py-15 px-4 bg-gradient-to-r from-[#431800]/20 to-[#8B3E00]/20">
        <motion.div
          style={{ y: y2 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-[#FF5733] to-[#FFC300] bg-clip-text text-transparent"
          >
            Gaming Skills & Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 mb-12 text-lg"
          >
            Master these essential skills to dominate the gaming arena
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br mt-2  from-[#431800]/30 to-[#8B3E00]/30 backdrop-blur-md border border-[#FFC300]/20 rounded-xl p-6 hover:border-[#FFC300]/40 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <div className="text-white font-medium">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} id="gallery" className="text-white py-16 px-4 lg:px-32 pt-0">
        <h2 className="text-4xl font-bold text-center mb-4 mt-5 pb-2">
        A Glimpse of Last Year's Talents
        </h2>
        <p className="text-center text-[#FFC300] mb-12">
          Screenshots and moments from the intense Discord gaming sessions!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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


      {/* Results Section */}
      {/* 
      <section id="results" className="py-20 px-4 bg-gradient-to-r from-[#431800]/30 to-[#8B3E00]/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF5733] to-[#FFC300] bg-clip-text text-transparent">
            Winners
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Last Year's Game-a-thon Champions
          </p>
          <p className="text-gray-300 mb-12 text-lg">
            Celebrating our champion gamers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#FFD700]/10 to-[#FFC300]/10 backdrop-blur-md border border-[#FFC300]/40">
                <CardContent className="p-12">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-[#FFD700]" />
                  <h3 className="text-2xl font-bold mb-2 text-[#FFD700]">Winner</h3>
                  <p className="text-xl text-brown mb-2">Adithya Bondalapati</p>
                  <p className="text-gray-600 mb-4">(EEE-A)</p>
                  <p className="text-3xl font-bold text-[#FFD700]">₹1250</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-[#C0C0C0]/10 to-[#A0A0A0]/10 backdrop-blur-md border border-[#C0C0C0]/40">
                <CardContent className="p-12">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-[#C0C0C0]" />
                  <h3 className="text-2xl font-bold mb-2 text-[#C0C0C0]">Runner-up</h3>
                  <p className="text-xl text-brown mb-2">Venkata Sai Kumar</p>
                  <p className="text-gray-600 mb-4">(CSM-C)</p>
                  <p className="text-3xl font-bold text-[#C0C0C0]">₹750</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
      */}


      {/* Call to Action */}
      <section className="py-20 px-4">
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
            <Button className="bg-gradient-to-r from-[#FF5733] via-[#FFC300] to-[#D97706] hover:from-[#D97706] hover:via-[#FFC300] hover:to-[#FF5733] text-white px-12 py-6 text-xl rounded-full shadow-2xl shadow-[#D97706]/25 hover:shadow-[#D97706]/40 transition-all duration-300">
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