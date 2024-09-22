import FloatingLabelInput2 from "@/components/registrationSteps/FloatingLabelInput2";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";

interface VariationOptionProps {
  index: number;
  option: {
    variationName: string;
    variationValues: string[];
  };
  onUpdate: (index: number, option: { variationName: string; variationValues: string[] }) => void;
  onDelete: (index: number) => void;
}

export const VariationOption: React.FC<VariationOptionProps> = ({
  index,
  option,
  onUpdate,
  onDelete,
}) => {
  const [variationName, setVariationName] = useState(option.variationName);
  const [variationValues, setVariationValues] = useState<string[]>(option.variationValues || []);
  const [inputValue, setInputValue] = useState("");

  const handleAddValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setVariationValues((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
      e.preventDefault();
    }
  };

  const handleRemoveValue = (value: string) => {
    setVariationValues(variationValues.filter((v) => v !== value));
  };

  useEffect(() => {
    onUpdate(index, { variationName, variationValues });
  }, [variationName, variationValues]);

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <div className="flex items-center justify-between">
        <h4 className="font-normal text-[10px] mb-0">Option {index + 1}</h4>
        <MdMoreHoriz className="text-[#8A226F]" />
      </div>

      {/* Variation Name Input */}
      <FloatingLabelInput2
        label={`Enter variation Name`}
        name={`variationName_${index}`}
        value={variationName}
        onChange={(e) => setVariationName(e.target.value)}
      />

      {/* Display added values */}
      <div className="mt-2 flex gap-2 flex-wrap">
        {variationValues.map((value, idx) => (
          <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center">
            {value}
            <FaTimes
              className="ml-2 text-black font-normal cursor-pointer"
              onClick={() => handleRemoveValue(value)}
            />
          </span>
        ))}

        {/* multiple variation values */}
        <div className="mt-3 w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleAddValue}
            placeholder="Enter values and press Enter"
            className="border border-none rounded px-3 py-2 w-full outline-none font-medium text-[12px]"
          />
        </div>
      </div>

      {/* Delete Option Button */}
      <button
        type="button"
        className="text-red-500 mt-4 text-sm underline"
        onClick={() => onDelete(index)}
      >
        Delete Option
      </button>
    </div>
  );
};
