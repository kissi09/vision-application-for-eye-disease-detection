
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { GlobalTrends } from "@/components/GlobalTrends";
import { ImageUpload } from "@/components/ImageUpload";
import { DetectionResults } from "@/components/DetectionResults";

const Index = () => {
  const [detectionResults, setDetectionResults] = useState<null | {
    disease: string;
    probability: number;
    description: string;
  }>(null);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // This function would normally send the image to a backend API
  // that would process it using the eye_disease_model1.h5
  const analyzeImage = async (imageFile: File) => {
    setIsAnalyzing(true);
    
    // Simulating API call and model processing time
    setTimeout(() => {
      // Mock result - in a real app, this would come from the model
      const mockResults = {
        disease: ["Glaucoma", "Cataract", "Diabetic Retinopathy", "Normal"][
          Math.floor(Math.random() * 4)
        ],
        probability: parseFloat((Math.random() * 0.5 + 0.5).toFixed(2)),
        description: "This is a detailed description of the detected condition."
      };
      setDetectionResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <Layout>
      <Hero />
      <Features />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <GlobalTrends />
          </div>
          <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-500/10">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">Eye Disease Detection</h2>
            <ImageUpload onUpload={analyzeImage} isLoading={isAnalyzing} />
            {detectionResults && !isAnalyzing && (
              <DetectionResults results={detectionResults} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
