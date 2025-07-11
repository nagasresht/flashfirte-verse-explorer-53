import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles, Monitor, Pen, Star, Image, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";

const DesignAThon = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const arsenalRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleStartCreatingClick = () => {
    arsenalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewGalleryClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const designChallenges = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX Wireframes",
      description: "Floating digital design blueprints",
      color: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Digital Art",
      description: "Digital art forming in mid-air",
      color: "from-pink-500 to-rose-500",
      delay: 0.2
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Color Palettes",
      description: "Dynamic color schemes in motion",
      color: "from-rose-500 to-orange-500",
      delay: 0.3
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Build memorable brand experiences",
      color: "from-orange-500 to-yellow-500",
      delay: 0.4
    }
  ];

  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "🖌" },
    { name: "Sketch", icon: "✏" },
    { name: "Photoshop", icon: "🎭" },
    { name: "Illustrator", icon: "🖼" },
    { name: "Canva", icon: "🎪" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 mb-20 md:mb-8">
        <motion.div style={{ y: y1 }} className="text-center z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Star className="w-16 h-16 text-purple-500 mr-4" />
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent leading-tight pb-3.5 mt-6 mb-6 whitespace-nowrap">
                Design-A-Thon
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-pink-400 font-light tracking-wider leading-tight pb-2">
              Unleash Your Creativity
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed leading-tight pb-2"
          >
            Unleash your creative potential in the ultimate design challenge.
            <br />
            Transform ideas into visual masterpieces that inspire and engage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleStartCreatingClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 leading-tight pb-3"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Start Creating
            </Button>
            <Button
              onClick={handleViewGalleryClick}
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 leading-tight pb-3"
            >
              <Monitor className="mr-2 w-5 h-5" />
              View Gallery
            </Button>
            <Button
                onClick={() =>
                  window.open("https://forms.gle/gxfJgUsBV67QbotEA", "_blank")
                }
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 leading-tight pb-3"
              >
                <Pen className="mr-2 w-5 h-5" />
                Register Now
              </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Design Challenges Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-2">
            Creative Studio
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg leading-tight pb-2">
            Your floating design playground
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: challenge.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-md border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${challenge.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      {challenge.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Rounds Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-2">
            The Design Journey
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg leading-tight pb-2">
            Your path to creative excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card style={{ backgroundColor: "rgba(40, 20, 60, 0.7)" }} className="backdrop-blur-md border border-purple-500/30 hover:border-pink-500/40 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center">
                <h3 style={{ color: "#f7c1ff", fontWeight: "bold" }} className="text-2xl font-bold mb-4">
                  Round 1: Theme Selection
                </h3>
                <p style={{ color: "#e0e0f0", fontWeight: 400, lineHeight: 1.6 }} className="text-lg">
                  Teams will select a design theme from a curated list. This theme will be the foundation for their creative work in the next round.
                </p>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: "rgba(40, 20, 60, 0.7)" }} className="backdrop-blur-md border border-pink-500/30 hover:border-rose-500/40 transition-all duration-300 h-full">
              <CardContent className="p-8 text-center">
                <h3 style={{ color: "#f7c1ff", fontWeight: "bold" }} className="text-2xl font-bold mb-4">
                  Round 2: Design Presentation
                </h3>
                <p style={{ color: "#e0e0f0", fontWeight: 400, lineHeight: 1.6 }} className="text-lg">
                  Teams will present their final designs based on the selected theme, explaining their creative process, choices, and impact to the judges.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Tools Section */}
      <section ref={arsenalRef} className="pt-[196px] pb-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <motion.div style={{ y: y2 }} className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-12 leading-tight pb-2"
          >
            Design Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-6 text-lg leading-tight pb-1"
          >
            Master these powerful tools to bring your visions to life
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-0 pb-0">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-100 cursor-pointer"
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <div className="text-white font-medium">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <div ref={galleryRef} className="text-white py-10 md:py-16 px-2 md:px-8 lg:px-16 xl:px-32">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">
          A Glimpse of Last Year's Talents
        </h2>
        <p className="text-center text-purple-200 mb-6 md:mb-12 text-xs md:text-base">
          Witness the creativity and energy from our amazing participants of last year!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 m-2">
          {["/5.jpg", "/6.jpg", "/7.png", "/8.jpg"].map((imgSrc, index) => (
            <motion.div
  key={index}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-xl overflow-hidden shadow-md transition-all duration-300"
>
  <img
    src={imgSrc}
    alt={`Participant ${index + 1}`}
    className="w-full p-3 h-48 object-cover"
  />
</motion.div>

          ))}
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-2">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-tight pb-2">
            Join the design revolution and showcase your creative genius
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default DesignAThon;