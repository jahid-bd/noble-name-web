'use client';
import { createNameSchema } from '@/schema/name';
import { Form, Formik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';
import SelectInput from '../form/SelectInput';
import InputGroup from '../inputs/InputGroup';
import TextareaInput from '../inputs/TextareaInput';

interface intialFormValueType {
  gender: string;
  origin: string;
  meanings: string;
  arabic_name: string;
  english_name: string;
}

const genderOptions = [
  {
    value: '',
    label: 'Select gender',
  },
  {
    value: 'boy',
    label: 'Boy',
  },
  {
    value: 'girl',
    label: 'Girl',
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
    value: 'persian',
    label: 'Persian',
  },
  {
    value: 'turkish',
    label: 'Turkish',
  },
  {
    value: 'central asian',
    label: 'Central Asian',
  },
  {
    value: 'urdu',
    label: 'Urdu',
  },
  {
    value: 'european',
    label: 'European',
  },
  {
    value: 'south east asian',
    label: 'South East Asian',
  },
  {
    value: 'east asian',
    label: 'East Asian',
  },
  {
    value: 'african',
    label: 'African',
  },
];

const AddNameModal = ({
  title,
  handleClose,
  initialFormValue,
  handleSubmitForm,
}: {
  title: string;
  handleClose: () => void;
  initialFormValue?: intialFormValueType;
  handleSubmitForm: (data: any) => void;
}) => {
  const initialValues = {
    gender: initialFormValue?.gender || '',
    origin: initialFormValue?.origin || '',
    meanings: initialFormValue?.meanings || '',
    arabic_name: initialFormValue?.arabic_name || '',
    english_name: initialFormValue?.english_name || '',
  };
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
    // event.preventDefault();

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
    }
  };

  useEffect(() => {
    if (initialFormValue) {
      setFormState(initialFormValue);
    }
  }, [initialFormValue]);

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-[9999999999] flex items-center justify-center">
      <div className="container mx-auto px-1.5 md:px-20">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-tertiary ">
              {title}
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

          <Formik
            initialValues={formState}
            onSubmit={handleSubmitForm}
            validationSchema={createNameSchema}
          >
            {({ handleSubmit, values, setFieldValue, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
                  <InputGroup
                    type="text"
                    label="Name"
                    name="english_name"
                    placeholder="Enter the name"
                  />

                  <SelectInput
                    label="Gender"
                    error={errors.gender}
                    options={genderOptions}
                    selectedOption={genderOptions.find(
                      (item) => item.value === formState?.gender,
                    )}
                    handleSelect={({
                      label,
                      value,
                    }: {
                      label: string;
                      value: string;
                    }) => {
                      handleSelect('gender', { label, value });
                      setFieldValue('gender', value);
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
                  <InputGroup
                    type="text"
                    name="arabic_name"
                    label="Arabic Spelling"
                    placeholder="Enter Arabic spelling of the name"
                  />

                  <SelectInput
                    label="Origin"
                    options={originOptions}
                    selectedOption={originOptions.find(
                      (item) =>
                        item.value.toLowerCase() ===
                        formState?.origin?.toLowerCase(),
                    )}
                    handleSelect={({
                      label,
                      value,
                    }: {
                      label: string;
                      value: string;
                    }) => {
                      handleSelect('origin', { label, value });
                      setFieldValue('origin', value);
                    }}
                    error={errors.origin}
                  />
                </div>

                <div className="grid grid-cols-1 gap-[14px] mb-4">
                  <TextareaInput
                    label="Meaning"
                    name="meanings"
                    value={values.meanings}
                    placeholder="What’s the meaning of the name"
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      if (e.target.value.length > 0) {
                        const meaningArray = e.target.value.split(',');

                        return setFieldValue('meanings', meaningArray);
                      }
                      setFieldValue('meanings', '');
                    }}
                  />
                </div>

                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className="py-2.5 px-20 rounded-lg bg-primary text-white text-base font-medium"
                  >
                    {title ? title : 'Submit For Approval'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddNameModal;
