import { RoadmapSectionChinese } from '@/components/RoadmapSectionChinese';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const Chinese = () => {
  return (
    <div className="min-h-screen relative">
      <LanguageSwitcher />
      <RoadmapSectionChinese />
    </div>
  );
};

export default Chinese;