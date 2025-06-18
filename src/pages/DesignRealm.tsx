
import { motion } from "framer-motion";
import { Star, Image, Monitor } from "lucide-react";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";

const DesignRealm = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)]"></div>
      
      <ParticleBackground />
      <Header />
      
      <div className="pt-24 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <Star className="w-16 h-16 text-purple-500 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Designathon
            </h1>
          </div>
          
          <p className="text-2xl text-pink-400 mb-8">Floating Creative Studio</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
            >
              <Monitor className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">UI/UX Wireframes</h3>
              <p className="text-gray-400">Floating digital design blueprints</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300"
            >
              <Image className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Paintbrush Strokes</h3>
              <p className="text-gray-400">Digital art forming in mid-air</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
            >
              <Star className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Color Palettes</h3>
              <p className="text-gray-400">Dynamic color schemes in motion</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DesignRealm;
