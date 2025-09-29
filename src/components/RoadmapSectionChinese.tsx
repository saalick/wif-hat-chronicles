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
  description: string[];
  status: 'complete' | 'in-progress' | 'upcoming';
  progress?: number;
  color: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "原版帽子创世纪 🎩✨",
    date: "2018年12月26日",
    description: [
      "📸 阿奇的主人在Instagram上发布了标志性的红帽子照片",
      "🏆 第一个历史性的狗戴帽模因诞生了 - 创世纪！",
      "💋 粉色帽子照片紧随其后，成为传奇的第二张照片", 
      "🎭 一个改变一切的模因帝国诞生了！"
    ],
    status: "complete",
    color: "fun-green"
  },
  {
    id: 2,
    title: "代币起飞 🚀💰",
    date: "2024年 Pump.fun发布 → 2025年8月10日21:21解绑",
    description: [
      "🎯 $OWIF在Solana区块链通过Pump.fun发布",
      "💎 像真正的CHAD一样成功绑定和迁移",
      "🚫 这里没有割韭菜 - 只允许钻石手！",
      "⚡ 直接冲向月球，风格十足！"
    ],
    status: "complete",
    color: "fun-blue"
  },
  {
    id: 3,
    title: "钻石手集结 💎🤝",
    description: [
      "🦍 只把币包重新分配给真正的持有者",
      "📄🚫 这个社区不允许纸手！",
      "💰 为CTO获取甜美的Pumpfun创作者奖励",
      "📱 在各个时间线部署阿尔法影响者",
      "🏗️ 建立一个不可阻挡的钻石手社区",
      "🎯 创造引人入胜的内容推动爆炸性增长"
    ],
    status: "in-progress",
    progress: 88,
    color: "fun-purple"
  },
  {
    id: 4,
    title: "传奇地位解锁 🏆👑",
    description: [
      "📊 在Dexscreener和Dextools上更新列表 ✅",
      "🚀 实现Jupiter白名单 - 即将到来™️",
      "🦎 在CoinGecko和CoinMarketCap上获得列表",
      "📱 在社交媒体上建立绝对统治地位",
      "⚡ 社交媒体统治模式：已激活！",
      "🌟 成为我们一直以来的传奇地位！"
    ],
    status: "in-progress",
    progress: 44,
    color: "fun-orange"
  },
  {
    id: 5,
    title: "月球任务及更远 🌙🚀",
    description: [
      "📈💥 轻松翻转Dogwifcoin的市值！",
      "🤝 与其他GIGACHADS形成战略伙伴关系",
      "🎉 举办史诗般的营销活动和比赛",
      "🎁 为钻石手发起社区赠品活动",
      "🏦 在主要中心化交易所(CEX)获得上市",
      "🌌👨‍🚀 冲向月球及更远 - 没有极限！"
    ],
    status: "upcoming",
    color: "fun-pink"
  }
];

const StatusIcon = ({ status }: { status: Phase['status'] }) => {
  switch (status) {
    case 'complete':
      return <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-fun-green animate-spin" fill="currentColor" />;
    case 'in-progress':
      return <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-fun-pink animate-bounce" fill="currentColor" />;
    default:
      return <Heart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-fun-blue animate-pulse" fill="currentColor" />;
  }
};

