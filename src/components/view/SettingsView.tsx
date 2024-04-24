'use client';

import { useState } from 'react';
import Button from '../buttons/Button';
import InputField from '../form/InputField';
import RadioButton from '../form/RadioButton';
import SelectInput from '../form/SelectInput';
import UserDashboardNav from '../navs/UserDashboardNav';

const SettingsView = () => {
  const childeAgeOptions = [
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
    ageGroup: childeAgeOptions[0],
    childAge: childeAgeOptions[0],
  });

  const [isExpectingBaby, setIsexpectionBaby] = useState<boolean | null>(null);

  const [isParent, setIsParent] = useState<boolean | null>(null);

  const handleSelect = (
    key: string,
    option: { value: string; label: string }
  ) => {
    setOptionsState({
      ...optionsState,
      [key]: option,
    });
  };

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        <UserDashboardNav />

        <div className="flex flex-col gap-8 border border-border-primary rounded-xl shadow-xs p-6">
          <div className="w-full flex items-center justify-between gap-6 ">
            <div className="w-full">
              <InputField
                type="text"
                label="First Name"
                name="name"
                placeholder="First name"
                onChange={handleChange}
                value={formState.firstName}
              />
            </div>
            <div className="w-full">
              <InputField
                type="text"
                label="Last Name"
                name="name"
                placeholder="Last name"
                onChange={handleChange}
                value={formState.lastName}
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-between gap-6 ">
            <div className="w-full">
              <SelectInput
                label="Gender"
                options={genderOptions}
                handleSelect={(opt) => handleSelect('gender', opt)}
                selectedOption={optionsState.gender}
              />
            </div>
            <div className="w-full">
              <SelectInput
                label="Age"
                options={ageOptions}
                handleSelect={(opt) => handleSelect('age', opt)}
                selectedOption={optionsState.age}
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-between gap-6">
            <div className="w-full">
              <InputField
                type="email"
                label="Email"
                name="email"
                placeholder="you@company.com"
                onChange={handleChange}
                value={formState.email}
              />
            </div>
            <div className="w-full">
              <SelectInput
                label="Country"
                options={countryOptions}
                handleSelect={(opt) => handleSelect('country', opt)}
                selectedOption={optionsState.country}
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-between gap-6">
            <div className="w-full">
              <SelectInput
                label="Sect"
                options={sectOptions}
                handleSelect={(opt) => handleSelect('sect', opt)}
                selectedOption={optionsState.sect}
              />
            </div>

            <div className="w-full flex items-center gap-5">
              <div className="w-full">
                <RadioButton
                  active={isParent}
                  label="Are you a parent?"
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
          </div>

          <div className="w-full flex items-center gap-5">
            <div className="w-full">
              <SelectInput
                label="How many children you have?"
                options={childrenOptions}
                handleSelect={(opt) => handleSelect('children', opt)}
                selectedOption={optionsState.children}
              />
            </div>

            <div className="w-full">
              <SelectInput
                label="Age group of children"
                options={childeAgeOptions}
                handleSelect={(opt) => handleSelect('childAge', opt)}
                selectedOption={optionsState.childAge}
              />
            </div>
          </div>

          <div className="w-full flex items-center gap-5">
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
            <div className="w-full">
              <InputField
                label="Expecting Date"
                name="date"
                value=""
                onChange={() => {}}
                type="date"
                min={'2024-01'}
              />
            </div>
          </div>

          <div className="flex item-center justify-end">
            <div className="w-full mt-[60px] flex items-center justify-end gap-3">
              <Button className="!w-[80px] bg-white border border-border-primary !text-sm !text-text-secondary hover:!text-white">
                Cancel
              </Button>
              <Button className="text-sm !w-[135px]">Save changes</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SettingsView;
