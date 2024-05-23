'use client';
import { useState } from 'react';
import InputField from '../form/InputField';

import { changePassword } from '@/services/api';
import { ChangePassReq } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import Button from '../buttons/Button';

const ChangePasswordModal = ({ handleClose }: { handleClose: () => void }) => {
  const [serverError, setserverError] = useState<string>();

  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .trim()
      .required('Please enter current password'),
    newPassword: yup
      .string()
      .trim()
      .required('Please set a new password')
      .min(8, 'At least 8 characters'),
    confirmPassword: yup
      .string()
      .trim()
      .required('Please confirm password')
      .min(8, 'At least 8 characters')
      .oneOf([yup.ref('newPassword'), ''], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const { mutate: change, isPending } = useMutation({
    mutationFn: (data: ChangePassReq) => changePassword(data),
    onError: (error: any) => {
      console.log('error', error.message);
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      handleClose();
      reset();
      toast.success(data.data.message);
    },
  });

  const onSubmit = (data: { currentPassword: string; newPassword: string }) => {
    setserverError('');
    change({
      current_password: data.currentPassword,
      new_password: data.newPassword,
    });
  };

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <InputField
                type="password"
                label="Cureent password"
                name="currentPassword"
                placeholder="Enter your cureent password"
                register={register}
                className={serverError ? 'border-red-500' : ''}
                error={errors.currentPassword?.message}
              />
              {serverError ? (
                <div className="pt-1">
                  <p className="text-sm  text-red-500">{serverError}</p>
                </div>
              ) : null}
            </div>
            <div className="mb-5">
              <InputField
                type="password"
                label="New Password"
                name="newPassword"
                placeholder="Enter a new password"
                register={register}
                // className={serverError ? 'border-red-500' : ''}
                error={errors.newPassword?.message}
              />
            </div>
            <div className="mb-5">
              <InputField
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Enter confirm password"
                register={register}
                // className={serverError ? 'border-red-500' : ''}
                error={errors.confirmPassword?.message}
              />
            </div>

            <div>
              <Button isLoading={isPending} className="max-w-[220px]">
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
