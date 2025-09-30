import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md px-2 sm:px-4 py-3 slide-in-up">
      <nav className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8 overflow-x-auto">
        <a 
          href="https://t.me/+SHuOuusWh1o3ZmM0" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-primary-foreground hover-lift whitespace-nowrap px-2 py-1 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
        >
          TELEGRAM
        </a>
        <a 
          href="https://x.com/OriginalWifHat" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-primary-foreground hover-lift whitespace-nowrap px-2 py-1 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
        >
          TWITTER
        </a>
        <a 
          href="https://wif-hat-chronicles.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-primary-foreground hover-lift whitespace-nowrap px-2 py-1 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
        >
          ROADMAP
        </a>
        <a 
          href="https://dexscreener.com/solana/g5qfsajvmvkp7um3nmsmagzpfwvmdgqyr3dfz9bqplte" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-primary-foreground hover-lift whitespace-nowrap px-2 py-1 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
        >
          DEXSCREENER
        </a>
      </nav>
    </header>
  );
};

export default Header;