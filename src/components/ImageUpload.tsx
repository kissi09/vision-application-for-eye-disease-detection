
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, Eye } from "lucide-react";
import { Loader } from "./Loader";

interface ImageUploadProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
}

export const ImageUpload = ({ onUpload, isLoading }: ImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }
    
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Pass file to parent component
    onUpload(file);
  };

  const clearImage = () => {
    setPreviewUrl(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const openFileDialog = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center" id="detection">
        <Loader />
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Analyzing your eye scan with our advanced CNN model...
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          This usually takes about 10-15 seconds
        </p>
      </div>
    );
  }

  return (
    <div id="detection">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      
      {!previewUrl ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
              : "border-gray-300 dark:border-gray-700"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-3">
              <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Drag and drop your eye scan image
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Or click to select a file from your device
              </p>
            </div>
            <Button onClick={openFileDialog} variant="secondary" className="mt-2">
              Select Image
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
          <img
            src={previewUrl}
            alt="Eye scan preview"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <Button
              size="icon"
              variant="outline"
              className="bg-white/80 hover:bg-white dark:bg-black/50 dark:hover:bg-black/70 h-8 w-8"
              onClick={clearImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Image loaded successfully. Click analyze to detect eye conditions.
            </p>
            <Button className="mt-2" onClick={() => onUpload} disabled={isLoading}>
              <Eye className="mr-2 h-4 w-4" />
              Analyze Image
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
