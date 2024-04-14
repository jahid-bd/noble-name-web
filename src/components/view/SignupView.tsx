import type { NextPage } from 'next';
import { useCallback } from 'react';

import GoogleIcon from '@/assets/icons/GoogleIcon';
import InputField from '@/components/feature/form/InputField';
import { useRouter } from 'next/navigation';

const SignupView: NextPage = () => {
  const router = useRouter();

  const onButtonsButtonClick = useCallback(() => {
    router.push('/basic-information');
  }, [router]);

  const onButtonsButton1Click = useCallback(() => {
    router.push('/log-in');
  }, [router]);

  return (
    <form className="m-0 w-[360px] flex flex-col items-center justify-start gap-[32px] max-w-[360px] mq450:gap-[16px]">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
        <img
          className="h-16 w-44 relative object-cover"
          alt=""
          src="/images/logo.png"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch relative text-11xl leading-[38px] font-semibold font-text-sm-semibold text-colors-text-text-primary-900 text-center whitespace-nowrap mq450:text-lg mq450:leading-[23px] mq750:text-5xl mq750:leading-[30px]">
          Sign up
        </div>
      </button>
      <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <InputField label="Name*" contentPlaceholder="Enter your name" />
          <InputField
            label="Email*"
            contentPlaceholder="Enter your email"
            propMinWidth="44px"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
              <div className="relative text-sm leading-[20px] font-medium font-text-sm-semibold text-colors-text-text-secondary-700 text-left inline-block min-w-[73px]">
                Password*
              </div>
              <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border flex flex-row items-center justify-start py-2.5 px-[13px] max-w-full border-[1px] border-solid border-colors-border-border-primary">
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-text-sm-semibold text-base text-colors-text-text-placeholder min-w-[199px] max-w-full"
                  placeholder="Create a password"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch relative text-sm leading-[20px] font-text-sm-semibold text-colors-text-text-tertiary-600 text-left">
              Must be at least 8 characters.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <button
            className="cursor-pointer py-2.5 px-5 bg-foundation-green-normal self-stretch rounded-radius-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-foundation-green-normal"
            onClick={onButtonsButtonClick}
          >
            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
              <div className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-colors-background-bg-primary text-left inline-block min-w-[89px] whitespace-nowrap">
                Get started
              </div>
            </div>
          </button>
          <button className="w-full">
            <div className="self-stretch flex flex-col items-center justify-center">
              <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[12px] whitespace-nowrap border-[1px] border-solid border-colors-border-border-primary">
                {/* <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/social-icon.svg"
              /> */}
                <GoogleIcon />

                <div className="relative text-base leading-[24px] font-semibold font-text-sm-semibold text-colors-text-text-secondary-700 text-left">
                  Sign up with Google
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center py-0 px-[72px] gap-[4px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative text-sm leading-[20px] font-text-sm-semibold text-colors-text-text-tertiary-600 text-left whitespace-nowrap">
          Already have an account?
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-center"
          onClick={onButtonsButton1Click}
        >
          <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-foundation-green-normal text-left inline-block min-w-[41px] whitespace-nowrap">
            Log in
          </div>
        </button>
      </div>
    </form>
  );
};

export default SignupView;
