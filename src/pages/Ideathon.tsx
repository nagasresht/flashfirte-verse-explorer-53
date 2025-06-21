
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Computer, Lightbulb, Sparkles, Trophy } from "lucide-react";
import "../ideathon.css";

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Loader Component
const IdeathonLoader = () => {
  const [stage, setStage] = useState('off');
  const [showText, setShowText] = useState(false);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('on'), 1000);
    const timer2 = setTimeout(() => {
      setStage('sparks');
      const sparkArray = Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const distance = 80 + Math.random() * 40;
        return {
          id: i,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          delay: i * 100,
          size: Math.random() * 2 + 1
        };
      });
      setSparks(sparkArray);
    }, 2000);
    const timer3 = setTimeout(() => setShowText(true), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-500 rounded opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-green-600 rounded opacity-30 animate-pulse"></div>
        <div className="absolute top-60 left-1/3 w-3 h-3 bg-green-500 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-40 right-20 w-8 h-8 bg-green-500 rounded opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-40 w-5 h-5 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-green-600 rounded opacity-50 animate-bounce"></div>
        <div className="absolute top-16 right-1/4 w-2 h-2 bg-green-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-20 left-1/2 w-4 h-4 bg-green-500 rounded opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-12 w-3 h-3 bg-green-400 rounded-full opacity-45 animate-bounce"></div>
        <div className="absolute top-3/4 right-16 w-2 h-2 bg-green-600 rounded opacity-50 animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-green-500 rounded opacity-25 animate-pulse"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center z-10">
        <div className="relative mb-8 flex items-center justify-center">
          {stage !== 'off' && (
            <div className="absolute w-48 h-48 bg-green-400 rounded-full opacity-15 blur-3xl animate-pulse"></div>
          )}
          
          {stage === 'sparks' && sparks.map((spark) => (
            <div
              key={spark.id}
              className="absolute animate-ping"
              style={{
                transform: `translate(${spark.x}px, ${spark.y}px)`,
                animationDelay: `${spark.delay}ms`,
                animationDuration: '1200ms'
              }}
            >
              <div 
                className="bg-green-300 rounded-full opacity-80"
                style={{
                  width: `${spark.size * 2}px`,
                  height: `${spark.size * 2}px`
                }}
              />
            </div>
          ))}
          
          <div className={`transform transition-all duration-1000 ${
            stage === 'off' ? 'scale-100' : 'scale-110'
          }`}>
            <Lightbulb 
              size={120} 
              className={`transition-colors duration-1000 ${
                stage === 'off' 
                  ? 'text-gray-500' 
                  : 'text-green-400 filter drop-shadow-lg'
              }`}
            />
          </div>
        </div>

        {showText && (
          <div className={`text-center transition-all duration-1000 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl font-bold text-green-400 mb-4 animate-pulse">
              Idea-A-Thon
            </h1>
            <p className="text-green-300 text-xl font-medium animate-pulse">
              Where ideas take flight and innovation begins
            </p>
          </div>
        )}
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.2);
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation(0.3);
  const { ref: descRef, isInView: descInView } = useScrollAnimation(0.3);
  const { ref: buttonsRef, isInView: buttonsInView } = useScrollAnimation(0.3);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-6"
    >
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto w-full">        
        <div 
          ref={titleRef}
          className={`flex items-center justify-center mb-8 transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <Computer className="w-16 h-16 text-green-400 mr-6 animate-pulse" />  
          <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent px-3 tracking-wide whitespace-nowrap">
            Idea-A-Thon
          </h1>
          <Lightbulb className="w-16 h-16 text-green-400 animate-pulse" />  
        </div>

        <p 
          ref={subtitleRef}
          className={`text-2xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent px-5 tracking-wide transition-all duration-1000 ${
            subtitleInView ? 'animate-fade-in animate-delay-300' : 'opacity-0 translate-y-8'
          }`}
        >
          "Where ideas take flight and innovation begins."
        </p>

        <p 
          ref={descRef}
          className={`text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto leading-relaxed px-4 tracking-normal transition-all duration-1000 ${
            descInView ? 'animate-slide-up animate-delay-500' : 'opacity-0 translate-y-8'
          }`}
        >
          Unleash your imagination in the ultimate ideation challenge. Turn thoughts into powerful solutions that make an impact.
        </p>

        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-10 justify-center items-center transition-all duration-1000 ${
            buttonsInView ? 'animate-zoom-in animate-delay-700' : 'opacity-0 scale-75'
          }`}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-7 text-xl font-semibold rounded-full transition-all duration-300 green-glow hover:green-glow-intense group shadow-md"
            onClick={() => scrollToSection('domains-section')}
          >
            <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
            Start Ideating
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-green-400 text-green-400 hover:bg-green-400/20 hover:text-green-300 hover:border-green-300 px-12 py-7 text-xl font-semibold rounded-full transition-all duration-300 shadow-md"
            onClick={() => scrollToSection('gallery-section')}
          >
            View Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

// Journey Section Component
const JourneySection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation(0.3);
  const { ref: card1Ref, isInView: card1InView } = useScrollAnimation(0.3);
  const { ref: card2Ref, isInView: card2InView } = useScrollAnimation(0.3);

  const rounds = [
    {
      title: "Round 1: Theme Reveal",
      description: "Participants will receive a problem statement. Submissions should include a brief explanation and a conceptual solution.",
      gradient: "from-gray-800/80 to-gray-900/80",
      ref: card1Ref,
      inView: card1InView
    },
    {
      title: "Round 2: Final Presentation", 
      description: "Shortlisted teams will pitch their refined ideas to the jury, showcasing impact, innovation, and feasibility.",
      gradient: "from-gray-800/80 to-gray-900/80",
      ref: card2Ref,
      inView: card2InView
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">       
         <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-5 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide py-2 transition-all duration-1000 ${
            titleInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}
        >
          The Idea Journey
        </h2>
        <p 
          ref={subtitleRef}
          className={`text-gray-300 text-center mb-16 text-lg transition-all duration-1000 ${
            subtitleInView ? 'animate-slide-up animate-delay-300' : 'opacity-0 translate-y-8'
          }`}
        >
          Your path to creative excellence
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {rounds.map((round, index) => (
            <Card 
              key={index}
              ref={round.ref}
              className={`bg-gradient-to-br ${round.gradient} border-green-400/40 backdrop-blur-sm hover:border-green-400/60 transition-all duration-700 group hover:scale-105 ${
                round.inView ? `animate-slide-in-left animate-delay-${(index + 5)}00` : 'opacity-0 translate-x-10'
              }`}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                  {round.title}
                </h3>
                <p className="text-gray-100 leading-relaxed text-base">
                  {round.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Domains Section Component
const DomainsSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);

  const domains = [
    { name: "Education", color: "bg-blue-500", icon: "🎓" },
    { name: "Health Care", color: "bg-red-500", icon: "🏥" },
    { name: "Smart Agriculture", color: "bg-green-500", icon: "🌱" },
    { name: "Sustainability", color: "bg-emerald-500", icon: "♻️" },
    { name: "Campus Automation", color: "bg-purple-500", icon: "🏫" },
    { name: "Technology", color: "bg-orange-500", icon: "💻" }
  ];

  return (
    <section id="domains-section" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">        
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          Domains for Ideas
        </h2>
        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {domains.map((domain, index) => (
            <Card 
              key={index}
              className={`bg-gray-900/50 border-green-400/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-700 group hover:scale-105 cursor-pointer ${
                gridInView ? `animate-scale-in animate-delay-${index * 100 + 200}` : 'opacity-0 scale-75'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${domain.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                  {domain.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section Component
const GallerySection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: subtitleRef, isInView: subtitleInView } = useScrollAnimation(0.3);
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);
  const images = [
    { id: 1, src: "/idea1.webp", alt: "Participant presentation 1" },
    { id: 2, src: "/idea2.webp", alt: "Participant presentation 2" },
    { id: 3, src: "/idea3.webp", alt: "Participant presentation 3" }
  ];

  return (
    <section id="gallery-section" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">        
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          A Glimpse of Last Year's Talents
        </h2>
        <p 
          ref={subtitleRef}
          className={`text-gray-400 text-center mb-16 text-lg transition-all duration-1000 ${
            subtitleInView ? 'animate-fade-in animate-delay-300' : 'opacity-0 translate-y-8'
          }`}
        >
          Witness the creativity and energy from our amazing participants of last year!
        </p>        <div 
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
        >
          {images.map((image, index) => (
            <Card 
              key={image.id}
              className={`bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-400/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-700 group hover:scale-105 cursor-pointer overflow-hidden shadow-lg ${
                gridInView ? `animate-flip-in animate-delay-${index * 150 + 200}` : 'opacity-0 rotateY-90'
              }`}
            >              <CardContent className="p-0">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-medium text-lg">{image.alt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Jury Section Component
const JurySection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);

  const juryMembers = [
    {
      name: "Apurva Gunnalle",
      title: "Technical Expert",
      icon: "👨‍💻",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "Rushika Arvapalli", 
      title: "Innovation Lead",
      icon: "💡",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      name: "Palla Navya Sree",
      title: "Design Specialist", 
      icon: "🎨",
      gradient: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          Jury Members
        </h2>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {juryMembers.map((member, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-green-400/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-700 group hover:scale-105 ${
                gridInView ? `animate-zoom-in animate-delay-${index * 200 + 300}` : 'opacity-0 scale-75'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg group-hover:shadow-xl transition-shadow ring-4 ring-green-400/20 group-hover:ring-green-400/40`}>
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {member.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Winners Section Component
const WinnersSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);  
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation(0.2);

  const winners = [
    {
      position: "Winner",
      icon: "🏆",
      gradient: "from-yellow-400 to-orange-500",
      glow: "shadow-yellow-400/50"
    },
    {
      position: "1st Runner-up", 
      icon: "🥈",
      gradient: "from-gray-300 to-gray-500",
      glow: "shadow-gray-400/50"
    },
    {
      position: "2nd Runner-up",
      icon: "🥉", 
      gradient: "from-orange-400 to-red-500",
      glow: "shadow-orange-400/50"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`flex items-center justify-center mb-16 transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <Trophy className="w-12 h-12 text-green-400 mr-4" />
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Winners
          </h2>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {winners.map((winner, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-green-400/20 backdrop-blur-sm hover:border-green-400/40 transition-all duration-700 group hover:scale-105 ${winner.glow} hover:shadow-2xl ${
                gridInView ? `animate-rotate-in animate-delay-${index * 200 + 400}` : 'opacity-0 rotate-12 scale-75'
              }`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${winner.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg group-hover:shadow-xl transition-shadow ring-4 ring-green-400/20 group-hover:ring-green-400/40`}>
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {winner.icon} {winner.position}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Poster Section Component
const PosterSection = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation(0.3);
  const { ref: posterRef, isInView: posterInView } = useScrollAnimation(0.3);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">        
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent px-2 tracking-wide transition-all duration-1000 ${
            titleInView ? 'animate-bounce-in' : 'opacity-0 translate-y-10'
          }`}
        >
          Event Poster Preview
        </h2>
        
        <div 
          ref={posterRef}
          className={`bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-400/30 rounded-lg p-8 backdrop-blur-sm hover:border-green-400/50 transition-all duration-700 ${
            posterInView ? 'animate-zoom-in animate-delay-300' : 'opacity-0 scale-75'
          }`}
        >
          <div className="aspect-[3/4] max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-green-400/20">
            <div className="text-center text-green-400">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-xl font-semibold">Idea-A-Thon Event Poster</p>
              <p className="text-sm text-gray-400 mt-2">Poster placeholder - Coming Soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Index Component
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <IdeathonLoader />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
          <Header />
          {/* Fixed background elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20" />
            
            {/* Background particles - added for whole page */}
            <div className="absolute inset-0">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="space-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Enhanced cosmic bubbles with more quantity and variety */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-10 right-32 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-40 left-1/4 w-64 h-64 bg-green-400/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-60 right-1/3 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-80 left-1/3 w-56 h-56 bg-green-600/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
            <div className="absolute top-[120px] right-20 w-88 h-88 bg-cyan-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[160px] left-10 w-72 h-72 bg-green-500/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }} />
            <div className="absolute top-[200px] right-1/4 w-60 h-60 bg-blue-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3.5s' }} />
            
            {/* Additional bubbles for more dynamic effect */}
            <div className="absolute top-[300px] left-1/2 w-48 h-48 bg-green-300/6 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[350px] right-1/5 w-32 h-32 bg-cyan-400/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4.5s' }} />
            <div className="absolute top-[400px] left-1/5 w-24 h-24 bg-green-500/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }} />
            <div className="absolute top-[450px] right-2/3 w-36 h-36 bg-blue-300/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.8s' }} />
            <div className="absolute top-[500px] left-2/3 w-28 h-28 bg-cyan-300/10 rounded-full blur-md animate-pulse" style={{ animationDelay: '3.2s' }} />
            <div className="absolute top-[550px] right-1/2 w-40 h-40 bg-green-400/6 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4.8s' }} />
            
            {/* Floating bots and spheres distributed throughout */}
            <div className="absolute top-32 right-32 w-12 h-12 bg-green-400/20 rounded-lg rotate-45 animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute top-64 left-64 w-8 h-8 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-[200px] left-32 w-16 h-16 bg-green-600/15 rounded-lg rotate-12 animate-bounce" style={{ animationDelay: '2.5s' }} />
            <div className="absolute top-[240px] right-64 w-10 h-10 bg-blue-500/25 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
            <div className="absolute top-[280px] left-16 w-6 h-6 bg-green-300/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-[320px] right-16 w-14 h-14 bg-cyan-400/15 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '3.5s' }} />
            <div className="absolute top-[360px] right-1/4 w-10 h-10 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[400px] left-1/4 w-12 h-12 bg-green-500/15 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '3.2s' }} />
            <div className="absolute top-[440px] right-1/2 w-8 h-8 bg-cyan-300/20 rounded-full animate-bounce" style={{ animationDelay: '1.8s' }} />
            <div className="absolute top-[480px] left-1/2 w-14 h-14 bg-blue-500/15 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '4.5s' }} />
            <div className="absolute top-[520px] right-40 w-9 h-9 bg-green-400/25 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
            <div className="absolute top-[560px] left-40 w-11 h-11 bg-cyan-300/20 rounded-lg rotate-30 animate-pulse" style={{ animationDelay: '2.8s' }} />
          </div>
          
          {/* Content with relative positioning */}
          <div className="relative z-10">
            <HeroSection />
            <JourneySection />
            <DomainsSection />
            <GallerySection />
            {/* <JurySection /> */}
            {/* <WinnersSection /> */}
            <PosterSection />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
