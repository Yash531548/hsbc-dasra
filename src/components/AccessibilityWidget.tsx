import { useState, useEffect } from "react";
import { 
  Accessibility, ZoomIn, ZoomOut, Contrast, Monitor, 
  RefreshCcw, X, Moon, Link as LinkIcon, Eye, Play, Pause, Square, 
  Volume2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "small">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  
  // Read aloud state
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove(
      "text-large", "text-small", "high-contrast", 
      "grayscale-mode", "dark-mode", "underline-links", "focus-mode"
    );

    if (fontSize === "large") html.classList.add("text-large");
    if (fontSize === "small") html.classList.add("text-small");
    if (highContrast) html.classList.add("high-contrast");
    if (grayscale) html.classList.add("grayscale-mode");
    if (darkMode) html.classList.add("dark-mode");
    if (underlineLinks) html.classList.add("underline-links");
    if (focusMode) html.classList.add("focus-mode");
  }, [fontSize, highContrast, grayscale, darkMode, underlineLinks, focusMode]);

  const reset = () => {
    setFontSize("normal");
    setHighContrast(false);
    setGrayscale(false);
    setDarkMode(false);
    setUnderlineLinks(false);
    setFocusMode(false);
    stopReading();
  };

  // Read Aloud Logic
  const startReading = () => {
    if (!window.speechSynthesis) return;
    
    // Stop any existing speech
    window.speechSynthesis.cancel();
    
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 0.9;
    
    const estimatedDuration = (text.length / 14) * 1000; // rough estimate
    const startTime = Date.now();
    
    utterance.onstart = () => {
      setIsReading(true);
      setIsPaused(false);
      setReadingProgress(0);
    };
    
    utterance.onend = () => {
      setIsReading(false);
      setIsPaused(false);
      setReadingProgress(100);
    };
    
    window.speechSynthesis.speak(utterance);
    
    // Progress simulation
    const interval = setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / estimatedDuration) * 100, 99);
        setReadingProgress(progress);
      } else if (!window.speechSynthesis.speaking) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const pauseReading = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resumeReading = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stopReading = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      setIsPaused(false);
      setReadingProgress(0);
    }
  };

  return (
    <>
      {isReading && !focusMode && (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200">
          <div 
            className="h-full bg-primary transition-all duration-1000 ease-linear"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      {focusMode && (
        <div className="fixed top-4 right-4 z-[100]">
          <Button 
            onClick={() => setFocusMode(false)}
            className="bg-secondary text-white hover:bg-secondary/90 shadow-lg rounded-full"
          >
            Exit Focus Mode <X className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-4 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-5 animate-in slide-in-from-bottom-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-secondary flex items-center gap-2">
                <Accessibility className="w-5 h-5" />
                Accessibility
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Text Size</p>
                <div className="flex gap-2">
                  <Button 
                    variant={fontSize === "small" ? "default" : "outline"} 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setFontSize("small")}
                  >
                    <ZoomOut className="w-4 h-4 mr-1" /> A-
                  </Button>
                  <Button 
                    variant={fontSize === "normal" ? "default" : "outline"} 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setFontSize("normal")}
                  >
                    A
                  </Button>
                  <Button 
                    variant={fontSize === "large" ? "default" : "outline"} 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setFontSize("large")}
                  >
                    A+ <ZoomIn className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Display</p>
                <div className="space-y-2">
                  <Button 
                    variant={highContrast ? "default" : "outline"} 
                    className="w-full justify-start text-sm"
                    onClick={() => setHighContrast(!highContrast)}
                  >
                    <Contrast className="w-4 h-4 mr-2" /> High Contrast
                  </Button>
                  <Button 
                    variant={darkMode ? "default" : "outline"} 
                    className="w-full justify-start text-sm"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <Moon className="w-4 h-4 mr-2" /> Dark Mode
                  </Button>
                  <Button 
                    variant={grayscale ? "default" : "outline"} 
                    className="w-full justify-start text-sm"
                    onClick={() => setGrayscale(!grayscale)}
                  >
                    <Monitor className="w-4 h-4 mr-2" /> Grayscale
                  </Button>
                  <Button 
                    variant={underlineLinks ? "default" : "outline"} 
                    className="w-full justify-start text-sm"
                    onClick={() => setUnderlineLinks(!underlineLinks)}
                  >
                    <LinkIcon className="w-4 h-4 mr-2" /> Underline Links
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Reading</p>
                <div className="space-y-2">
                  <Button 
                    variant={focusMode ? "default" : "outline"} 
                    className="w-full justify-start text-sm"
                    onClick={() => setFocusMode(!focusMode)}
                  >
                    <Eye className="w-4 h-4 mr-2" /> Focus Reading Mode
                  </Button>

                  <div className="p-3 bg-muted rounded-lg border border-border">
                    <p className="text-sm font-medium mb-2 flex items-center">
                      <Volume2 className="w-4 h-4 mr-2" /> Read Aloud
                    </p>
                    
                    {!isReading ? (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="w-full bg-primary text-white hover:bg-primary/90"
                        onClick={startReading}
                      >
                        <Play className="w-4 h-4 mr-2" /> Read This Page
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        {isPaused ? (
                          <Button variant="outline" size="sm" className="flex-1" onClick={resumeReading}>
                            <Play className="w-4 h-4 mr-1" /> Resume
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" className="flex-1" onClick={pauseReading}>
                            <Pause className="w-4 h-4 mr-1" /> Pause
                          </Button>
                        )}
                        <Button variant="destructive" size="sm" className="flex-1" onClick={stopReading}>
                          <Square className="w-4 h-4 mr-1" /> Stop
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <Button variant="ghost" className="w-full text-gray-500 mt-2" onClick={reset}>
                <RefreshCcw className="w-4 h-4 mr-2" /> Reset All Settings
              </Button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="Accessibility Options"
        >
          <Accessibility className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}