
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface EventPortalProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  hoverGradient: string;
  route: string;
}

const EventPortal = ({
  id,
  title,
  subtitle,
  description,
  icon,
  gradient,
  hoverGradient,
  route
}: EventPortalProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={route}>
        <Card className="relative overflow-hidden bg-gray-900/50 border-gray-700 hover:border-orange-500/50 transition-all duration-500 h-64">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} group-hover:${hoverGradient} transition-all duration-500`} />
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <motion.div
                className="text-orange-500 mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {title}
              </h3>
              
              <p className="text-gray-400 mb-3 font-medium">{subtitle}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>

            <motion.div
              className="flex items-center text-orange-500 group-hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              <span className="text-sm font-medium">Enter Portal</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default EventPortal;
