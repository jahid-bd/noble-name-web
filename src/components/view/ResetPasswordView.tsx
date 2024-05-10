'use client';

import Button from '@/components/buttons/Button';
import InputField from '@/components/form/InputField';
import PreLoader from '@/components/loader/Loader';
import { resetPassword } from '@/services/api';
import { ResetPassParams } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

interface FormType {
  email: string;
}

const ResetPass = () => {
  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const [formState, setFormState] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const [serverError, setserverError] = useState<string>();
  const router = useRouter();

  const searchParams = useSearchParams();
  const otp_id = searchParams.get('token');

  const { mutate: reset, isPending } = useMutation({
    mutationFn: (data: ResetPassParams) => resetPassword(data),
    onError: (error: any) => {
      console.log('error', error.message);
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      setFormState(initialValues);
      toast.success('You have successfully updated password');
      router.push('/auth/sign-in');
    },
  });

  const schema = yup.object().shape({
    newPassword: yup
      .string()
      .trim()
      .min(8, 'At least 8 characters')
      .required('Please set a new password'),
    confirmPassword: yup
      .string()
      .trim()
      .min(8, 'At least 8 characters')
      .oneOf([yup.ref('newPassword'), undefined], 'Passwords must match')
      .required('Please confirm password'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    setserverError('');

    reset({
      otp_id,
      password: data.confirmPassword,
    });
  };

  return (
    <Suspense fallback={<PreLoader />}>
      <div className="flex items-center justify-center h-screen overflow-auto">
        <div className="w-full max-w-[450px] mx-auto">
          {/* logo */}
          <div className="mb-6">
            <Link
              href="/"
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
            >
              <Image
                className="h-16 w-44 relative object-cover mx-auto"
                alt="Noble Names Logo"
                src="/images/logo.png"
                width={176}
                height={64}
              />
            </Link>
          </div>

          {/* Title */}
          <div>
            <h1 className="heading-text text-center">Reset your password</h1>
            <p className="pt-3 text-center text-text-tertiary">
              Set new password to restore access to your account.
            </p>
          </div>

          {/* Signup Form */}
          <div className="my-8 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <InputField
                  type="password"
                  label="New Password"
                  name="newPassword"
                  placeholder="Enter a new password"
                  onChange={handleChange}
                  value={formState.newPassword}
                  register={register}
                  className={serverError ? 'border-red-500' : ''}
                  error={errors.newPassword?.message}
                />
              </div>
              <div className="mb-5">
                <InputField
                  type="password"
                  label="Confirm Password*"
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                  onChange={handleChange}
                  value={formState.newPassword}
                  register={register}
                  className={serverError ? 'border-red-500' : ''}
                  error={errors.confirmPassword?.message}
                />
              </div>

              <div>
                {serverError ? (
                  <div className="pb-3">
                    <p className="text-sm text-center text-red-500">
                      {serverError}
                    </p>
                  </div>
                ) : null}
                <Button isLoading={isPending}>Reset Password</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ResetPass;
