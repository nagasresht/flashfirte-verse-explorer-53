
import { motion } from "framer-motion";
import { Monitor, Cpu, Zap } from "lucide-react";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";

const Ideathon = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <Header />
      
      <div className="pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <Monitor className="w-16 h-16 text-orange-500 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
              Ideathon
            </h1>
          </div>
          
          <p className="text-2xl text-cyan-400 mb-8">Tech Innovation Lab</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700"
            >
              <Cpu className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Holograms</h3>
              <p className="text-gray-400">Interact with cutting-edge AI technology</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700"
            >
              <Zap className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Circuit Boards</h3>
              <p className="text-gray-400">Transparent circuits and hardware innovation</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700"
            >
              <Monitor className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Future Tech</h3>
              <p className="text-gray-400">Futuristic desktops and minimal neon accents</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Ideathon;
