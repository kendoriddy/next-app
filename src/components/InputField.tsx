interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  name,
  handleChange,
  required = false,
}) => {
  return (
    <input
      className="border-[0.5px] rounded-xl mb-4 w-full text-[14px] font-normal leading-4 text-[#00000099] py-3.5 px-4 outline-none focus:border-[#8A226F] transition"
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      required={required}
    />
  );
};

export default InputField;
