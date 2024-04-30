'use client';
import Button from '@/components/buttons/Button';
import PlanButton from '@/components/buttons/PlanButton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import OtpInput from 'react-otp-input';

const EmailVerification = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="flex items-center justify-center h-screen overflow-auto">
      <div className="w-full max-w-[500px] h-[622px] mx-auto">
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

        <div className="text-center">
          <h1 className="heading-text text-center">Reset Your Password</h1>
          <p className=" text-text-tertiary pt-[6px]">
            We&rsquo;ve sent you an OTP (One-Time Password) to verify your
            identity and reset your password. Please check your registered email
            for the OTP.
          </p>
        </div>

        <form>
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

          <div>
            {false ? (
              <div className="pb-3">
                <p className="text-sm text-center text-red-500"></p>
              </div>
            ) : null}
            <Button>Verify OTP</Button>
          </div>
        </form>

        <Link
          href={'/auth/sign-in'}
          className="flex items-center justify-center"
        >
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="text-text-tertiary flex items-center gap-1">
              Didn&rsquo;t receive code?
              <div title="You can only resend the OTP after a 2-minute cooldown period.">
                <PlanButton> Resend</PlanButton>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EmailVerification;
