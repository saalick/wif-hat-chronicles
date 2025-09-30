import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import dogImage1 from "@/assets/dog-image-1.jpg";
import PfpButton from "@/components/PfpButton";

const HeroSectionChinese = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden pt-16 background-animate">
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Token Symbol */}
          <div className="mb-8 bounce-in">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary tracking-wider neon-text">
              $OWIF
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 slide-in-up stagger-1">
            <span className="text-foreground hover-glow inline-block">原创</span>{" "}
            <span className="text-gradient inline-block wiggle">WIF</span>{" "}
            <span className="text-foreground hover-glow inline-block">帽子</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto fade-in-up stagger-2 px-4">
           这是"阿奇"WIF狗的原创独有帽子。当旧的WIF帽子被卖掉后，原创帽子成为了他唯一的帽子！我们在这里保持原创WIF帽子的氛围！🎩
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 scale-in stagger-3">
            <a href='https://x.com/OriginalWifHat'>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full hover-lift glow"
            >
              <ArrowRight className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              X 社区
            </Button>
              </a>
            <a href="https://t.me/+SHuOuusWh1o3ZmM0">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full hover-lift"
            >
              <Users className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              加入电报群
            </Button>
              </a>
            <PfpButton />
          </div>

          {/* Contract Address */}
          <div className="mt-16 fade-in-up stagger-4">
            <div className="text-xs sm:text-sm text-muted-foreground mb-2">Solana 合约地址:</div>
            <code className="text-foreground font-mono text-sm sm:text-lg break-all bg-secondary/20 px-3 sm:px-4 py-2 rounded-lg hover-glow block mx-auto max-w-full">
              2wnXhHCZ8Y1cRVVykgHJ2VU8oExJo3goRGPLEgfC3jEK
            </code>
          </div>
        </div>
      </div>

      {/* Dog Images on sides - hidden on mobile, responsive on larger screens */}
      <div className="hidden lg:block absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 w-32 xl:w-48 2xl:w-64 h-32 xl:h-48 2xl:h-64 opacity-60 slide-in-left stagger-5">
        <img 
          src={dogImage1} 
          alt="OWIF dog with hat" 
          className="w-full h-full object-cover rounded-full float hover-glow"
        />
      </div>
      <div className="hidden lg:block absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-32 xl:w-48 2xl:w-64 h-32 xl:h-48 2xl:h-64 opacity-60 slide-in-right stagger-6">
        <img 
          src={dogImage1} 
          alt="OWIF dog with hat" 
          className="w-full h-full object-cover rounded-full float hover-glow"
          style={{animationDelay: '3s'}}
        />
      </div>
      
      {/* Floating geometric shapes - responsive */}
      <div className="absolute top-20 left-4 sm:left-20 w-8 sm:w-12 h-8 sm:h-12 bg-primary/40 rounded-full pulse-glow parallax-slow"></div>
      <div className="absolute top-40 right-8 sm:right-32 w-6 sm:w-8 h-6 sm:h-8 bg-accent/50 rotate-45 rotate-slow hover-glow"></div>
      <div className="absolute bottom-40 left-8 sm:left-40 w-12 sm:w-16 h-12 sm:h-16 border-2 border-primary/50 rounded-full float"></div>
      <div className="absolute bottom-20 right-4 sm:right-20 w-4 sm:w-6 h-4 sm:h-6 bg-muted/60 wiggle"></div>
      <div className="absolute top-1/3 left-1/4 w-3 sm:w-4 h-3 sm:h-4 bg-primary/30 rounded-full bounce-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-5 sm:w-6 h-5 sm:h-6 border border-accent/40 rotate-45 rotate-slow"></div>
    </section>
  );
};

export default HeroSectionChinese;