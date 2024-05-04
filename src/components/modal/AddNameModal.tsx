'use client';
import { useState } from 'react';
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

const AddNameModal = ({
  handleClose,
  handleSubmitForm,
}: {
  handleClose: () => void;
  handleSubmitForm: (data: any) => void;
}) => {
  const initialValues = {
    gender: '',
    origin: '',
    meanings: '',
    arabic_name: '',
    english_name: '',
  };
  const [serverError, setserverError] = useState<string>();
  const [formState, setFormState] = useState({ ...initialValues });
  const [errors, setErrors] = useState({
    english_name: {
      message: 'Please enter english name',
      error: false,
    },
    arabic_name: {
      message: 'Please enter arabic name',
      error: false,
    },
    gender: {
      message: 'Please select gender',
      error: false,
    },
    origin: {
      message: 'Please select origin',
      error: false,
    },
    meanings: {
      message: 'Please enter name meanings',
      error: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeTextarea = (e: any) => {
    if (e.target.value.length > 0) {
      const meaningArray = e.target.value.split(',');
      return setFormState((prev) => ({
        ...prev,
        [e.target.name]: meaningArray,
      }));
    }
    setFormState((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSelect = (
    key: string,
    option: { value: string; label: string },
  ) => {
    setFormState({
      ...formState,
      [key]: option.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setErrors({
      english_name: {
        message: 'Please enter english name',
        error: false,
      },
      arabic_name: {
        message: 'Please enter arabic name',
        error: false,
      },
      gender: {
        message: 'Please select gender',
        error: false,
      },
      origin: {
        message: 'Please select origin',
        error: false,
      },
      meanings: {
        message: 'Please enter name meanings',
        error: false,
      },
    });

    // Update error states based on form values
    if (!formState?.english_name) {
      setErrors((prev) => ({
        ...prev,
        english_name: {
          ...prev.english_name,
          error: true,
        },
      }));
    }

    if (!formState?.arabic_name) {
      setErrors((prev) => ({
        ...prev,
        arabic_name: {
          ...prev.arabic_name,
          error: true,
        },
      }));
    }

    if (!formState?.gender) {
      setErrors((prev) => ({
        ...prev,
        gender: {
          ...prev.gender,
          error: true,
        },
      }));
    }

    if (!formState?.origin) {
      setErrors((prev) => ({
        ...prev,
        origin: {
          ...prev.origin,
          error: true,
        },
      }));
    }

    if (!formState?.meanings) {
      setErrors((prev) => ({
        ...prev,
        meanings: {
          ...prev.meanings,
          error: true,
        },
      }));
    }

    // Check if any errors exist
    const hasErrors = Object.values(errors).some((field) => field.error);

    if (hasErrors) return;

    if (
      !hasErrors &&
      formState.english_name &&
      formState?.english_name &&
      formState?.gender &&
      formState?.origin &&
      formState?.meanings?.length > 0
    ) {
      handleSubmitForm(formState);
      // addSuggestedName(formState);
    }
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

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
              <InputField
                type="text"
                label="Name"
                name="english_name"
                onChange={handleChange}
                placeholder="First name"
                value={formState.english_name}
                error={
                  errors.english_name?.error && errors.english_name?.message
                }
              />

              <SelectInput
                label="Gender"
                options={genderOptions}
                error={errors.english_name?.error && errors.gender?.message}
                selectedOption={genderOptions.find(
                  (item) => item.value === formState?.gender,
                )}
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
                error={errors.arabic_name?.error && errors.arabic_name?.message}
                placeholder="Enter Arabic spelling of the name"
              />

              <SelectInput
                label="Origin"
                options={originOptions}
                selectedOption={originOptions.find(
                  (item) => item.value === formState?.origin,
                )}
                handleSelect={(opt) => handleSelect('origin', opt)}
                error={errors.origin?.error && errors.origin?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-[14px] mb-4">
              <TextareaField
                label="Meaning"
                name="meanings"
                onChange={handleChangeTextarea}
                value={formState?.meanings?.toString()}
                placeholder="Enter Arabic spelling of the name"
                error={errors.meanings?.error && errors.meanings?.message}
              />
            </div>

            {serverError && (
              <div className="pb-3">
                <p className="text-sm text-center text-red-500">
                  {serverError}
                </p>
              </div>
            )}

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
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
