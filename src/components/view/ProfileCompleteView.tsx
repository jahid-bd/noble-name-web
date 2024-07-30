'use client';

import countries from '@/assets/data/countries';
import { userProfileUpdate } from '@/services/api';
import { UserUpdateData } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../buttons/Button';
import Calender from '../dateRange/Calender';
import RadioButton from '../form/RadioButton';
import SelectInput from '../form/SelectInput';

const ProfileComplete = () => {
  const childeAgeOptions = [
    {
      value: '',
      label: 'Select',
    },
    {
      value: '0-3 months',
      label: 'Newborns (0-3 months)',
    },
    {
      value: '4-12 months',
      label: 'Infants (4-12 months)',
    },
    {
      value: '1-3 years',
      label: 'Toddlers (1-3 years)',
    },
    {
      value: '3-5 years',
      label: 'Preschoolers (3-5 years)',
    },
    {
      value: '6-12 years',
      label: 'School-Age Children (6-12 years)',
    },
    {
      value: '13-18 years',
      label: 'Teenagers (13-18 years)',
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
      value: '46-54',
      label: '46-54',
    },
    {
      value: '55+',
      label: '55+',
    },
  ];

  const genderOptions = [
    {
      value: '',
      label: 'Select gender',
    },
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
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

  const countryOptions = [...countries];

  const [optionsState, setOptionsState] = useState({
    age: ageOptions[0],
    gender: genderOptions[0],
    sect: sectOptions[0],
    children: childrenOptions[0],
    country: countryOptions[0],
    childAge: [],
  });

  const [isExpectingBaby, setIsexpectionBaby] = useState<boolean | null>(null);

  const [isParent, setIsParent] = useState<boolean | null>(null);

  const [expectingDate, setExpectingDate] = useState<Date | null | string>(
    null,
  );

  const handleSelect = (
    key: string,
    option: { value: string; label: string },
  ) => {
    setOptionsState({
      ...optionsState,
      [key]: option,
    });
  };

  const handleSelectChildren = (key: string, value: any) => {
    setOptionsState({
      ...optionsState,
      [key]: value,
      childAge: [],
    });
  };

  const handleSelectChildAge = (key: string, value: any) => {
    setOptionsState({
      ...optionsState,
      [key]: value,
    });
  };

  const [serverError, setserverError] = useState<string>();
  const [errors, setErrors] = useState({
    age: {
      message: 'Please select your age',
      error: false,
    },
    gender: {
      message: 'Please select your gender',
      error: false,
    },
    country: {
      message: 'Please select your country',
      error: false,
    },
    sect: {
      message: 'Please select your sect',
      error: false,
    },
    expectingBaby: {
      message: 'Please select a option',
      error: false,
    },
    children: {
      message: 'Please select a option',
      error: false,
    },
    childExpectingDate: {
      message: 'Please select a date',
      error: false,
    },
    isParent: {
      message: 'Please select a option',
      error: false,
    },
    childAge: {
      message: 'Please select a option',
      error: false,
    },
  });
  const router = useRouter();

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: (data: UserUpdateData) => userProfileUpdate(data),
    onError: (error: any) => {
      console.log('error', error);
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
      router.push('/');
    },
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setErrors({
      age: {
        message: 'Please select your age',
        error: false,
      },
      gender: {
        message: 'Please select your gender',
        error: false,
      },
      country: {
        message: 'Please select your country',
        error: false,
      },
      sect: {
        message: 'Please select your sect',
        error: false,
      },
      expectingBaby: {
        message: 'Please select an option',
        error: false,
      },
      children: {
        message: 'Please select an option',
        error: false,
      },
      childExpectingDate: {
        message: 'Please select a date',
        error: false,
      },
      isParent: {
        message: 'Please select an option',
        error: false,
      },
      childAge: {
        message: 'Please select an option',
        error: false,
      },
    });

    if (!optionsState.age.value) {
      setErrors((prev) => ({
        ...prev,
        age: {
          ...prev.age,
          error: true,
        },
      }));
    }

    if (!optionsState.gender.value) {
      setErrors((prev) => ({
        ...prev,
        gender: {
          ...prev.gender,
          error: true,
        },
      }));
    }

    if (!optionsState.country.value) {
      setErrors((prev) => ({
        ...prev,
        country: {
          ...prev.country,
          error: true,
        },
      }));
    }

    if (!optionsState.sect.value) {
      setErrors((prev) => ({
        ...prev,
        sect: {
          ...prev.sect,
          error: true,
        },
      }));
    }

    if (isExpectingBaby === null) {
      setErrors((prev) => ({
        ...prev,
        expectingBaby: {
          ...prev.expectingBaby,
          error: true,
        },
      }));
    }

    if (isExpectingBaby === true && !expectingDate) {
      setErrors((prev) => ({
        ...prev,
        childExpectingDate: {
          ...prev.childExpectingDate,
          error: true,
        },
      }));
    }

    if (isParent === null) {
      setErrors((prev) => ({
        ...prev,
        isParent: {
          ...prev.isParent,
          error: true,
        },
      }));
    }

    if (isParent === true && optionsState.children.value === null) {
      setErrors((prev) => ({
        ...prev,
        children: {
          ...prev.children,
          error: true,
        },
      }));
    }

    const hasErrors = Object.values(errors).some((field) => field.error);

    if (hasErrors) return;

    if (
      !hasErrors &&
      optionsState.age.value &&
      optionsState.sect.value &&
      optionsState.gender.value &&
      optionsState.country.value
    ) {
      updateProfile({
        age: optionsState.age.value,
        gender: optionsState.gender.value,
        sect: optionsState.sect.value,
        childrens: optionsState.children.value,
        country: optionsState.country.value,
        isExpectingBaby: isExpectingBaby || false,
        expectedDate: expectingDate || '',
        childAgeGroup:
          optionsState.childAge?.length > 0 ? optionsState.childAge : [],
        isAlreadyParent: isParent || false,
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-full max-md:px-4 max-w-[560px] min-h-[622px] mx-auto">
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
              error={errors.age.error && errors.age.message}
            />

            <SelectInput
              label="Gender"
              options={genderOptions}
              handleSelect={(opt) => handleSelect('gender', opt)}
              selectedOption={optionsState.gender}
              error={errors.gender.error && errors.gender.message}
            />

            <SelectInput
              label="Country"
              options={countryOptions}
              selectedOption={optionsState.country}
              handleSelect={(opt) => handleSelect('country', opt)}
              error={errors.country.error && errors.country.message}
            />

            <SelectInput
              label="Sect"
              options={sectOptions}
              handleSelect={(opt) => handleSelect('sect', opt)}
              selectedOption={optionsState.sect}
              error={errors.sect.error && errors.sect.message}
            />

            <div>
              <label
                htmlFor=""
                className="font-medium text-sm text-text-secondary pb-3 block text-left"
              >
                Are you expecting a baby?
              </label>
              <div className="w-full flex items-center gap-5">
                <div className="w-full">
                  <RadioButton
                    active={isExpectingBaby}
                    text="Yes"
                    onClick={() => {
                      setIsexpectionBaby(true);
                    }}
                    error={errors.expectingBaby.error}
                  />
                </div>
                <div className="w-full">
                  <RadioButton
                    active={isExpectingBaby === false}
                    // label=""
                    text="No"
                    onClick={() => {
                      setIsexpectionBaby(false);
                    }}
                    error={errors.expectingBaby.error}
                  />
                </div>
              </div>
              {errors.expectingBaby.error ? (
                <p className="text-sm text-red-500 pt-[6px]">
                  {errors.expectingBaby.message}
                </p>
              ) : null}
            </div>

            {isExpectingBaby && (
              <>
                <Calender
                  label="Expecting Date"
                  value={expectingDate}
                  handelSelect={(value) => {
                    setExpectingDate(value);
                  }}
                  error={
                    errors.childExpectingDate.error
                      ? errors.childExpectingDate.message
                      : ''
                  }
                />
              </>
            )}

            <div>
              <label
                htmlFor=""
                className="font-medium text-sm text-text-secondary pb-3 block text-left"
              >
                Are you already a parent?
              </label>
              <div className="w-full flex items-center gap-5">
                <div className="w-full">
                  <RadioButton
                    active={isParent}
                    text="Yes"
                    onClick={() => {
                      setIsParent(true);
                    }}
                    error={errors.isParent.error}
                  />
                </div>
                <div className="w-full">
                  <RadioButton
                    active={isParent === false}
                    text="No"
                    onClick={() => {
                      setIsParent(false);
                    }}
                    error={errors.isParent.error}
                  />
                </div>
                {errors.expectingBaby.error ? (
                  <p className="text-sm text-red-500 pt-[6px]">
                    {errors.expectingBaby.error}
                  </p>
                ) : null}
              </div>
            </div>

            {isParent && (
              <>
                <SelectInput
                  label="How many children do you have?"
                  options={childrenOptions}
                  handleSelect={(opt) => handleSelectChildren('children', opt)}
                  selectedOption={optionsState.children}
                  error={
                    optionsState.childAge.length <= 0
                      ? errors.children.message
                      : ''
                  }
                />

                {optionsState?.children?.value && (
                  <div>
                    <label>Age group of children</label>
                    {[...Array(Number(optionsState?.children?.value))].map(
                      (x, i) => (
                        <SelectInput
                          key={i}
                          options={childeAgeOptions}
                          handleSelect={(opt) =>
                            handleSelectChildAge('childAge', [
                              ...optionsState?.childAge,
                              opt,
                            ])
                          }
                          selectedOption={
                            optionsState.childAge[i]
                              ? optionsState.childAge[i]
                              : childeAgeOptions[0]
                          }
                          error={
                            errors.childAge.error
                              ? errors.childAge.message
                              : false
                          }
                        />
                      ),
                    )}
                  </div>
                )}
              </>
            )}
          </div>
          <div className="mt-[60px]">
            {serverError ? (
              <div className="pb-3">
                <p className="text-sm text-center text-red-500">
                  {serverError}
                </p>
              </div>
            ) : null}
            <Button isLoading={isPending}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileComplete;
