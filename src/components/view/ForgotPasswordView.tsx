'use client';

import Button from '@/components/buttons/Button';
import { forgotPasswordSchema } from '@/schema/auth';
import { forgotPassword } from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import InputGroup from '../inputs/InputGroup';

interface FormType {
  email: string;
}

const ForgotPasswordView = () => {
  const initialValues = {
    email: '',
  };

  const [serverError, setserverError] = useState<string>();
  const router = useRouter();

  const { mutate: forgot, isPending } = useMutation({
    mutationFn: (data: FormType) => forgotPassword(data),
    onError: (error: any) => {
      console.log('error', error.message);
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success('Sent OTP on your mail successfully.');

      router.push(`${'/auth/verify-otp'}?token=${data?.data?.data?.id}`);
    },
  });

  const onSubmit = (data: FormType) => {
    setserverError('');
    forgot(data);
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-w-[450px] max-md:px-4 mx-auto">
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
            Forgot your password?
          </h1>
          <p className="pt-3 text-center text-text-tertiary">
            We&rsquo;ve sent you an OTP (One-Time Password) to verify your
            identity and reset your password. Please check your registered email
            or mobile number for the OTP.
          </p>
        </div>

        <div className="my-8 ">
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={forgotPasswordSchema}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <InputGroup
                    type="text"
                    label="Email*"
                    name="email"
                    placeholder="Enter your email address"
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

                  <Button isLoading={isPending}>Send</Button>
                </div>
              </Form>
            )}
          </Formik>

          <Link
            href={'/auth/sign-in'}
            className="flex items-center justify-center"
          >
            <button className="mt-5 flex items-center justify-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 12H4M4 12L10 6M4 12L10 18"
                    stroke="#808284"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="text-text-tertiary">Back to Sign in</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordView;
