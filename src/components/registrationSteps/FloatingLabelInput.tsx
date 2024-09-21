import React, { useState } from "react";

interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false);
  };

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 transition-all duration-300 ease-in-out ${
          isFocused || value
            ? "top-0 text-xs text-[#00000099]"
            : "top-1/2 -translate-y-1/2 text-[#00000099] text-base"
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#8A226F]"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FloatingLabelInput;
