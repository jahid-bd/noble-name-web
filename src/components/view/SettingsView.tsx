'use client';

import countries from '@/assets/data/countries';
import { getUserProfile, userProfileUpdate } from '@/services/api';
import { UserUpdateData } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../buttons/Button';
import InputField from '../form/InputField';
import RadioButton from '../form/RadioButton';
import SelectInput from '../form/SelectInput';
import PreLoader from '../loader/Loader';
import ChangePasswordModal from '../modal/ChangePasswordModal';
import UserDashboardNav from '../navs/UserDashboardNav';

function formatDate(dateString: string) {
  // Split the date string into day, month, and year components
  var parts = dateString.split('/');
  var day = parts[0];
  var month = parts[1];
  var year = parts[2];

  // Construct the new date string in the desired format (YYYY-MM-DD)
  var formattedDate =
    year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');

  return formattedDate;
}

const SettingsView = () => {
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

  // const countryOptions = [
  //   {
  //     value: '',
  //     label: 'Select country',
  //   },

  //   {
  //     value: 'united-states',
  //     label: 'United States',
  //   },
  //   {
  //     value: 'united-kingdoms',
  //     label: 'United Kingdoms',
  //   },
  //   {
  //     value: 'pakistan',
  //     label: 'Pakistan',
  //   },
  //   {
  //     value: 'united-arab-emirates',
  //     label: 'United Arab Emirates',
  //   },
  // ];

  const {
    data: user,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserProfile,
  });

  const [optionsState, setOptionsState] = useState<any>({
    age: ageOptions[0],
    gender: genderOptions[0],
    sect: sectOptions[0],
    children: childrenOptions[0],
    country: countryOptions[0],
    childAge: [],
  });

  const [isExpectingBaby, setIsexpectionBaby] = useState<boolean | null>(null);

  const [isParent, setIsParent] = useState<boolean | null>(null);

  const [expectingDate, setExpectingDate] = useState<Date | null | string>('');

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
    firstName: {
      message: 'Please enter your first name',
      error: false,
    },
    lastName: {
      message: 'Please enter your last name',
      error: false,
    },
  });

  const queryClient = useQueryClient();

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: (data: UserUpdateData) => userProfileUpdate(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast.success('User profile update successfully');
    },
  });

  const fName = user?.name?.split(' ')[0];
  const lName = user?.name?.split(' ').slice(1, user.name.length);

  const [formState, setFormState] = useState({
    firstName: fName,
    lastName: lName,
    email: 'jahidhossainbd24@gmail.com',
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
      firstName: {
        message: 'Please enter your first name',
        error: false,
      },
      lastName: {
        message: 'Please enter your last name',
        error: false,
      },
    });

    if (!formState.firstName) {
      setErrors((prev) => ({
        ...prev,
        firstName: {
          ...prev.firstName,
          error: true,
        },
      }));
    }

    if (!formState.lastName) {
      setErrors((prev) => ({
        ...prev,
        lastName: {
          ...prev.lastName,
          error: true,
        },
      }));
    }

    // Update error states based on form values
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

    // if (isParent === true && optionsState?.childAge?.length > 0) {
    //   setErrors((prev) => ({
    //     ...prev,
    //     childAge: {
    //       ...prev.childAge,
    //       error: true,
    //     },
    //   }));
    // }

    // Add similar checks for other fields

    // Check if any errors exist
    const hasErrors = Object.values(errors).some((field) => field.error);

    if (hasErrors) return;

    // If errors exist, return without submitting the form
    if (
      !hasErrors &&
      optionsState.age.value &&
      formState.firstName &&
      formState.lastName &&
      optionsState.gender.value &&
      optionsState.sect.value
    ) {
      updateProfile({
        age: optionsState.age.value,
        name: formState.firstName + ' ' + formState.lastName,
        gender: optionsState.gender.value,
        sect: optionsState.sect.value,
        childrens: optionsState.children.value,
        country: optionsState.country.value,
        isExpectingBaby: isExpectingBaby || false,
        expectedDate: expectingDate || '',
        childAgeGroup: optionsState.childAge,
        isAlreadyParent: isParent || false,
      });
    }
  };

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      setOptionsState({
        age: user?.age
          ? ageOptions.find((item) => item.value === user?.age)
          : ageOptions[0],
        gender: user?.gender
          ? genderOptions.find((item) => item.value === user.gender)
          : genderOptions[0],
        sect: user?.sect
          ? sectOptions.find((item) => item.value === user.sect)
          : sectOptions[0],
        children: user?.childrens
          ? childrenOptions.find((item) => item.value === user.childrens)
          : childrenOptions[0],
        country: user.country
          ? countryOptions.find((item) => item.value === user.country)
          : countryOptions[0],
        // childAge: [
        //   user.childAgeGroup
        //     ? childeAgeOptions.find((item) => item.value === user.childAgeGroup)
        //     : childeAgeOptions[0],
        // ],
        childAge: user.childAgeGroup?.length > 0 ? user?.childAgeGroup : [],
      });

      const fName = user?.name?.split(' ')[0];
      const lName = user?.name?.split(' ')?.slice(1)?.join(' ');

      setFormState((prev) => ({
        ...prev,
        firstName: fName,
        lastName: lName,
        email: user.email,
      }));

      setIsexpectionBaby(user.isExpectingBaby);
      setIsParent(user.isAlreadyParent);

      const formattedDate = user?.expectedDate
        ? moment(user?.expectedDate).format('YYYY-MM-DD')
        : null;
      setExpectingDate(formattedDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const [changePassModal, setChangePasswordModal] = useState(false);

  const handleToggleMod = () => {
    setChangePasswordModal(!changePassModal);
  };

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px] ">
      <div className="container mx-auto px-[6px]">
        <UserDashboardNav />

        {isLoading && !isError && (
          <div className="h-72">
            <PreLoader />
          </div>
        )}

        <div className="mb-8">
          <Button
            onClick={handleToggleMod}
            isLoading={isPending}
            className="md:text-sm text-xs md:max-w-[200px] max-w-[170px]"
          >
            Change Password
          </Button>
        </div>

        {user && !isLoading && !isError && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8 border border-border-primary rounded-xl shadow-xs p-6">
              <div className="w-full max-md:flex-col flex items-center justify-between gap-6 ">
                <div className="w-full">
                  <InputField
                    type="text"
                    isCustom={true}
                    label="First Name"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    value={formState.firstName}
                    error={
                      errors.firstName.error ? errors.firstName.message : false
                    }
                  />
                </div>
                <div className="w-full">
                  <InputField
                    type="text"
                    label="Last Name"
                    name="lastName"
                    isCustom={true}
                    placeholder="Last name"
                    onChange={handleChange}
                    value={formState.lastName}
                    error={
                      errors.lastName.error ? errors.lastName.message : false
                    }
                  />
                </div>
              </div>

              <div className="w-full max-md:flex-col flex items-center justify-between gap-6 ">
                <div className="w-full">
                  <SelectInput
                    label="Gender"
                    options={genderOptions}
                    handleSelect={(opt) => handleSelect('gender', opt)}
                    selectedOption={optionsState.gender}
                    error={errors.gender.error && errors.gender.message}
                  />
                </div>
                <div className="w-full">
                  <SelectInput
                    label="Age"
                    options={ageOptions}
                    handleSelect={(opt) => handleSelect('age', opt)}
                    selectedOption={optionsState.age}
                    error={errors.age.error && errors.age.message}
                  />
                </div>
              </div>

              <div className="w-full max-md:flex-col flex items-center justify-between gap-6">
                <div className="w-full">
                  <InputField
                    type="email"
                    label="Email"
                    name="email"
                    placeholder={formState.email}
                    onChange={handleChange}
                    value={formState.email}
                    disabled={true}
                    isCustom={true}
                  />
                </div>
                <div className="w-full">
                  <SelectInput
                    label="Country"
                    options={countryOptions}
                    handleSelect={(opt) => handleSelect('country', opt)}
                    selectedOption={optionsState.country}
                    error={errors.country.error && errors.country.message}
                  />
                </div>
              </div>

              <div className="w-full max-md:flex-col flex items-center justify-between gap-6">
                <div className="w-full">
                  <SelectInput
                    label="Sect"
                    options={sectOptions}
                    handleSelect={(opt) => handleSelect('sect', opt)}
                    selectedOption={optionsState.sect}
                    error={errors.sect.error && errors.sect.message}
                  />
                </div>

                <div className="w-full">
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
                    <div className="w-full ">
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
              </div>

              {isParent && (
                <div>
                  <div className="w-full flex max-md:flex-col gap-5">
                    <div className="w-full">
                      <SelectInput
                        label="How many children do you have?"
                        options={childrenOptions}
                        handleSelect={(opt) => {
                          handleSelectChildren('children', opt);
                        }}
                        selectedOption={optionsState.children}
                        error={
                          errors.children.error
                            ? errors.children.message
                            : false
                        }
                      />
                    </div>

                    {optionsState?.children?.value && (
                      <div className="w-full">
                        <label>Age group of children</label>
                        {[...Array(Number(optionsState?.children?.value))].map(
                          (x, i) => (
                            <SelectInput
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
                  </div>
                </div>
              )}

              <div className="w-full flex max-md:flex-col  items-center gap-5">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="font-medium text-sm text-text-secondary block text-left mb-2"
                  >
                    Are you expecting a baby?
                  </label>
                  <div className="w-full flex items-center gap-5">
                    <div className="w-full">
                      <RadioButton
                        active={isExpectingBaby}
                        // label="Are you expecting a baby"
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
                </div>

                {isExpectingBaby && (
                  <div className="w-full">
                    <InputField
                      label="Expecting Date"
                      name="date"
                      value={expectingDate}
                      onChange={(e) => {
                        setExpectingDate(e.target.value);
                      }}
                      type="date"
                      error={
                        errors.childExpectingDate.error &&
                        errors.childExpectingDate.message
                      }
                      isCustom={true}
                    />
                  </div>
                )}
              </div>
              {errors.expectingBaby.error ? (
                <p className="text-sm text-red-500 pt-[6px]">
                  {errors.expectingBaby.message}
                </p>
              ) : null}

              {serverError ? (
                <div className="pb-3">
                  <p className="text-sm text-center text-red-500">
                    {serverError}
                  </p>
                </div>
              ) : null}

              <div className="flex  item-center justify-end">
                <div className="w-full mt-[60px] flex items-center justify-end gap-3">
                  <Link href="/">
                    <Button className="max-w-[90px] bg-white border border-border-primary !text-sm !text-text-secondary hover:!text-white text-center">
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    isLoading={isPending}
                    type="submit"
                    className="text-sm max-w-[160px]"
                  >
                    Save changes
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}

        {changePassModal ? (
          <ChangePasswordModal handleClose={handleToggleMod} />
        ) : null}
      </div>
    </main>
  );
};

export default SettingsView;
