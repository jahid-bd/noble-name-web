'use client';
import { useState } from 'react';

import { changePasswordSchema } from '@/schema/auth';
import { changePassword } from '@/services/api';
import { ChangePassReq } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import Button from '../buttons/Button';
import InputGroup from '../inputs/InputGroup';

interface FormType {
  current_password: string;
  new_password: string;
  confirm_password: string;
}

const initialValues = {
  current_password: '',
  new_password: '',
  confirm_password: '',
};

const ChangePasswordModal = ({ handleClose }: { handleClose: () => void }) => {
  const [serverError, setserverError] = useState<string>();

  const { mutate: change, isPending } = useMutation({
    mutationFn: (data: ChangePassReq) => changePassword(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },

    onSuccess: (data) => {
      handleClose();
      toast.success(data.data.message);
    },
  });

  const onSubmit = (data: FormType) => {
    setserverError('');

    change({
      current_password: data.current_password,
      new_password: data.new_password,
    });
  };

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-[9999999999] flex items-center justify-center">
      <div className="md:w-[800px] w-[80%] mx-auto px-1.5 md:px-20">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-tertiary ">
              Change your password
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
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={changePasswordSchema}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <InputGroup
                    type="password"
                    label="Current password"
                    name="current_password"
                    placeholder="Enter your current password"
                  />
                  {serverError ? (
                    <div className="pt-1">
                      <p className="text-sm  text-red-500">{serverError}</p>
                    </div>
                  ) : null}
                </div>

                <div className="mb-5">
                  <InputGroup
                    type="password"
                    label="New Password"
                    name="new_password"
                    placeholder="Enter a new password"
                  />
                </div>

                <div className="mb-5">
                  <InputGroup
                    type="password"
                    label="Confirm Password"
                    name="confirm_password"
                    placeholder="Enter confirm password"
                  />
                </div>

                <div>
                  <Button isLoading={isPending} className="max-w-[220px]">
                    Change Password
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
