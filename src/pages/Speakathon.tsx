import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mic, Volume2, Users, MessageCircle, Megaphone, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";

const SpeakAThon = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const skillsRef = useRef(null);
  const galleryRef = useRef(null);

  const handleStartSpeakingClick = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewGalleryClick = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const speakingChallenges = [
    {
      icon: <Mic className="w-8 h-8" />, title: "Impromptu Speaking",
      description: "Master the art of thinking on your feet",
      color: "from-sky-500 to-blue-600", delay: 0.1
    },
    {
      icon: <MessageCircle className="w-8 h-8" />, title: "Storytelling",
      description: "Craft compelling narratives that captivate",
      color: "from-blue-500 to-indigo-500", delay: 0.2
    },
    {
      icon: <Users className="w-8 h-8" />, title: "Persuasive Speech",
      description: "Influence and inspire through powerful words",
      color: "from-indigo-500 to-violet-500", delay: 0.3
    },
    {
      icon: <Heart className="w-8 h-8" />, title: "Motivational Talk",
      description: "Ignite passion and drive in your audience",
      color: "from-violet-500 to-sky-500", delay: 0.4
    }
  ];

  const speakingTools = [
    { name: "Voice Modulation", icon: "🎵" },
    { name: "Body Language", icon: "🕺" },
    { name: "Eye Contact", icon: "👁" },
    { name: "Gestures", icon: "👋" },
    { name: "Pacing", icon: "⏱" },
    { name: "Storytelling", icon: "📚" }
  ];

  const galleryImages = [
    "/speakathon1.jpg",
    "/speakathon2.jpg",
    "/speakathon3.jpg",
    "/speakathon4.jpg"
  ];

  return (
    <div className="min-h-screen text-white" style={{ background: "linear-gradient(135deg, #0B0D2A, #2B0B38)" }}>
      <ParticleBackground />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        ><br></br>
        <br></br>
        <br></br>
        
          <div className="flex items-center justify-center mb-8">
            <Megaphone className="w-16 h-16 text-sky-500 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-sky-300">
              Speak-A-Thon
            </h1>
          </div>
          <p className="text-2xl text-sky-400 mb-8">Amplify Your Voice</p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Transform your voice into a powerful instrument of change.
            <br />
            An engaging platform where participants are challenged to step beyond fear and express themselves with clarity, creativity, and confidence. Whether you're a silent thinker or a bold storyteller, this is your moment to be heard.
          
          </motion.p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    onClick={handleStartSpeakingClick}
    className="w-60 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-4 text-lg rounded-full shadow-xl flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
  >
    <Volume2 className="mr-2 w-5 h-5" />
    Start Speaking
  </Button>

  <Button
    onClick={handleViewGalleryClick}
    className="w-60 bg-white text-sky-500  hover:bg-sky-400 hover:text-white px-6 py-4 text-lg rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
    // Removed border here
  >
    <Users className="mr-2 w-5 h-5" />
    View Speakers
  </Button>

  <Button
    className="w-60 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white px-6 py-4 text-lg rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
  >
    <Mic className="mr-2 w-5 h-5" />
    Register Now
  </Button>
</div>

        </motion.div>
      </section>

      {/* Speaking Challenges */}
      <section className="py-20 px-4">
        <motion.div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-sky-400">Speaking Arena</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakingChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="transition-transform duration-300 ease-in-out bg-gray-900/50 p-6 rounded-xl border border-sky-500/30 hover:shadow-sky-500/30 shadow-lg"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${challenge.color} flex items-center justify-center`}>
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{challenge.title}</h3>
                <p className="text-gray-400">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
<center>
      {/* Journey Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center items-center">
          <h2 className="text-4xl font-bold text-sky-400 mb-12">The Speaking Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <motion.div whileHover={{ scale: 1.03 }} className="transition-transform duration-300 ease-in-out">
              <Card className="bg-gray-900/50 border border-sky-500/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-sky-300">Round 1: “What If”</h3>
                  <p className="text-gray-300">Participants dive into the world of possibilities by exploring thought-provoking “What If” questions. With just 1–2 minutes on the clock, they’re challenged to think imaginatively and express their vision with impact.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="transition-transform duration-300 ease-in-out">
              <Card className="bg-gray-900/50 border border-sky-500/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-sky-300">Round 2:Not yet decided</h3>
                  <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi minus quidem error illum natus?

                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="transition-transform duration-300 ease-in-out">
              <Card className="bg-gray-900/50 border border-sky-500/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-sky-300">Round 3: Object's Perspective</h3>
                  <p className="text-gray-300">Stepping into the shoes—or rather, the soul—of everyday objects, participants give voice to their thoughts and feelings. Whether it’s a worn-out book or a silent clock, each story reflects deep creativity and empathy in just 1–2 minutes.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
</center>
      {/* Speaker's Toolkit */}
      <section ref={skillsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-sky-400">Speaker's Toolkit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {speakingTools.map((tool, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="transition-transform duration-300 ease-in-out bg-gray-800/60 border border-sky-500/20 rounded-xl p-4">
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-white font-medium">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-sky-400">Voices That Inspired Us</h2>
          <p className="text-gray-300 mb-12">Witness the passion and eloquence from our amazing speakers of last year!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="transition-transform duration-300 ease-in-out bg-gray-800/50 p-2 rounded-xl">
                <img src={src} alt={`Speaker ${index + 1}`} className="rounded-lg w-full h-48 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid place-items-center">
          <motion.div whileHover={{ scale: 1.08 }} className="transition-transform duration-500 ease-in-out">
<Card className="bg-gray-900/60 border border-sky-500/20 max-w-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-6 text-sky-300">Event Details</h3>
                <p className="text-gray-300 text-lg mb-2">📅 <strong>Date:</strong> 28 June 2025</p>
                <p className="text-gray-300 text-lg">🕒 <strong>Time :</strong> 09:00 am - 12:00 pm</p>
                <p className="text-gray-300 text-lg mb-2">💻 <strong>Mode:</strong> Online</p>
                <p className="text-gray-300 text-lg">💰 <strong>Cash Prize Pool:</strong> ₹2000</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sky-400">Ready to Make Your Voice Heard?</h2>
          <p className="text-xl text-gray-300 mb-8">Join the speaking revolution and inspire the world with your words</p>
          <Button className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white px-12 py-6 text-xl rounded-full">
            <Mic className="mr-3 w-6 h-6" />
            Register Now
          </Button>
        </div>
      </section>

      {/* Footer
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2025 Flash Forte 3.0 - Speak-A-Thon | Where Voices Create Impact</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Guidelines</a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Resources</a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Support</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default SpeakAThon;
