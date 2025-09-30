import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ImageIcon } from "lucide-react";

const PfpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Generate PFP Button */}
      <Button 
        onClick={() => setIsOpen(true)}
        size="lg" 
        className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full hover-lift"
      >
        <ImageIcon className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
        Generate PFP
      </Button>

      {/* Full Screen Modal with Iframe */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-full h-full w-full p-0 border-0 bg-background">
          {/* Close Button */}
          <Button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-destructive/20 hover:bg-destructive/30 text-destructive border border-destructive/50"
            variant="ghost"
            size="icon"
          >
            <X className="h-5 w-5" />
          </Button>
          
          {/* Iframe */}
          <iframe
            src="https://hat-on-my-face.vercel.app/"
            className="w-full h-full border-0"
            title="Hat on My Face"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PfpButton;