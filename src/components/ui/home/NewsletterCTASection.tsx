import InputField from '@/components/feature/form/InputField';
import type { NextPage } from 'next';

const NewsletterCTASection: NextPage = () => {
  return (
    <section className="ml-[-1px] self-stretch bg-foundation-green-green-100 overflow-hidden flex flex-col items-center justify-start py-spacing-9xl px-5 box-border max-w-full text-left text-17xl text-colors-text-text-secondary-hover font-text-md-semibold mq750:gap-[32px] mq450:gap-[16px]">
      <div className="w-[1280px] flex flex-col items-start justify-center max-w-[1280px] mq750:gap-[16px] mq1275:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[32px_30px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[480px] max-w-[768px] mq750:max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[44px] font-semibold font-inherit mq750:text-10xl mq750:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
              Sign up for our newsletter
            </h1>
            <div className="self-stretch relative text-xl leading-[30px] mq450:text-base mq450:leading-[24px]">
              Be the first to know about amazing names
            </div>
          </div>
          <div className="w-width-sm flex flex-row items-center justify-start gap-[16px] w-full text-sm text-colors-text-text-secondary-700 mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[224px] w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="w-9 relative leading-[20px] font-medium hidden">
                  Email
                </div>
                <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-spacing-lg px-3.5 gap-[8px] text-base text-colors-text-text-placeholder">
                  <div className="flex-1 flex flex-row items-center justify-start w-full">
                    <InputField contentPlaceholder="Enter your email" />
                    {/* <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                      Enter your email
                    </div> */}
                  </div>
                  <img
                    className="h-4 w-4 relative hidden"
                    alt=""
                    src="/help-icon.svg"
                  />
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-spacing-lg px-[18px] bg-foundation-green-normal rounded-radius-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[6px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder.svg"
              />
              <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="relative text-base leading-[24px] font-semibold font-text-md-semibold text-component-colors-components-buttons-primary-button-primary-fg text-left inline-block min-w-[79px] text-white">
                  Subscribe
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTASection;
