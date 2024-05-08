'use client';

import { userLogin } from '@/services/api';
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
import InputField from '../form/InputField';

interface SignInData {
  email: string;
  password: string;
}

const SignInView = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const [formState, setFormState] = useState(initialValues);
  const [isRemember, setIsRemember] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const [serverError, setserverError] = useState<string>();
  const router = useRouter();

  const { mutate: signin, isPending } = useMutation({
    mutationFn: (data: SignInData) => userLogin(data),
    onError: (error: any) => {
      console.log('error', error.message);
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      setFormState(initialValues);
      router.push('/');
    },
  });

  const schema = yup
    .object({
      email: yup
        .string()
        .trim()
        .nullable()
        .email('Please enter a valid email address')
        .required('Please enter your email address'),
      password: yup.string().trim().required('Please enter your password'),
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

  const onSubmit = (data: SignInData) => {
    setserverError('');
    signin(data);
  };

  //   useEffect(() => {
  //     const credentials = Cookies.get('credentials');
  //     if (credentials) {
  //       setFormState(JSON.parse(credentials));
  //       setIsRemember(true);
  //     }
  //   }, []);

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-w-[370px] h-[622px] mx-auto">
        {/* logo */}
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

        {/* Title */}
        <div>
          <h1 className="heading-text text-center">Log in to your account</h1>
          <p className="pt-4 text-center text-text-tertiary">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Signup Form */}
        <div className="my-8 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <InputField
                type="text"
                label="Email*"
                name="email"
                placeholder="Enter your email address"
                onChange={handleChange}
                value={formState.email}
                register={register}
                error={errors.email?.message}
                className={serverError ? 'border-red-500' : ''}
              />
            </div>

            <div className="mb-5">
              <InputField
                type="password"
                label="Password*"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formState.password}
                register={register}
                error={errors.password?.message}
                className={serverError ? 'border-red-500' : ''}
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 border border-border-primary"
                  checked={isRemember}
                  onChange={() => setIsRemember(!isRemember)}
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
                className="text-primary font-semibold hover:text-green-hover"
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
          </form>

          <div className="mt-4">
            <GoogleSignupBtn text="Sign in with Google" />
          </div>
        </div>

        {/* signin link */}
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
