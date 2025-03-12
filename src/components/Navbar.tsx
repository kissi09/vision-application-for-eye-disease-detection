
import { Button } from "@/components/ui/button";
import { Eye, Info, BarChart2, Upload } from "lucide-react";
import { VisionLogo } from "./VisionLogo";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/50 dark:bg-gray-950/50 border-b border-blue-100 dark:border-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <VisionLogo />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Vision
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="link" onClick={() => scrollToSection("features")}>
              <Info className="mr-2 h-4 w-4" />
              About
            </Button>
            <Button variant="link" onClick={() => scrollToSection("trends")}>
              <BarChart2 className="mr-2 h-4 w-4" />
              Trends
            </Button>
            <Button variant="link" onClick={() => scrollToSection("detection")}>
              <Eye className="mr-2 h-4 w-4" />
              Detection
            </Button>
          </nav>
          
          <div>
            <Button onClick={() => scrollToSection("detection")}>
              <Upload className="mr-2 h-4 w-4" />
              Analyze Eye Image
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
