'use client';

import Button from '@/components/buttons/Button';
import PreLoader from '@/components/loader/Loader';
import { resetPasswordSchema } from '@/schema/auth';
import { resetPassword } from '@/services/api';
import { ResetPassParams } from '@/types';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { toast } from 'react-toastify';
import InputGroup from '../inputs/InputGroup';

const ResetPass = () => {
  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const [serverError, setserverError] = useState<string>();
  const router = useRouter();

  const searchParams = useSearchParams();
  const otp_id = searchParams.get('token');

  const { mutate: reset, isPending } = useMutation({
    mutationFn: (data: ResetPassParams) => resetPassword(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success('You have successfully updated password');
      router.push('/auth/sign-in');
    },
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
        <div className="w-full max-md:px-4 max-w-[450px] mx-auto">
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

          <div>
            <h1 className="heading-text max-md:text-[30px] text-center">
              Reset your password
            </h1>
            <p className="pt-3 text-center text-text-tertiary">
              Set new password to restore access to your account.
            </p>
          </div>

          <div className="my-8 ">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={resetPasswordSchema}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <InputGroup
                      type="password"
                      label="New Password"
                      name="newPassword"
                      placeholder="Enter a new password"
                    />
                  </div>

                  <div className="mb-5">
                    <InputGroup
                      type="password"
                      label="Confirm Password*"
                      name="confirmPassword"
                      placeholder="Enter confirm password"
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
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ResetPass;
