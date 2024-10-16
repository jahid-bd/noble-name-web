'use client';

import { signupSchema } from '@/schema/auth';
import { userRegister } from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../buttons/Button';
import GoogleSignupBtn from '../buttons/GoogleSignupBtn';
import InputGroup from '../inputs/InputGroup';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const SignupView = () => {
  const [isSubmit, setIsSubmit] = useState(true);
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const router = useRouter();
  const [serverError, setserverError] = useState<string>();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: (data: RegisterData) => userRegister(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },
    onSuccess: () => {
      router.push('/auth/email-verification');
    },
  });

  const onSubmit = (data: RegisterData) => {
    setserverError('');
    signup(data);
  };

  function onChange(value: any) {
    if (value) {
      setIsSubmit(false);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-w-[360px] h-[622px] mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
          >
            <Image
              width={176}
              height={64}
              alt="Noble Names Logo"
              src="/images/logo.png"
              className="h-16 w-44 relative object-cover mx-auto"
            />
          </Link>
        </div>

        <div>
          <h1 className="heading-text text-center">Sign up</h1>
        </div>

        <div className="my-8 ">
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={signupSchema}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <InputGroup
                    type="text"
                    name="name"
                    label="Name*"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-5">
                  <InputGroup
                    type="email"
                    name="email"
                    label="Email*"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-5">
                  <InputGroup
                    type="password"
                    name="password"
                    label="Password*"
                    placeholder="Create a password"
                  />
                </div>

                <div className="flex justify-center mb-6">
                  <ReCAPTCHA
                    onChange={onChange}
                    sitekey={
                      process.env.NEXT_PUBLIC_RECAPTUCHA_SITE_KEY as string
                    }
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
                  <Button isLoading={isPending}>Get started</Button>
                </div>

                <div className="mt-4">
                  <GoogleSignupBtn text="Sign up with Google" />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="flex items-center justify-center gap-1 mb-5">
          <p className="text-text-tertiary">Already have an account?</p>
          <Link href="/auth/sign-in">
            <span className="text-primary font-semibold hover:text-green-hover">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupView;
