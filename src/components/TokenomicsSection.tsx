import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TokenomicsSection = () => {
  const tokenomics = [
    { label: "为了文化", percentage: 40, description: "给老玩家空投，钻石手奖励" },
    { label: "保持流动性", percentage: 30, description: "只做顺畅交易，没有可疑业务" },
    { label: "与众不同的建设", percentage: 20, description: "资助最火爆的老帽子创新" },
    { label: "病毒式营销", percentage: 10, description: "在所有时间线传播老帽子至上" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-l from-background to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            数字游戏
          </h2>
          <p className="text-xl text-muted-foreground">
            真正说得通的数学（令人震惊）
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <img 
                src="https://picsum.photos/500/300?random=5" 
                alt="Tokenomics Expert Dog" 
                className="mx-auto rounded-2xl shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-300 glow-cyan"
                style={{ maxHeight: '300px' }}
              />
            </div>
            <Card className="bg-card/80 backdrop-blur border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-center">
                  10亿 $OWIF 代币
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {tokenomics.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-primary font-bold">{item.percentage}%</span>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-destructive rounded-full mb-4 mx-auto animate-pulse"></div>
                <h3 className="text-2xl font-bold mb-4">零手续费能量</h3>
                <p className="text-lg">
                  0% 买入税，0% 卖出税。我们太老了不玩税务局的把戏。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-lg mb-4 mx-auto rotate-45"></div>
                <h3 className="text-2xl font-bold mb-4">流动性锁定至宇宙热寂</h3>
                <p className="text-lg">
                  流动性锁定直到宇宙本身崩塌。
                  我们不会割任何人韭菜，朋友。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mb-4 mx-auto glow wiggle"></div>
                <h3 className="text-2xl font-bold mb-4">所有权 = 抛弃</h3>
                <p className="text-lg">
                  合约所有权直接删除。这现在是人民的币。
                  老堕落者的力量！
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;