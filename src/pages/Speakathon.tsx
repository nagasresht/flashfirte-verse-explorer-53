
import { motion } from "framer-motion";
import { MessageSquare, Star, Trophy } from "lucide-react";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";

const Speakathon = () => {
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
            <MessageSquare className="w-16 h-16 text-cyan-500 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Speakathon
            </h1>
          </div>
          
          <p className="text-2xl text-purple-400 mb-8">Public Speaking Arena</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700"
            >
              <Star className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Glowing Stage</h3>
              <p className="text-gray-400">Command the illuminated speaking platform</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700"
            >
              <MessageSquare className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Floating Mics</h3>
              <p className="text-gray-400">Advanced audio technology at your fingertips</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-700"
            >
              <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Audience</h3>
              <p className="text-gray-400">Engage with a captivated audience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Speakathon;
