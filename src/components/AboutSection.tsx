import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import dogImage3 from "@/assets/dog-image-3.jpg";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full float parallax-slow"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-accent/20 rotate-45 rotate-slow"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xl sm:text-2xl font-bold text-primary mb-4 block bounce-in neon-text">$OWIF</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 slide-in-up stagger-1">
            <span className="text-gradient">The Origin Story</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-foreground mb-4 sm:mb-6 fade-in-up stagger-2 px-4">
              The OWIF meme coin was born with a singular mission: when new hats get old, keep the olf hat vibes alive. Participation is simple - get a bag of $OWIF, then update your profile picture to the iconic OWIF image or your own unique olf hat creation. That's it - you're officially part of the squad and ready for battle. Welcome to the olf hat army, young warrior.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary font-bold wiggle scale-in stagger-3">
              **Your mission = recruit more members like your life depends on it**
            </p>
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16 bounce-in stagger-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full hover-lift glow"
          >
            <Users className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            View Community
          </Button>
        </div>

        <div className="text-center scale-in stagger-5">
          <div className="max-w-xs sm:max-w-md mx-auto">
            <img 
              src={dogImage3} 
              alt="OWIF Dog with Hat" 
              className="w-full rounded-2xl mb-4 hover-lift hover-glow"
            />
            <p className="text-sm sm:text-base text-muted-foreground italic fade-in-up stagger-6">OWIF - Wif Dogs Only Olf Hat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;