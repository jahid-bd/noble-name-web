'use client';
import Button from '@/components/buttons/Button';
import PreLoader from '@/components/loader/Loader';
import { verifyOtp } from '@/services/api';
import { OtpParams } from '@/types';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import OtpInput from 'react-otp-input';

const OtpVerifyView = () => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const searchParams = useSearchParams();
  const [serverError, setserverError] = useState<string>();

  const otp_id = searchParams.get('token');

  const { mutate: verify, isPending } = useMutation({
    mutationFn: (data: OtpParams) => verifyOtp(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      router.push(`${'/auth/reset-password'}?token=${data?.data?.data?.id}`);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    verify({
      otp_code: Number(otp),
      otp_id,
    });
  };

  return (
    <Suspense fallback={<PreLoader />}>
      <div className="flex items-center justify-center h-screen overflow-auto">
        <div className="w-full max-w-[500px] max-md:px-4 mx-auto">
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
            <h1 className="heading-text text-center max-md:text-[30px]">
              Reset Your Password
            </h1>
            <p className=" text-text-tertiary pt-[6px]">
              We&rsquo;ve sent you an OTP (One-Time Password) to verify your
              identity and reset your password. Please check your registered
              email for the OTP.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="my-5 flex items-center gap-3 max-w-[280px] mx-auto">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                inputStyle={{
                  border: '1px solid #D0D5DD',
                  borderRadius: '8px',
                  margin: '0 5px',
                  width: '54px',
                  height: '54px',
                  fontSize: '20px',
                  color: '#101828',
                  textAlign: 'center',
                  fontWeight: '400',
                }}
                skipDefaultStyles={true}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                inputType="tel"
              />
            </div>

            {serverError ? (
              <div className="pb-3">
                <p className="text-sm text-center text-red-500">
                  {serverError}
                </p>
              </div>
            ) : null}

            <div>
              {false ? (
                <div className="pb-3">
                  <p className="text-sm text-center text-red-500"></p>
                </div>
              ) : null}
              <Button isLoading={isPending}>Verify OTP</Button>
            </div>
          </form>

          <Link
            href={'/auth/forgot-password'}
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
              <div className="text-text-tertiary">Back to forgot</div>
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default OtpVerifyView;
