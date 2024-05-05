'use client';

import { BASE_URL } from '@/constants';
import { userRegister } from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../buttons/Button';
import GoogleSignupBtn from '../buttons/GoogleSignupBtn';
import PlanButton from '../buttons/PlanButton';
import InputField from '../form/InputField';
interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const SignupView = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const [formState, setFormState] = useState({ ...initialValues });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [serverError, setserverError] = useState<string>();

  const router = useRouter();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: (data: RegisterData) => userRegister(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },
    onSuccess: () => {
      setFormState(initialValues);
      router.push('/auth/email-verification');
    },
  });

  const passMessages = {
    min: 'At least 8 characters',
    lower: 'Lower case letters (a-z)',
    upper: 'Upper case letters (A-Z)',
    special: 'Numbers (0-9)',
    number: 'Special characters (e.g. !@#$%^&*)',
  };

  const schema = yup
    .object({
      email: yup
        .string()
        .trim()
        .nullable()
        .email('Please enter a valid email address')
        .required('Please enter an email address'),
      password: yup
        .string()
        .trim()
        .min(8, passMessages.min)
        // .matches(/^\w{8,}$/, passMessages.min)
        // .matches(/^(?=.*[a-z])/, passMessages.lower)
        // .matches(/^(?=.*[A-Z]
        .required('Password is required'),
      name: yup
        .string()
        .trim()
        .required('Please enter a valid name')
        .min(3, 'Name must be at least 3 characters'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmit = (data: RegisterData) => {
    setserverError('');
    signup(data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <InputField
                type="text"
                name="name"
                label="Name*"
                register={register}
                value={formState.name}
                onChange={handleChange}
                error={errors.name?.message}
                placeholder="Enter your name"
                className={serverError ? 'border-red-500' : ''}
              />
            </div>
            <div className="mb-5">
              <InputField
                type="email"
                name="email"
                label="Email*"
                register={register}
                onChange={handleChange}
                value={formState.email}
                error={errors.email?.message}
                placeholder="Enter your email"
                className={serverError ? 'border-red-500' : ''}
              />
            </div>

            <div className="mb-5">
              <InputField
                type="password"
                name="password"
                label="Password*"
                register={register}
                onChange={handleChange}
                value={formState.password}
                placeholder="Create a password"
                error={errors.password?.message}
                message="Must be at least 8 characters."
                className={serverError ? 'border-red-500' : ''}
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
              <Link href={`${BASE_URL}/auth/social`}>
                <GoogleSignupBtn text="Sign up with Google" />
              </Link>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center gap-1 mb-5">
          <p className="text-text-tertiary">Already have an account?</p>
          <Link href="/auth/sign-in">
            <PlanButton>Sign In</PlanButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupView;
