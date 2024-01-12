import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
}

const Slider: React.FC<SliderProps> = ({ min, max, step }) => {
  const [value, setValue] = useState(min+35);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  return (
    <div className="flex items-center">
      <input
        id="default-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="w-full h-1 bg-indigo-600 rounded-lg appearance-none cursor-pointer"
      />
      <span className="ml-4 p-1 bg-gray-200 rounded-md shadow-sm text-indigo-500 font-semibold">{value}</span>
    </div>
  );
};

export default Slider;
