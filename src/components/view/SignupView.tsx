'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../buttons/Button';
import GoogleSignupBtn from '../buttons/GoogleSignupBtn';
import InputField from '../form/InputField';

const SignupView = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-w-[360px] h-[622px] mx-auto">
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
          <h1 className="heading-text text-center">Sign up</h1>
        </div>

        {/* Signup Form */}
        <div className="my-8 ">
          <form>
            <div className="mb-5">
              <InputField
                type="text"
                label="Name*"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                value={formState.name}
              />
            </div>
            <div className="mb-5">
              <InputField
                type="email"
                label="Email*"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formState.name}
              />
            </div>

            <div className="mb-5">
              <InputField
                type="email"
                label="Password*"
                name="password"
                placeholder="Create a password"
                message="Must be at least 8 characters."
                onChange={handleChange}
                value={formState.name}
              />
            </div>

            <div>
              <Button>Get started</Button>
            </div>

            <div className="mt-4">
              <GoogleSignupBtn />
            </div>
          </form>
        </div>

        {/* signin link */}
        <div className="flex items-center justify-center gap-1 mb-5">
          <p className="text-text-tertiary">Already have an account?</p>
          <button className="text-primary font-semibold">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default SignupView;
