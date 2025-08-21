import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import dogImage from '@/assets/wif-dog.png';
import hatImage from '@/assets/wif-hat.png';
import { CheckCircle2, Clock, Flame } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  date?: string;
  description: string;
  status: 'complete' | 'in-progress' | 'upcoming';
  progress?: number;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "OG Hat Genesis 🎩✨",
    date: "December 26, 2018",
    description: "The legendary moment when Achi's owners dropped the ICONIC red hat pic on Insta 📸. This wasn't just a photo - it was the birth of a MEME EMPIRE! The pink hat follow-up? *Chef's kiss* 💋👌",
    status: "complete"
  },
  {
    id: 2,
    title: "Token Go Brrrr 🚀💰",
    date: "2024 Pump.fun launch → UnBonded Aug 10, 2025 at 21:21",
    description: "$OWIF hit the Solana blockchain via Pump.fun and said 'YEET!' 🎯 Successfully bonded and migrated like a TRUE CHAD. No rugs here, only DIAMOND HANDS! 💎🙌",
    status: "complete"
  },
  {
    id: 3,
    title: "Diamond Hands Assembly 💎🤝",
    description: "Redistributing bags to the REAL ONES - no paper hands allowed! 📄🚫 Accessing those sweet Pumpfun Creator rewards, deploying alpha influencers, and building an UNSTOPPABLE community. LFG! 🦍💪",
    status: "in-progress",
    progress: 88
  },
  {
    id: 4,
    title: "Legendary Status Unlocked 🏆👑",
    description: "Getting listed EVERYWHERE! Dexscreener? ✅ Dextools? ✅ Jupiter whitelist? Soon™️ CoinGecko & CMC incoming! 🦎📊 Social media domination mode: ACTIVATED! 📱⚡",
    status: "in-progress",
    progress: 44
  },
  {
    id: 5,
    title: "Moon Mission & Beyond 🌙🚀",
    description: "Flipping Dogwifcoin's market cap like it's nothing! 📈💥 Strategic partnerships with other GIGACHADS, epic marketing campaigns, community giveaways, and CEX listings. TO THE MOON AND BEYOND! 🌌👨‍🚀",
    status: "upcoming"
  }
];

const StatusIcon = ({ status }: { status: Phase['status'] }) => {
  switch (status) {
    case 'complete':
      return <CheckCircle2 className="w-6 h-6 text-neon-green" />;
    case 'in-progress':
      return <Flame className="w-6 h-6 text-neon-pink animate-glow" />;
    default:
      return <Clock className="w-6 h-6 text-muted-foreground" />;
  }
};

const StatusBadge = ({ status, progress }: { status: Phase['status']; progress?: number }) => {
  switch (status) {
    case 'complete':
      return (
        <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 font-bold animate-pulse">
          ✅ REKT ✅
        </Badge>
      );
    case 'in-progress':
      return (
        <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 font-bold">
          🔥 {progress}% LFG 🔥
        </Badge>
      );
    default:
      return (
        <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 font-bold animate-bounce">
          🚀 SOON™️ 🚀
        </Badge>
      );
  }
};

const PhaseCard = ({ phase, index }: { phase: Phase; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="card-glow p-6 hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <StatusIcon status={phase.status} />
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-xl font-bold text-gradient">{phase.title}</h3>
                <StatusBadge status={phase.status} progress={phase.progress} />
              </div>
              {phase.date && (
                <p className="text-sm text-neon-blue font-medium">{phase.date}</p>
              )}
            </div>
            
            <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
            
            {phase.progress && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Diamond Hand Progress 💎</span>
                  <span className="text-neon-purple font-bold">{phase.progress}% LFG!</span>
                </div>
                <Progress 
                  value={isVisible ? phase.progress : 0} 
                  className="h-2 bg-secondary"
                />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export const RoadmapSection = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div 
          ref={heroRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 tracking-tight">
            THE ORIGINAL WIF HAT
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-bounce">🗺️ ROADMAP 🗺️</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A symbol of enduring legacy & memetic history. <br/>
            <span className="text-neon-pink font-bold">We're not just hodling - we're DIAMOND HANDING the culture! 💎🙌</span>
          </p>
          
          {/* Dog and Hat Images */}
          <div className="relative w-80 h-80 mx-auto mb-12">
            <div className="absolute inset-0 neon-glow rounded-full animate-glow"></div>
            <img 
              src={dogImage} 
              alt="Original Wif Dog - The OG Good Boy" 
              className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-500"
            />
            <img 
              src={hatImage} 
              alt="Original Wif Hat - The Crown Jewel" 
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 object-contain animate-float z-20 hover:animate-spin"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8 mb-20">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <Card className="card-glow p-6 text-center border-2 border-neon-pink/30">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-neon-blue font-bold text-lg">🚨 THE ORIGINAL WIF HAT CAME 1ST 🚨</span> <br/>
            We remain the Symbol of Enduring Legacy! While others auction their hats, we HODL the True Legacy of dogwifhat memetics. 🎩💎<br/>
            <span className="text-destructive font-bold animate-pulse">⚠️ NFA - NOT FINANCIAL ADVICE ⚠️</span> <br/>
            Crypto memecoins = high risk, high reward. DYOR before you send it! 🚀📈💀
          </p>
        </Card>
      </div>
    </section>
  );
};