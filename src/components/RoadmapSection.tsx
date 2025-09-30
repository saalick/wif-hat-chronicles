import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "第一阶段",
      title: "觉醒",
      status: "completed",
      items: [
        "发布 $OWIF 代币",
        "建立老帽子社区",
        "部署表情包武器库",
        "在去中心化交易所上市"
      ]
    },
    {
      phase: "第二阶段", 
      title: "帽子革命",
      status: "current",
      items: [
        "1000个老帽子持有者",
        "CoinGecko和CMC上市",
        "老帽子NFT收藏",
        "名人老帽子代言"
      ]
    },
    {
      phase: "第三阶段",
      title: "世界统治",
      status: "upcoming",
      items: [
        "10,000老帽子军队",
        "主要中心化交易所上市",
        "老帽子商品",
        "老帽子狗收容所资助"
      ]
    },
    {
      phase: "第四阶段",
      title: "老帽子传奇",
      status: "future",
      items: [
        "100,000老帽子信徒",
        "跨链扩展",
        "老帽子元宇宙",
        "所有狗的养老院"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500";
      case "current": return "bg-primary";
      case "upcoming": return "bg-blue-500";
      default: return "bg-muted";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed": return <Badge className="bg-green-500 hover:bg-green-600">✅ 已完成</Badge>;
      case "current": return <Badge className="glow">🚀 进行中</Badge>;
      case "upcoming": return <Badge variant="secondary">⏳ 即将到来</Badge>;
      default: return <Badge variant="outline">🔮 未来</Badge>;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            路线图 🗺️
          </h2>
          <p className="text-xl text-muted-foreground">
            从老帽子到传奇的旅程
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-muted rounded-full"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full ${getStatusColor(item.status)} border-4 border-background shadow-lg`}></div>
                </div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="bg-card/90 backdrop-blur hover:scale-105 transition-transform duration-300 border-2 border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold">{item.phase}</h3>
                        {getStatusBadge(item.status)}
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-4">{item.title}</h4>
                      <ul className="space-y-2">
                        {item.items.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center space-x-2">
                            <span className="text-lg">
                              {item.status === "completed" ? "✅" : 
                               item.status === "current" ? "🔄" : "⭐"}
                            </span>
                            <span className={item.status === "completed" ? "line-through opacity-70" : ""}>
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-primary/20 border-primary/40 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">我们的使命</h3>
              <p className="text-lg">
                证明老不意味着被遗忘。
                每个伟大的表情包币都需要属于它的时代，今天就是我们的时代！
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;