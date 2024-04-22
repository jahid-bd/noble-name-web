'use client';

import { useState } from 'react';
import RadioButton from './RadioButton';
import SelectInput from './SelectInput';

const BasicInfoView = () => {
  const options = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option: { value: string; label: string }) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-w-[560px] h-[622px] mx-auto">
        <div className="mb-[43px]">
          <h1 className="heading-text text-center">
            Basic Personal Information
          </h1>
          <p className="pt-4 text-center text-text-tertiary">
            Provide us with basic personal information for better experience
          </p>
        </div>

        <div className="max-w-[500px] mx-auto">
          <form>
            <SelectInput
              label="Gender"
              options={options}
              handleSelect={handleSelect}
              selectedOption={selectedOption}
            />
            <div className="mt-4"></div>
            <RadioButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoView;
