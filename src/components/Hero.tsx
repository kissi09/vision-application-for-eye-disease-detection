
import { Button } from "@/components/ui/button";
import { VisionLogo } from "./VisionLogo";

export const Hero = () => {
  const scrollToDetection = () => {
    const element = document.getElementById("detection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-700 py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center text-white">
          <div className="mb-6 transform scale-150">
            <VisionLogo />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Advanced Eye Disease Detection
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-blue-100">
            Our AI-powered platform delivers accurate detection and analysis of eye conditions
            using state-of-the-art convolutional neural networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={scrollToDetection}
            >
              Analyze Your Eye Scan
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-50 to-transparent dark:from-gray-900"></div>
    </div>
  );
};
