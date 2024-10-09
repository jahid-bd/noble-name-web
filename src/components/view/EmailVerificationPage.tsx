'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const EmailVerificationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => router.push('/'), 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-md:px-4 max-w-[500px] mx-auto">
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

        <div className="text-center">
          <h1 className="heading-text text-center max-md:text-[26px]">
            Verify Your Email Address
          </h1>
          <p className=" text-text-tertiary pt-[6px]">
            Please verify your email address to complete registration. Check
            your inbox for a verification link
          </p>
        </div>

        <Link
          href={'/auth/sign-up'}
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
            <div className="text-text-tertiary">Back</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
