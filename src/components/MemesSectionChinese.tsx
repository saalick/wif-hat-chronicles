import { Card, CardContent } from "@/components/ui/card";

import meme1 from "@/assets/meme-1.jpg";
import meme2 from "@/assets/meme-2.jpg";
import meme3 from "@/assets/meme-3.jpg";
import meme4 from "@/assets/meme-4.jpg";
import meme5 from "@/assets/meme-5.jpg";
import meme6 from "@/assets/meme-6.jpg";

const MemesSectionChinese = () => {
  const memes = [
    { id: 1, url: meme1 },
    { id: 2, url: meme2 },
    { id: 3, url: meme3 },
    { id: 4, url: meme4 },
    { id: 5, url: meme5 },
    { id: 6, url: meme6 }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 bg-background relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute top-10 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary/20 rounded-full float opacity-30 pulse-glow"></div>
      <div className="absolute top-40 right-4 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-accent/20 rotate-45 float opacity-40 parallax-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-8 sm:left-32 w-10 sm:w-12 h-10 sm:h-12 border-2 border-primary/30 rounded-full rotate-slow opacity-50 hover-glow"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/30 wiggle"></div>
      <div className="absolute bottom-1/3 left-1/5 w-8 h-8 border border-primary/20 rounded-full bounce-slow"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 wiggle slide-in-up">
            <span className="text-gradient neon-text">火爆表情包</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 fade-in-up stagger-1 px-4">
            震撼网络的最传奇OWIF内容
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {memes.map((meme, index) => (
            <Card 
              key={meme.id} 
              className="overflow-hidden hover-lift hover-glow scale-in"
              style={{animationDelay: `${index * 0.1 + 0.2}s`}}
            >
              <CardContent className="p-0">
                <img 
                  src={meme.url} 
                  alt={`OWIF Meme ${meme.id}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MemesSectionChinese;