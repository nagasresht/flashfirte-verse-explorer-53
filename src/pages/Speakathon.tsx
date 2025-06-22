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
      <section className="pt-24 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <br></br><br></br><br></br>
          <center>
          <div className="flex flex-col md:flex-row items-center justify-center mb-8">
  <Megaphone className="w-14 h-14 md:w-16 md:h-16 text-sky-500 md:mr-4 mb-4 md:mb-0" />
  <h1 className="text-5xl md:text-8xl font-bold text-sky-300">
    Speak-A-Thon
  </h1>
</div>


          </center>
          <br></br>
          <p className="text-xl md:text-2xl text-sky-400 mb-6 md:mb-8">Amplify Your Voice</p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed"
          >
            Transform your voice into a powerful instrument of change.
            <br className="hidden md:block" />
            An engaging platform where participants are challenged to step beyond fear and express themselves with clarity, creativity, and confidence.
          </motion.p>
          <br></br>
          <br></br>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleStartSpeakingClick}
              className="w-full sm:w-60 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-4 text-lg rounded-full shadow-xl flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <Volume2 className="mr-2 w-5 h-5" />
              Start Speaking
            </Button>

            <Button
              onClick={handleViewGalleryClick}
              className="w-full sm:w-60 bg-white text-sky-500 hover:bg-sky-400 hover:text-white px-6 py-4 text-lg rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <Users className="mr-2 w-5 h-5" />
              View Gallery
            </Button>

            <a
  href="https://forms.gle/akPuzhfUSJJu37SFA"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-60"
>
  <Button
    className="w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white px-6 py-4 text-lg rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
  >
    <Mic className="mr-2 w-5 h-5" />
    Register Now
  </Button>
</a>
          </div>
        </motion.div>
      </section>
      <br></br><br></br>
      {/* Speaking Challenges */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <motion.div className="max-w-6xl mx-auto text-center">
          <br></br><br></br>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-sky-400">Speaking Arena</h2>
          <br></br><br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {speakingChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="transition-transform duration-300 ease-in-out bg-gray-900/50 p-4 md:p-6 rounded-xl border border-sky-500/30 hover:shadow-sky-500/30 shadow-lg"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-r ${challenge.color} flex items-center justify-center`}>
                  {challenge.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{challenge.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
<br></br><br></br>
      {/* Journey Section */} 
     <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8 md:mb-12">Glimpse of Rounds in Speak-A-Thon 2K24</h2>
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            <motion.div whileHover={{ scale: 1.03 }} className="transition-transform duration-300 ease-in-out">
              <Card className="bg-gray-900/50 border border-sky-500/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-sky-300">Round 1</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Participants will select a fictional character of their choice and analyze the character’s flaws. They must also articulate why the character remains their favorite despite these imperfections.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="transition-transform duration-300 ease-in-out">
              <Card className="bg-gray-900/50 border border-sky-500/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-sky-300">Round 2</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Participants will be paired and presented with a topic. Each participant will be assigned a contrasting stance (e.g., one in favor, one against) and will be required to debate accordingly.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="transition-transform duration-300 ease-in-out">
              <Card className="bg-gray-900/50 border border-sky-500/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-sky-300">Round 3</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Participants will be given a material object and asked to describe or compare it using similes and metaphors. The response should be creative, vivid, and relatable to a general audience.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaker's Toolkit */}
<section ref={skillsRef} className="py-16 md:py-20 px-4 md:px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-sky-400">
      Speaker's Toolkit
    </h2>
<br></br><br></br>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {speakingTools.map((tool, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800/60 border border-sky-500/20 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out"
        >
          <div className="text-5xl mb-4">{tool.icon}</div>
          <div className="text-base md:text-lg text-white font-semibold">
            {tool.name}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Gallery */}
      <section ref={galleryRef} className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-400">Highlights from Last Year’s Voices</h2>
          <br></br><br></br>
          <p className="text-sm md:text-base text-gray-300 mb-8 md:mb-12">Glimpses of confidence, clarity, and expression from Speak-A-Thon!</p>
          <br></br><br></br>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="transition-transform duration-300 ease-in-out bg-gray-800/50 p-1 md:p-2 rounded-xl"
              >
                <img 
                  src={src} 
                  alt={`Speaker ${index + 1}`} 
                  className="rounded-lg w-full h-32 md:h-48 object-cover" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<br></br><br></br>
      {/* Event Details */}
<section className="py-16 px-4 md:px-6">
  <div className="max-w-xl mx-auto bg-gray-800/60 border border-sky-500/30 rounded-2xl p-8 md:p-10 text-white shadow-xl">
    <h2 className="text-4xl md:text-5xl font-bold text-sky-400 mb-10 flex justify-center items-center gap-3">
       Event Details
    </h2>

    <div className="space-y-4 text-xl md:text-2xl flex flex-col items-center">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📅</span>
        <span className="font-bold">Date :</span>
        <span>28 June 2025</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl">⏰</span>
        <span className="font-bold">Time :</span>
        <span>09:00 am – 12:00 pm</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl">💻</span>
        <span className="font-bold">Mode :</span>
        <span>Online</span>
      </div>
    </div>
  </div>
</section>
{/* About the event */}
<section className="py-16 px-4 md:px-6">
  <div className="max-w-4xl mx-auto bg-gray-800/60 border border-sky-500/30 rounded-2xl p-8 md:p-10 text-white shadow-xl">
    <h2 className="text-2xl md:text-5xl font-bold text-sky-400 mb-10 flex justify-center items-center gap-3">
       About the event
    </h2>

    <div className="space-y-4 text-xl md:text-xl flex flex-col items-center">
      <div className="flex items-center gap-2">
        <span>
          Whether you're a seasoned speaker or someone ready to step out of their comfort zone,
          this is your moment to shine. Speak-A-Thon is more than just a speaking contest — it's a vibrant space to express, connect, and grow. ✨
          <br /><br />
          <strong>Why Join?</strong><br />
          Share your voice, your vision, and your vibe.<br />
          Participate in a series of fun, interactive, and thought-provoking rounds.<br />
          Challenge your spontaneity, creativity, and clarity of thought.<br />
          The mic is yours. 🎙
        </span>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-sky-400">Ready to Make Your Voice Heard?</h2>
          <br></br><br></br>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
            Join the speaking revolution and inspire the world with your words
          </p><br></br><br></br>
          <a
  href="https://forms.gle/akPuzhfUSJJu37SFA"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block"
>
  <Button className="w-full max-w-xs md:max-w-md p-auto bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full">
    <Mic className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" />
    Register Now
  </Button>
</a>

        </div>
      </section>
      <br></br><br></br>
    </div>
  );
};

export default SpeakAThon;