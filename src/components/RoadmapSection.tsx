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
    title: "Original Hat Genesis",
    date: "December 26, 2018",
    description: "Owners of Achi posted the iconic \"Red Hat\" photo on Instagram, marking the first historical dogwifhat meme. The pink hat photo followed as the second post.",
    status: "complete"
  },
  {
    id: 2,
    title: "Launch of the Original Wif Hat Token",
    date: "2024 Pump.fun token launch; UnBonded until August 10, 2025 at 21:21",
    description: "The $OWIF token was launched on the Solana blockchain via Pump.fun and successfully bonded and migrated to its current state.",
    status: "complete"
  },
  {
    id: 3,
    title: "Growth & Community Mobilization",
    description: "Redistribution of wallets to committed \"Diamond Handed\" holders. Access Pumpfun Creator rewards for CTO. Deploy influencers on Timeline. Solidify a core community. Create engaging content to drive growth.",
    status: "in-progress",
    progress: 88
  },
  {
    id: 4,
    title: "Visibility of Legendary Status",
    description: "Update listings on Dexscreener & Dextools. Achieve whitelisting on Jupiter. Secure listings on CoinGecko & CoinMarketCap. Establish dominance on social media.",
    status: "in-progress",
    progress: 44
  },
  {
    id: 5,
    title: "Market Domination",
    description: "Surpass Dogwifcoin's market cap. Form strategic partnerships. Run marketing campaigns, contests, and community giveaways. Secure listings on centralized exchanges (CEXs).",
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
        <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 font-bold">
          ✅ Complete
        </Badge>
      );
    case 'in-progress':
      return (
        <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/30 font-bold">
          🟣 {progress}% Complete
        </Badge>
      );
    default:
      return (
        <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 font-bold">
          🔥 In Progress
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
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-neon-purple font-bold">{phase.progress}%</span>
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
            The Original Wif Hat
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ROADMAP</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A symbol of enduring legacy & memetic history.
          </p>
          
          {/* Dog and Hat Images */}
          <div className="relative w-80 h-80 mx-auto mb-12">
            <div className="absolute inset-0 neon-glow rounded-full animate-glow"></div>
            <img 
              src={dogImage} 
              alt="Original Wif Dog" 
              className="w-full h-full object-contain relative z-10"
            />
            <img 
              src={hatImage} 
              alt="Original Wif Hat" 
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 object-contain animate-float z-20"
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
        <Card className="card-glow p-6 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-neon-blue font-bold">The Original Wif Hat Came 1st</span> & remains a Symbol of Enduring Legacy. 
            While others may auction their hats, we hold fast to the True Legacy of dogwifhat memetics. 
            <span className="text-destructive font-medium"> None of this should be considered financial advice.</span> 
            Cryptocurrency memecoins are high risk — users should research before purchasing.
          </p>
        </Card>
      </div>
    </section>
  );
};