'use client';

import { userProfileUpdate } from '@/services/api';
import { UserUpdateData } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../buttons/Button';
import InputField from '../form/InputField';
import RadioButton from '../form/RadioButton';
import SelectInput from '../form/SelectInput';

const ProfileComplete = () => {
  const childeAgeOptions = [
    {
      value: '',
      label: 'Select',
    },
    {
      value: '1-6',
      label: '1-6 Years',
    },
    {
      value: '7-12 Years',
      label: '7-12',
    },

    {
      value: '13+',
      label: '13+',
    },
  ];

  const ageOptions = [
    {
      value: '',
      label: 'Age',
    },
    {
      value: '18-24',
      label: '18-24',
    },
    {
      value: '25-34',
      label: '25-34',
    },

    {
      value: '35-45',
      label: '35-45',
    },
    {
      value: '45+',
      label: '45+',
    },
  ];

  const genderOptions = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female:',
      label: 'Female',
    },
  ];

  const sectOptions = [
    {
      value: '',
      label: 'Select One',
    },
    {
      value: 'sunni',
      label: 'Sunni',
    },
    {
      value: 'shia',
      label: 'Shia',
    },
  ];

  const childrenOptions = [
    {
      value: '',
      label: 'Select',
    },
    {
      value: '1',
      label: 'One',
    },
    {
      value: '2',
      label: 'Two',
    },
    {
      value: '3',
      label: 'Three',
    },
    {
      value: '4',
      label: 'Four',
    },
    {
      value: '5',
      label: 'Five',
    },
  ];

  const countryOptions = [
    {
      value: '',
      label: 'Select country',
    },

    {
      value: 'united-states',
      label: 'United States',
    },
    {
      value: 'united-kingdoms',
      label: 'United Kingdoms',
    },
    {
      value: 'pakistan',
      label: 'Pakistan',
    },
    {
      value: 'united-arab-emirates',
      label: 'United Arab Emirates',
    },
  ];

  const [optionsState, setOptionsState] = useState({
    age: ageOptions[0],
    gender: genderOptions[0],
    sect: sectOptions[0],
    children: childrenOptions[0],
    country: countryOptions[0],
    childAge: childeAgeOptions[0],
  });

  const [isExpectingBaby, setIsexpectionBaby] = useState<boolean | null>(null);

  const [isParent, setIsParent] = useState<boolean | null>(null);

  const [expectingDate, setExpectingDate] = useState<Date | null>(null);

  const handleSelect = (
    key: string,
    option: { value: string; label: string }
  ) => {
    setOptionsState({
      ...optionsState,
      [key]: option,
    });
  };

  // Api call to update to the server
  const [serverError, setserverError] = useState<string>();
  const router = useRouter();

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: (data: UserUpdateData) => userProfileUpdate(data),
    onError: (error: any) => {
      console.log('error', error);
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    updateProfile({
      age: optionsState.age.value,
      gender: optionsState.gender.value,
      sect: optionsState.sect.value,
      childrens: optionsState.children.value,
      country: optionsState.country.value,
      isExpectingBaby: isExpectingBaby || false,
      expectedDate: expectingDate,
      childAgeGroup: optionsState.childAge.value,
      isAlreadyParent: isParent || false,
    });
  };

  const authToken = document.cookie;

  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-full max-w-[560px] min-h-[622px] mx-auto">
        <div className="mb-[43px]">
          <h1 className="heading-text text-center">
            Basic Personal Information
          </h1>
          <p className="pt-4 text-center text-text-tertiary">
            Provide us with basic personal information for better experience
          </p>
        </div>

        <form className="max-w-[500px] mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-8">
            <SelectInput
              label="Age"
              options={ageOptions}
              handleSelect={(opt) => handleSelect('age', opt)}
              selectedOption={optionsState.age}
            />

            <SelectInput
              label="Gender"
              options={genderOptions}
              handleSelect={(opt) => handleSelect('gender', opt)}
              selectedOption={optionsState.gender}
            />

            <SelectInput
              label="Country"
              options={countryOptions}
              handleSelect={(opt) => handleSelect('country', opt)}
              selectedOption={optionsState.country}
            />

            <SelectInput
              label="Sect"
              options={sectOptions}
              handleSelect={(opt) => handleSelect('sect', opt)}
              selectedOption={optionsState.sect}
            />

            <div className="w-full flex items-center gap-5">
              <div className="w-full">
                <RadioButton
                  active={isExpectingBaby}
                  label="Are you expecting a baby"
                  text="Yes"
                  onClick={() => {
                    setIsexpectionBaby(true);
                  }}
                />
              </div>
              <div className="w-full pt-5">
                <RadioButton
                  active={isExpectingBaby === false}
                  label=""
                  text="No"
                  onClick={() => {
                    setIsexpectionBaby(false);
                  }}
                />
              </div>
            </div>

            {isExpectingBaby && (
              <InputField
                label="Expecting Date"
                name="date"
                value=""
                onChange={() => {}}
                type="date"
              />
            )}
            <div className="w-full flex items-center gap-5">
              <div className="w-full">
                <RadioButton
                  active={isParent}
                  label="Are you already a parent"
                  text="Yes"
                  onClick={() => {
                    setIsParent(true);
                  }}
                />
              </div>
              <div className="w-full pt-5">
                <RadioButton
                  active={isParent === false}
                  label=""
                  text="No"
                  onClick={() => {
                    setIsParent(false);
                  }}
                />
              </div>
            </div>

            {isParent && (
              <>
                <SelectInput
                  label="How many children you have?"
                  options={childrenOptions}
                  handleSelect={(opt) => handleSelect('children', opt)}
                  selectedOption={optionsState.children}
                />
                <SelectInput
                  label="Age group of children"
                  options={childeAgeOptions}
                  handleSelect={(opt) => handleSelect('childAge', opt)}
                  selectedOption={optionsState.childAge}
                />
              </>
            )}
          </div>
          <div className="mt-[60px]">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileComplete;
