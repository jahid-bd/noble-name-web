'use client';
import { useState } from 'react';
import * as yup from 'yup';
import InputField from '../form/InputField';
import SelectInput from '../form/SelectInput';
import TextareaField from '../form/TextareaField';

const genderOptions = [
  {
    value: '',
    label: 'Select origin',
  },
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female:',
    label: 'Female',
  },
];

const originOptions = [
  {
    value: '',
    label: 'Select origin',
  },
  {
    value: 'arabic',
    label: 'Arabic',
  },
  {
    value: 'turkois:',
    label: 'Turkois',
  },
];

const AddNameModal = ({ handleClose }: { handleClose: () => void }) => {
  const initialValues = {
    gender: genderOptions[0].value,
    origin: originOptions[0].value,
    meanings: '',
    arabic_name: '',
    english_name: '',
  };
  const [formState, setFormState] = useState({ ...initialValues });

  const schema = yup
    .object({
      english_name: yup
        .string()
        .trim()
        .nullable()
        .required('Please enter an email address')
        .min(3, 'Name must be at least 3 characters'),
      arabic_name: yup
        .string()
        .trim()
        .required('Please enter a valid name')
        .min(3, 'Name must be at least 3 characters'),
      gender: yup.string().trim().required('Please select gender'),
      origin: yup.string().trim().required('Please select origin'),
      meanings: yup.array().required('Please enter meaning'),
    })
    .required();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(formState);
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeTextarea = (e: any) => {
    console.log(formState);
    const meaningArray = e.target.value.split(',');
    setFormState((prev) => ({ ...prev, [e.target.name]: meaningArray }));
  };

  const handleSelect = (
    key: string,
    option: { value: string; label: string },
  ) => {
    setFormState({
      ...formState,
      [key]: option,
    });
  };

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
      <div className="container mx-auto px-1.5 md:px-20">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-tertiary ">
              Fill the above fields to add a name!
            </h3>

            <button type="button" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16992 14.8299L14.8299 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8299 14.8299L9.16992 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <form
          // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
              <InputField
                type="text"
                label="Name"
                name="english_name"
                onChange={handleChange}
                placeholder="First name"
                value={formState.english_name}
              />

              <SelectInput
                label="Gender"
                options={genderOptions}
                selectedOption={formState.gender}
                handleSelect={(opt) => handleSelect('gender', opt)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
              <InputField
                type="text"
                name="arabic_name"
                label="Arabic Spelling"
                onChange={handleChange}
                value={formState.arabic_name}
                placeholder="Enter Arabic spelling of the name"
              />

              <SelectInput
                label="Origin"
                options={originOptions}
                selectedOption={formState.origin}
                handleSelect={(opt) => handleSelect('origin', opt)}
              />
            </div>

            <div className="grid grid-cols-1 gap-[14px] mb-4">
              <TextareaField
                label="Meaning"
                name="meanings"
                onChange={handleChangeTextarea}
                value={formState?.meanings?.toString()}
                placeholder="Enter Arabic spelling of the name"
              />
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="button"
                className="py-2.5 px-20 rounded-lg bg-primary text-white text-base font-medium"
              >
                Submit For Approval
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNameModal;
