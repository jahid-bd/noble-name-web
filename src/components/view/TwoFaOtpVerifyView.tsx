'use client';
import Button from '@/components/buttons/Button';
import PreLoader from '@/components/loader/Loader';
import { verifyOtp2fa } from '@/services/api';
import { OtpParams } from '@/types';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import OtpInput from 'react-otp-input';

const TwoFaOtpVerifyView = () => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const searchParams = useSearchParams();
  const [serverError, setserverError] = useState<string>();

  const otp_id = searchParams.get('key');

  const { mutate: verifyOtpCode, isPending } = useMutation({
    mutationFn: (data: OtpParams) => verifyOtp2fa(data),
    onError: (error: any) => {
      setserverError(error.response.data.message);
    },
    onSuccess: (data) => {
      const user: any =
        data &&
        data?.data?.data?.access_token &&
        jwtDecode(data?.data?.data?.access_token);

      console.log(user);

      Cookies.set('access_token', data?.data?.data?.access_token);

      if (user?.role !== 'admin') return router.push('/');
      if (user?.role === 'admin') return router.push('/admin/dashboard');
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    verifyOtpCode({
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
              Two Factor Authentication
            </h1>
            <p className=" text-text-tertiary mt-[6px]">
              Noble Names is committed to safeguarding your personal information
              and ensuring the confidentiality of your data. Our robust security
              measures are in place to protect your account from unauthorized
              access
            </p>
            <p className=" text-text-tertiary mt-3">
              We have sent you a 4 digit OTP (One-Time Password) to your email.
              Please check the spam folder if you are unable to find your inbox.
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
              <div className="text-text-tertiary">Back to login</div>
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default TwoFaOtpVerifyView;