const StatusBadge = ({ status, progress, color }: { status: Phase['status']; progress?: number; color: string }) => {
  const baseClasses = `px-3 sm:px-4 py-2 rounded-full font-bold text-sm sm:text-base lg:text-lg border-2 animate-wiggle`;
  
  switch (status) {
    case 'complete':
      return (
        <Badge className={`${baseClasses} bg-fun-green/20 text-fun-green border-fun-green/50`}>
          ✨ 完成了！ ✨
        </Badge>
      );
    case 'in-progress':
      return (
        <Badge className={`${baseClasses} bg-${color}/20 text-${color} border-${color}/50`}>
          🔥 {progress}% 进行中 🔥
        </Badge>
      );
    default:
      return (
        <Badge className={`${baseClasses} bg-fun-blue/20 text-fun-blue border-fun-blue/50 animate-bounce`}>
          ⭐ 即将推出 ⭐
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
      <Card className="card-fun p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="flex-shrink-0 sm:mt-2">
            <StatusIcon status={phase.status} />
          </div>
          <div className="flex-1 space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold font-comic text-${phase.color} drop-shadow-lg`}>
                  {phase.title}
                </h3>
                <StatusBadge status={phase.status} progress={phase.progress} color={phase.color} />
              </div>
              {phase.date && (
                <p className={`text-sm sm:text-base lg:text-lg text-${phase.color} font-semibold font-casual bg-${phase.color}/10 px-2 sm:px-3 py-1 rounded-full inline-block`}>
                  📅 {phase.date}
                </p>
              )}
            </div>
            
            <div className="space-y-3">
              <ul className="space-y-2">
                {phase.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3 text-foreground leading-relaxed text-sm sm:text-base lg:text-lg font-casual">
                    <span className={`text-${phase.color} flex-shrink-0 mt-1`}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {phase.progress && (
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm sm:text-base lg:text-lg">
                  <span className="text-muted-foreground font-casual">🎯 进度氛围</span>
                  <span className={`text-${phase.color} font-bold animate-bounce-fun`}>
                    {phase.progress}% 冲冲冲！ 🚀
                  </span>
                </div>
                <div className="relative">
                  <Progress 
                    value={isVisible ? phase.progress : 0} 
                    className="h-3 sm:h-4 bg-secondary/50 rounded-full overflow-hidden"
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

export const RoadmapSectionChinese = () => {
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
    <section className="min-h-screen py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Fun floating shapes background with glow - hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-fun-${['pink', 'blue', 'green', 'orange', 'purple'][i % 5]}/30 blob-shape shadow-lg hidden sm:block`}
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div 
          ref={heroRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold font-comic text-gradient mb-6 sm:mb-8 tracking-tight animate-bounce-fun drop-shadow-2xl">
            原版狗戴帽
          </h1>
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-casual mb-4 sm:mb-6 text-fun-purple animate-wiggle">
              🗺️ 梦想路线图 🗺️
            </h2>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 text-xl sm:text-2xl lg:text-3xl animate-spin">✨</div>
            <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 text-xl sm:text-2xl lg:text-3xl animate-bounce">🚀</div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto font-casual leading-relaxed px-4">
            持久传承和模因历史的象征！ 🎭<br/>
            <span className="text-fun-pink font-bold text-lg sm:text-xl lg:text-2xl">
              我们不只是在持有 - 我们在用钻石手守护文化！ 💎🙌✨
            </span>
          </p>
          
          {/* Dog and Hat Images */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto mb-12 sm:mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-fun-pink via-fun-blue to-fun-purple rounded-full animate-rainbow p-1 shadow-2xl">
              <div className="w-full h-full bg-background rounded-full shadow-inner"></div>
            </div>
            <img 
              src={dogImage} 
              alt="原版狗戴帽 - 传奇好狗狗" 
              className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-500 cursor-pointer drop-shadow-2xl"
            />
            <img 
              src={hatImage} 
              alt="原版狗戴帽 - 模因之冠" 
              className="absolute -top-12 sm:-top-16 lg:-top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain animate-bounce-fun z-20 hover:animate-spin transition-all duration-300 cursor-pointer drop-shadow-xl"
            />
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl lg:text-6xl animate-bounce drop-shadow-lg">
              👑
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-20">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <Card className="card-fun p-4 sm:p-6 lg:p-8 text-center border-4 border-fun-pink/50 backdrop-blur-sm shadow-2xl">
          <div className="space-y-3 sm:space-y-4">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-comic text-fun-blue animate-wiggle">
              🚨 真货警报 🚨
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed font-casual">
              <span className="text-fun-pink font-bold text-lg sm:text-xl lg:text-2xl block mb-2">
                🎩 原版狗戴帽第一！ 🎩
              </span>
              我们是持久传承的OG象征！当别人在拍卖他们的帽子时，
              我们像绝对传奇一样持有狗戴帽模因的真正传承！ 🏆💎<br/>
              <span className="text-destructive font-bold animate-bounce-fun text-base sm:text-lg lg:text-xl block mt-3 sm:mt-4">
                ⚠️ 非投资建议 ⚠️
              </span>
              <span className="text-muted-foreground text-sm sm:text-base">
                加密模因币 = 高风险，高氛围！冲向月球前请DYOR！ 🚀📈🌙
              </span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};