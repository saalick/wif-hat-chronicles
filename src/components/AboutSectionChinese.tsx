import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import dogImage3 from "@/assets/dog-image-3.jpg";

const AboutSectionChinese = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full float parallax-slow"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-accent/20 rotate-45 rotate-slow"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xl sm:text-2xl font-bold text-primary mb-4 block bounce-in neon-text">$OWIF</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 slide-in-up stagger-1">
            <span className="text-gradient">起源故事</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-foreground mb-4 sm:mb-6 fade-in-up stagger-2 px-4">
              OWIF模因币诞生时有着一个单一的使命：当新帽子变旧时，保持老帽子的活力。参与很简单 - 获得一袋$OWIF，然后将您的头像更新为标志性的OWIF图像或您自己独特的老帽子创作。就是这样 - 您正式加入了团队，准备战斗。欢迎来到老帽子军团，年轻的战士。
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary font-bold wiggle scale-in stagger-3">
              **您的使命 = 像生命攸关一样招募更多成员**
            </p>
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16 bounce-in stagger-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full hover-lift glow"
          >
            <Users className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            查看社区
          </Button>
        </div>

        <div className="text-center scale-in stagger-5">
          <div className="max-w-xs sm:max-w-md mx-auto">
            <img 
              src={dogImage3} 
              alt="OWIF Dog with Hat" 
              className="w-full rounded-2xl mb-4 hover-lift hover-glow"
            />
            <p className="text-sm sm:text-base text-muted-foreground italic fade-in-up stagger-6">OWIF - 只有老帽子的狗</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionChinese;