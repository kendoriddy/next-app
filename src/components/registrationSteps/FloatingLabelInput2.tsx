import React, { useState } from "react";

interface FloatingLabelInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const FloatingLabelInput2: React.FC<FloatingLabelInputProps> = ({
  label,
  value,
  onChange,
  name,
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
            ? "top-0.5 text-[10px] font-normal text-[#00000099]"
            : "top-1/2 -translate-y-1/2 text-[#00000099] text-[14px] font-normal"
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        className="w-full px-3 py-3.5 border-b-[0.5px] border-[#00000033] rounded-[0] focus:outline-none focus:border-[#8A226F] text-[14px] font-semibold text-[#00000099]"
        value={value}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FloatingLabelInput2;
