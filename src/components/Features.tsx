
import { Eye, Database, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Precise Detection",
    description: "Our CNN model achieves over 95% accuracy in identifying common eye diseases from retinal images."
  },
  {
    icon: Database,
    title: "Advanced AI Model",
    description: "Trained on millions of eye scans, our model can detect glaucoma, cataracts, and diabetic retinopathy."
  },
  {
    icon: TrendingUp,
    title: "Global Analysis",
    description: "Track eye disease trends across different regions and demographics with our interactive tools."
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Your eye scan data is processed with the highest security standards and never stored without consent."
  }
];

export const Features = () => {
  return (
    <div id="features" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Cutting-Edge Eye Disease Detection
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our platform uses state-of-the-art convolutional neural networks to provide accurate 
          and rapid detection of eye conditions from standard retinal images.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-100 dark:border-blue-900 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
