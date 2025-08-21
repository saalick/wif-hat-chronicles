import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import dogImage from '@/assets/wif-dog.png';
import hatImage from '@/assets/wif-hat.png';
import { CheckCircle2, Clock, Flame, Star, Zap, Heart } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  date?: string;
  description: string;
  status: 'complete' | 'in-progress' | 'upcoming';
  progress?: number;
  color: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "OG Hat Genesis 🎩✨",
    date: "December 26, 2018",
    description: "The legendary moment when Achi's owners dropped the ICONIC red hat pic on Insta 📸. This wasn't just a photo - it was the birth of a MEME EMPIRE! The pink hat follow-up? *Chef's kiss* 💋👌",
    status: "complete",
    color: "fun-green"
  },
  {
    id: 2,
    title: "Token Go Brrrr 🚀💰",
    date: "2024 Pump.fun launch → UnBonded Aug 10, 2025 at 21:21",
    description: "$OWIF hit the Solana blockchain via Pump.fun and said 'YEET!' 🎯 Successfully bonded and migrated like a TRUE CHAD. No rugs here, only DIAMOND HANDS! 💎🙌",
    status: "complete",
    color: "fun-blue"
  },
  {
    id: 3,
    title: "Diamond Hands Assembly 💎🤝",
    description: "Redistributing bags to the REAL ONES - no paper hands allowed! 📄🚫 Accessing those sweet Pumpfun Creator rewards, deploying alpha influencers, and building an UNSTOPPABLE community. LFG! 🦍💪",
    status: "in-progress",
    progress: 88,
    color: "fun-purple"
  },
  {
    id: 4,
    title: "Legendary Status Unlocked 🏆👑",
    description: "Getting listed EVERYWHERE! Dexscreener? ✅ Dextools? ✅ Jupiter whitelist? Soon™️ CoinGecko & CMC incoming! 🦎📊 Social media domination mode: ACTIVATED! 📱⚡",
    status: "in-progress",
    progress: 44,
    color: "fun-orange"
  },
  {
    id: 5,
    title: "Moon Mission & Beyond 🌙🚀",
    description: "Flipping Dogwifcoin's market cap like it's nothing! 📈💥 Strategic partnerships with other GIGACHADS, epic marketing campaigns, community giveaways, and CEX listings. TO THE MOON AND BEYOND! 🌌👨‍🚀",
    status: "upcoming",
    color: "fun-pink"
  }
];

const StatusIcon = ({ status }: { status: Phase['status'] }) => {
  switch (status) {
    case 'complete':
      return <Star className="w-8 h-8 text-fun-green animate-spin" fill="currentColor" />;
    case 'in-progress':
      return <Zap className="w-8 h-8 text-fun-pink animate-bounce" fill="currentColor" />;
    default:
      return <Heart className="w-8 h-8 text-fun-blue animate-pulse" fill="currentColor" />;
  }
};

