
import { Eye, Github, Twitter, Linkedin } from "lucide-react";
import { VisionLogo } from "./VisionLogo";

export const Footer = () => {
  return (
    <footer className="bg-blue-600 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <VisionLogo />
              <span className="text-2xl font-bold">Vision</span>
            </div>
            <p className="text-blue-100 max-w-md">
              Advanced eye disease detection powered by convolutional neural networks. 
              Our platform helps detect and diagnose eye conditions early for better 
              treatment outcomes.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition">Home</a></li>
              <li><a href="#features" className="text-blue-100 hover:text-white transition">Features</a></li>
              <li><a href="#trends" className="text-blue-100 hover:text-white transition">Global Trends</a></li>
              <li><a href="#detection" className="text-blue-100 hover:text-white transition">Disease Detection</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-100 hover:text-white transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <p className="text-blue-100">
              Contact us: <a href="mailto:info@vision-ai.com" className="underline hover:text-white">info@vision-ai.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} Vision. All rights reserved.
          </p>
          <p className="text-blue-100 text-sm mt-2 md:mt-0">
            <a href="#" className="underline hover:text-white">Privacy Policy</a> | 
            <a href="#" className="underline hover:text-white ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
