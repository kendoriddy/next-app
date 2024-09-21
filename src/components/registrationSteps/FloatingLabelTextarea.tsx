import React, { useState } from "react";

interface FloatingLabelTextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({
  label,
  value,
  onChange,
}) => {
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
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#8A226F] resize-none"
        rows={4}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FloatingLabelTextarea;