const StatusBadge = ({ status, progress, color }: { status: Phase['status']; progress?: number; color: string }) => {
  const baseClasses = `px-4 py-2 rounded-full font-bold text-lg border-2 animate-wiggle`;
  
  switch (status) {
    case 'complete':
      return (
        <Badge className={`${baseClasses} bg-fun-green/20 text-fun-green border-fun-green/50`}>
          ✨ CRUSHED IT! ✨
        </Badge>
      );
    case 'in-progress':
      return (
        <Badge className={`${baseClasses} bg-${color}/20 text-${color} border-${color}/50`}>
          🔥 {progress}% VIBING 🔥
        </Badge>
      );
    default:
      return (
        <Badge className={`${baseClasses} bg-fun-blue/20 text-fun-blue border-fun-blue/50 animate-bounce`}>
          ⭐ COMING SOON ⭐
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
          setTimeout(() => setIsVisible(true), index * 300);
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
          : 'opacity-0 translate-y-12'
      }`}
    >
      <Card className="card-fun p-8 mb-6 backdrop-blur-sm">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 mt-2">
            <StatusIcon status={phase.status} />
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className={`text-2xl font-bold font-comic text-${phase.color} drop-shadow-lg`}>
                  {phase.title}
                </h3>
                <StatusBadge status={phase.status} progress={phase.progress} color={phase.color} />
              </div>
              {phase.date && (
                <p className={`text-lg text-${phase.color} font-semibold font-casual bg-${phase.color}/10 px-3 py-1 rounded-full inline-block`}>
                  📅 {phase.date}
                </p>
              )}
            </div>
            
            <p className="text-foreground leading-relaxed text-lg font-casual">
              {phase.description}
            </p>
            
            {phase.progress && (
              <div className="space-y-3">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground font-casual">🎯 Progress Vibes</span>
                  <span className={`text-${phase.color} font-bold animate-bounce-fun`}>
                    {phase.progress}% LETS GOOO! 🚀
                  </span>
                </div>
                <div className="relative">
                  <Progress 
                    value={isVisible ? phase.progress : 0} 
                    className="h-4 bg-secondary/50 rounded-full overflow-hidden"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-fun-pink via-fun-blue to-fun-purple opacity-30 rounded-full animate-rainbow"></div>
                </div>
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
    <section className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Fun floating shapes background with glow */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-8 h-8 bg-fun-${['pink', 'blue', 'green', 'orange', 'purple'][i % 5]}/30 blob-shape shadow-lg`}
            style={{
              filter: `drop-shadow(0 0 10px hsl(var(--fun-${['pink', 'blue', 'green', 'orange', 'purple'][i % 5]}) / 0.4))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div 
          ref={heroRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold font-comic text-gradient mb-8 tracking-tight animate-bounce-fun drop-shadow-2xl">
            THE ORIGINAL WIF HAT
          </h1>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold font-casual mb-6 text-fun-purple animate-wiggle">
              🗺️ ROADMAP OF DREAMS 🗺️
            </h2>
            <div className="absolute -top-2 -right-2 text-3xl animate-spin">✨</div>
            <div className="absolute -bottom-2 -left-2 text-3xl animate-bounce">🚀</div>
          </div>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-casual leading-relaxed">
            A symbol of enduring legacy & memetic history! 🎭<br/>
            <span className="text-fun-pink font-bold text-2xl">
              We're not just hodling - we're DIAMOND HANDING the culture! 💎🙌✨
            </span>
          </p>
          
          {/* Dog and Hat Images */}
          <div className="relative w-96 h-96 mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-fun-pink via-fun-blue to-fun-purple rounded-full animate-rainbow p-1 shadow-2xl">
              <div className="w-full h-full bg-background rounded-full shadow-inner"></div>
            </div>
            <img 
              src={dogImage} 
              alt="Original Wif Dog - The Legendary Good Boy" 
              className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-500 cursor-pointer drop-shadow-2xl"
            />
            <img 
              src={hatImage} 
              alt="Original Wif Hat - The Crown of Memes" 
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 object-contain animate-bounce-fun z-20 hover:animate-spin transition-all duration-300 cursor-pointer drop-shadow-xl"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce drop-shadow-lg">
              👑
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6 mb-20">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <Card className="card-fun p-8 text-center border-4 border-fun-pink/50 backdrop-blur-sm shadow-2xl">
          <div className="space-y-4">
            <div className="text-3xl font-bold font-comic text-fun-blue animate-wiggle">
              🚨 THE REAL DEAL ALERT 🚨
            </div>
            <p className="text-lg text-foreground leading-relaxed font-casual">
              <span className="text-fun-pink font-bold text-2xl block mb-2">
                🎩 THE ORIGINAL WIF HAT CAME 1ST! 🎩
              </span>
              We're the OG Symbol of Enduring Legacy! While others auction their hats, 
              we HODL the True Legacy of dogwifhat memetics like absolute LEGENDS! 🏆💎<br/>
              <span className="text-destructive font-bold animate-bounce-fun text-xl block mt-4">
                ⚠️ NFA - NOT FINANCIAL ADVICE ⚠️
              </span>
              <span className="text-muted-foreground">
                Crypto memecoins = high risk, high vibes! DYOR before you send it to the moon! 🚀📈🌙
              </span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};