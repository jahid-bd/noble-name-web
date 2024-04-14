import GoogleIcon from '@/assets/icons/GoogleIcon';
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import InputField from '../feature/form/InputField';

const LoginView: NextPage = () => {
  const router = useRouter();

  const onButtonsButton1Click = useCallback(() => {
    router.push('/sign-up');
  }, [router]);

  return (
    <form className="m-0 w-[360px] flex flex-col items-center justify-start gap-[32px] max-w-[360px] mq450:gap-[16px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
          <img
            className="h-16 w-44 relative object-cover"
            alt=""
            src="/images/logo.png"
          />
        </button>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h1 className="m-0 self-stretch relative text-11xl leading-[38px] font-semibold font-text-sm-semibold text-colors-text-text-primary-900 text-center mq450:text-lg mq450:leading-[23px] mq750:text-5xl mq750:leading-[30px]">
            Log in to your account
          </h1>
          <div className="self-stretch relative text-base leading-[24px] font-text-sm-semibold text-colors-text-text-tertiary-600 text-center">
            Welcome back! Please enter your details.
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <InputField
            label="Email"
            contentPlaceholder="Enter your email"
            propMinWidth="36px"
          />
          <InputField
            label="Password"
            contentPlaceholder="••••••••"
            propMinWidth="66px"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[8px] min-w-[160px]">
            <input
              className="m-0 h-[18px] w-4 cursor-pointer"
              type="checkbox"
              id="checkbox"
            />

            <div className="flex-1 flex flex-col items-start justify-start">
              <label
                htmlFor="checkbox"
                className="self-stretch relative text-sm leading-[20px] font-medium font-text-sm-semibold text-colors-text-text-secondary-700 text-left"
              >
                Remember for 30 days
              </label>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center cursor-pointer">
            <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-foundation-green-normal text-left inline-block min-w-[114px]">
              Forgot password
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <button className="cursor-pointer py-2.5 px-5 bg-foundation-green-normal self-stretch rounded-radius-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-foundation-green-normal">
            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
              <div className="relative text-base leading-[24px] font-text-sm-semibold text-colors-background-bg-primary text-left inline-block min-w-[51px]">
                Sign in
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[12px] whitespace-nowrap border-[1px] border-solid border-colors-border-border-primary">
              {/* <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/social-icon.svg"
              /> */}
              <GoogleIcon />
              <div className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-colors-text-text-secondary-700 text-left">
                Sign in with Google
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-baseline justify-center py-0 px-[75px] gap-[4px] mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative text-sm leading-[20px] font-text-sm-semibold text-colors-text-text-tertiary-600 text-left">
          Don’t have an account?
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-center"
          onClick={onButtonsButton1Click}
        >
          <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-foundation-green-normal text-left inline-block min-w-[51px] whitespace-nowrap">
            Sign up
          </div>
        </button>
      </div>
    </form>
  );
};

export default LoginView;
