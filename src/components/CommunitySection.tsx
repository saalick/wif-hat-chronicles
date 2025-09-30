import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  const socialLinks = [
    { name: "推特/X", followers: "1万", description: "日常脑残内容注射" },
    { name: "电报群", members: "5千", description: "堕落者24/7作战室" },
    { name: "Discord", members: "3千", description: "纯混乱协调总部" },
    { name: "Reddit", subscribers: "2千", description: "老帽子深度分析和废话圣地" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            加入混乱
          </h2>
          <p className="text-xl text-muted-foreground">
            与互联网上最疯狂的老帽子堕落者联手
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mb-4 mx-auto group-hover:wiggle glow"></div>
                <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{social.followers || social.members || social.subscribers}</div>
                <p className="text-sm text-muted-foreground">{social.description}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  立即加入
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">钻石爪俱乐部</h3>
                <p className="text-lg mb-4">
                  最疯狂的老帽子持有者获得高级特权：
                </p>
                <ul className="space-y-2">
                  <li>比其他人先获得内幕消息</li>
                  <li>VIP堕落者窝点访问权</li>
                  <li>火爆表情包竞赛奖励</li>
                  <li>独家混乱协调活动</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">混乱议会</h3>
                <p className="text-lg">
                  民主但要疯狂化。每个老帽子的声音都被听到。
                  我们一起建造加密货币历史上最火爆的帽子帝国。
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/20 to-accent/30 rounded-2xl p-8 text-center relative overflow-hidden border border-primary/20">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://picsum.photos/600/400?random=6" 
                  alt="Community Pack" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-primary rounded-full mb-4 mx-auto animate-pulse glow"></div>
                <h3 className="text-3xl font-bold mb-4">见证混乱</h3>
                <p className="text-lg mb-6">
                  加入成千上万理解老帽子能量的绝对单位。
                  这不只是一个代币朋友，这是一场完整的生活方式革命。
                </p>
                <Button size="lg" className="glow">
                  加入疯狂
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">2万+</div>
                <div className="text-sm text-muted-foreground">认证堕落者</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">50万+</div>
                <div className="text-sm text-muted-foreground">火爆表情包</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">混乱模式</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">西格玛能量</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;