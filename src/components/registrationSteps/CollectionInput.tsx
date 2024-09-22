import React, { useState } from "react";
import { FiX } from "react-icons/fi";

interface CollectionInputProps {
  label: string;
  value: string[];
  onChange: (collections: string[]) => void;
}

const CollectionInput: React.FC<CollectionInputProps> = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      onChange([...value, inputValue.trim()]); // Add the input value to the list
      setInputValue(""); // Clear input field
    }
  };

  const handleRemoveCollection = (index: number) => {
    const updatedCollections = value.filter((_, i) => i !== index);
    onChange(updatedCollections);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 transition-all duration-200 ease-in-out text-sm font-medium ${
          isFocused || value.length > 0
            ? "text-[#8A226F] top-[20px] text-xs"
            : "text-[#00000099] top-1/2 -translate-y-1/2 text-[14px]"
        }`}
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-2 border border-[#00000033] rounded-[12px] p-2.5 pt-5 mt-4">
        {value.map((collection, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-1.5 bg-[#f0f0f0] text-[14px] font-normal text-[#00000099] rounded-full"
          >
            <span>{collection}</span>
            <button
              type="button"
              className="ml-2 text-[#8A226F] focus:outline-none"
              onClick={() => handleRemoveCollection(index)}
            >
              <FiX />
            </button>
          </div>
        ))}
        <input
          type="text"
          className="flex-grow outline-none border-none text-[14px] font-normal text-[#00000099] h-10 p-2"
          placeholder={isFocused ? "Search or create collection" : ""}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default CollectionInput;
