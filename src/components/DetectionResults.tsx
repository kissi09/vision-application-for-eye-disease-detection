
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Info } from "lucide-react";

interface DetectionResultsProps {
  results: {
    disease: string;
    probability: number;
    description: string;
  };
}

// Disease information
const diseaseInfo = {
  Glaucoma: {
    description: "Glaucoma is a group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in your eye.",
    symptoms: ["Patchy blind spots in side vision", "Tunnel vision", "Severe headache", "Eye pain", "Blurred vision"],
    nextSteps: ["Consult an ophthalmologist", "Regular eye pressure monitoring", "Prescribed eye drops"],
    severity: "high"
  },
  Cataract: {
    description: "A cataract is a clouding of the normally clear lens of your eye, leading to blurred vision.",
    symptoms: ["Cloudy vision", "Difficulty seeing at night", "Light sensitivity", "Seeing halos around lights", "Fading of colors"],
    nextSteps: ["Consult an eye specialist", "New glasses prescription", "Consider cataract surgery if severe"],
    severity: "medium"
  },
  "Diabetic Retinopathy": {
    description: "Diabetic retinopathy is caused by damage to the blood vessels in the retina due to diabetes.",
    symptoms: ["Fluctuating vision", "Impaired color vision", "Dark or empty areas in vision", "Vision loss", "Floaters"],
    nextSteps: ["Control blood sugar levels", "Regular eye exams", "Consult an ophthalmologist urgently"],
    severity: "high"
  },
  Normal: {
    description: "No significant eye disease detected. Your retinal scan appears normal.",
    symptoms: ["No significant symptoms detected"],
    nextSteps: ["Regular eye check-ups", "Maintain good eye health practices", "Protect eyes from UV exposure"],
    severity: "low"
  }
};

export const DetectionResults = ({ results }: DetectionResultsProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const diseaseData = diseaseInfo[results.disease as keyof typeof diseaseInfo] || {
    description: "Information not available for this condition.",
    symptoms: ["Consult an ophthalmologist for specific symptoms"],
    nextSteps: ["Consult an ophthalmologist for guidance"],
    severity: "unknown"
  };
  
  const severityColor = {
    high: "text-red-600 dark:text-red-400",
    medium: "text-amber-600 dark:text-amber-400",
    low: "text-green-600 dark:text-green-400",
    unknown: "text-gray-600 dark:text-gray-400"
  };
  
  const severityIcon = {
    high: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />,
    medium: <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    low: <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />,
    unknown: <Info className="h-5 w-5 text-gray-600 dark:text-gray-400" />
  };
  
  const confidenceLevel = results.probability >= 0.9 ? "Very High" : 
                          results.probability >= 0.8 ? "High" : 
                          results.probability >= 0.7 ? "Moderate" : 
                          results.probability >= 0.6 ? "Low" : "Very Low";
  
  return (
    <Card className="mt-6 overflow-hidden">
      <CardHeader className={`${
        diseaseData.severity === "high" ? "bg-red-50 dark:bg-red-900/20" :
        diseaseData.severity === "medium" ? "bg-amber-50 dark:bg-amber-900/20" :
        "bg-green-50 dark:bg-green-900/20"
      }`}>
        <div className="flex items-center space-x-2">
          {severityIcon[diseaseData.severity as keyof typeof severityIcon]}
          <CardTitle className={severityColor[diseaseData.severity as keyof typeof severityColor]}>
            {results.disease}
          </CardTitle>
        </div>
        <CardDescription>
          Detection confidence: <span className="font-semibold">{(results.probability * 100).toFixed(1)}%</span> ({confidenceLevel})
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <p className="text-gray-700 dark:text-gray-300">{diseaseData.description}</p>
        
        {showDetails && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Common Symptoms</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {diseaseData.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Recommended Next Steps</h4>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                {diseaseData.nextSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 py-3">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          *This is an AI-assisted analysis and should not replace professional medical advice
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center space-x-1"
        >
          <span>{showDetails ? "Less details" : "More details"}</span>
          {showDetails ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
