import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X, File } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  bucket: string;
  path?: string;
  accept?: string;
  maxSize?: number; // in MB
  onUploadComplete: (url: string) => void;
  label?: string;
  currentFile?: string;
}

export const FileUpload = ({
  bucket,
  path = "",
  accept,
  maxSize = 50,
  onUploadComplete,
  label = "Upload File",
  currentFile
}: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxSize) {
      toast({
        title: "File too large",
        description: `File size must be less than ${maxSize}MB`,
        variant: "destructive"
      });
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setProgress(0);

    try {
      // Generate unique file name
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${path}${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(fileName, selectedFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      setProgress(100);
      toast({
        title: "Success",
        description: "File uploaded successfully"
      });

      onUploadComplete(publicUrl);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload file",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-3">
      <Label>{label}</Label>
      
      {currentFile && !selectedFile && (
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <File className="h-4 w-4" />
          <span>Current: {currentFile.split('/').pop()}</span>
        </div>
      )}

      <div className="flex gap-2">
        <Input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          disabled={uploading}
          className="flex-1"
        />
        
        {selectedFile && !uploading && (
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={clearSelection}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        
        <Button
          type="button"
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
        >
          {uploading ? (
            <>Uploading...</>
          ) : (
            <>
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </>
          )}
        </Button>
      </div>

      {selectedFile && (
        <div className="text-sm text-muted-foreground">
          Selected: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
        </div>
      )}

      {uploading && (
        <Progress value={progress} className="w-full" />
      )}
    </div>
  );
};