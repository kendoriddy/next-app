import React from "react";

interface InputFieldProps {
  type: "text" | "email" | "tel";
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-[0.5px] rounded-xl mb-4 w-full text-[14px] font-normal leading-4 text-[#00000099] py-3.5 px-4"
    />
  );
};

export default InputField;
