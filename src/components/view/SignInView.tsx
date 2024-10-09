'use client';

import { signInSchema } from '@/schema/auth';
import { userLogin } from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../buttons/Button';
import GoogleSignupBtn from '../buttons/GoogleSignupBtn';
import InputGroup from '../inputs/InputGroup';

interface SignInData {
  email: string;
  password: string;
}

const SignInView = () => {
  const initialValues = {
    email: '',
    password: '',
    isRemember: false,
  };

  const [serverError, setserverError] = useState<string>();
  const router = useRouter();

  const { mutate: signin, isPending } = useMutation({
    mutationFn: (data: SignInData) => userLogin(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },
    onSuccess: (data: any) => {
      toast.success('2FA OTP code send on your email');

      if (data && data?.data?.data?.id)
        return router.push(`/auth/otp-verify-2fa?key=${data?.data?.data?.id}`);
    },
  });

  const onSubmit = (data: SignInData) => {
    setserverError('');
    signin(data);
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-w-[370px] max-md:px-4 h-[622px] mx-auto">
        <div className="mb-8">
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
            Log in to your account
          </h1>
          <p className="pt-4 text-center text-text-tertiary">
            Welcome back! Please enter your details.
          </p>
        </div>

        <div className="my-8 ">
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={signInSchema}
          >
            {({ handleSubmit, setFieldValue, values }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <InputGroup
                    type="text"
                    label="Email*"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-5">
                  <InputGroup
                    type="password"
                    label="Password*"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex md:items-center max-md:flex-col max-md:gap-2 justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 border border-border-primary"
                      checked={values.isRemember}
                      onChange={() =>
                        setFieldValue('isRemember', !values.isRemember)
                      }
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-text-secondary font-medium"
                    >
                      Remember for 30 days
                    </label>
                  </div>

                  <Link
                    href={'/auth/forgot-password'}
                    className="text-primary font-semibold hover:text-green-hover max-md:text-right"
                  >
                    Forgot password
                  </Link>
                </div>

                <div>
                  {serverError ? (
                    <div className="pb-3">
                      <p className="text-sm text-center text-red-500">
                        {serverError}
                      </p>
                    </div>
                  ) : null}

                  <Button isLoading={isPending}>Sign in</Button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="mt-4">
            <GoogleSignupBtn text="Sign in with Google" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 mb-5">
          <p className="text-text-tertiary">Don’t have an account?</p>
          <Link href="/auth/sign-up">
            <span className="text-primary font-semibold hover:text-green-hover">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
