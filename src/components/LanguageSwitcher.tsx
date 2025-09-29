import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const LanguageSwitcher = () => {
  const location = useLocation();
  const isChinesePage = location.pathname === '/chinese';

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Link to="/">
        <Button 
          variant={!isChinesePage ? "default" : "outline"}
          className={`font-bold transition-all duration-300 ${
            !isChinesePage 
              ? 'bg-fun-blue text-white hover:bg-fun-blue/80' 
              : 'border-fun-blue text-fun-blue hover:bg-fun-blue/10'
          }`}
        >
          🇺🇸 English
        </Button>
      </Link>
      <Link to="/chinese">
        <Button 
          variant={isChinesePage ? "default" : "outline"}
          className={`font-bold transition-all duration-300 ${
            isChinesePage 
              ? 'bg-fun-pink text-white hover:bg-fun-pink/80' 
              : 'border-fun-pink text-fun-pink hover:bg-fun-pink/10'
          }`}
        >
          🇨🇳 中文
        </Button>
      </Link>
    </div>
  );
};