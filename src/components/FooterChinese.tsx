const FooterChinese = () => {
  return (
    <footer className="bg-background py-6 sm:py-8 px-4 border-t border-border slide-in-up relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-2 left-10 w-3 h-3 bg-primary/20 rounded-full float"></div>
      <div className="absolute bottom-2 right-10 w-4 h-4 bg-accent/20 rotate-45 rotate-slow"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <p className="text-xs sm:text-sm text-muted-foreground hover-glow transition-all duration-300 fade-in-up">
          © 2025 OWIF. 版权所有。
        </p>
        {/* Decorative dots */}
        <div className="flex justify-center space-x-3 mt-3 sm:mt-4">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/40 rounded-full float pulse-glow"></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent/40 rounded-full float" style={{animationDelay: '1s'}}></div>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/40 rounded-full float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterChinese;