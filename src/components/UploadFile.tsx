import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

interface UploadFileProps {
  value: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ value, onChange }) => {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(value);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onChange(event);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <label
        htmlFor="file-upload"
        className={`flex items-center justify-center w-full h-[200px] border-[0.5px] border-[#E0E0E0] rounded-lg cursor-pointer ${
          selectedImage ? "bg-transparent" : "bg-[#FFF]"
        }`}
      >
        {selectedImage ? (
          <img
            src={selectedImage as string}
            alt="Uploaded"
            className="object-cover w-[100px] h-[100px] rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#E0E0E0] border-2 border-[#E0E0E0]">
              <Image src="/add_a_photo.png" alt="Camera" width={40} height={40} />
            </div>
            <p className="mt-2 text-sm text-center text-[#00000099]">Click to upload an image</p>
          </div>
        )}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default UploadFile;
