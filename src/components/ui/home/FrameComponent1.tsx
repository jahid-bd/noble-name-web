import InputField from '@/components/feature/form/InputField';
import type { NextPage } from 'next';
import Languge from './Language';

const FrameComponent1: NextPage = () => {
  return (
    <section className="self-stretch overflow-hidden flex  flex-col items-center justify-start py-[73px] px-5 box-border gap-[70px] bg-[url('/images/cover.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-13xl text-component-colors-components-buttons-primary-button-primary-fg font-text-md-semibold mq750:gap-[35px] mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq450:gap-[17px]">
      <div className="w-[1280px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 w-[718px] relative text-inherit tracking-[-0.02em] leading-[90px] capitalize font-semibold font-inherit inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full mq750:text-7xl mq750:leading-[72px] mq450:text-lgi mq450:leading-[54px] text-white">
          Search muslim names with endless possibilities
        </h1>
      </div>
      <form className="m-0 bg-white w-[1280px] rounded-radius-xl bg-component-colors-components-buttons-primary-button-primary-fg box-border flex flex-col items-start justify-start py-5 px-[19px] gap-[23px] max-w-full border-[1px] border-solid border-colors-border-border-secondary">
        <div className="self-stretch rounded-radius-xl bg-foundation-green-light-hover box-border overflow-x-auto flex flex-row items-start justify-start gap-[4px] max-w-full border-[1px] border-solid border-colors-border-border-secondary">
          <button className="cursor-pointer [border:none] py-spacing-md px-5 bg-lightseagreen-100 flex-[0.9026] rounded-radius-sm overflow-hidden shrink-0 flex flex-row items-start justify-center box-border whitespace-nowrap max-w-[calc(100%_-_829px)] hover:bg-lightseagreen-200">
            <div className="relative text-lg leading-[28px] font-semibold font-text-md-semibold text-component-colors-components-buttons-primary-button-primary-fg text-left text-white">
              Search by Name
            </div>
          </button>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-1.5 pl-2 gap-[4px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Label
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-1.5 pl-2 gap-[4px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Label
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-[3px] pl-2 gap-[2px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Team
            </div>
            <div className="h-4 w-4 rounded-radius-full overflow-hidden shrink-0 flex flex-col items-start justify-start p-0.5 box-border">
              <img
                className="w-3 h-3 relative overflow-hidden shrink-0"
                alt=""
                src="/xclose.svg"
              />
            </div>
          </div>
          <div className="flex-1 rounded-radius-sm overflow-hidden shrink-0 flex flex-row items-start justify-center py-spacing-md px-0 box-border max-w-[calc(100%_-_829px)]">
            <div className="relative text-lg leading-[28px] font-semibold font-text-md-semibold text-darkslategray text-left">
              Search by Meaning
            </div>
          </div>
          <div className="flex-[0.9026] rounded-radius-sm bg-foundation-green-light-hover overflow-hidden shrink-0 flex flex-row items-start justify-center py-spacing-md px-5 box-border whitespace-nowrap max-w-[calc(100%_-_829px)]">
            <div className="relative text-lg leading-[28px] font-semibold font-text-md-semibold text-darkslategray text-left">
              Search Full Name
            </div>
          </div>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-1.5 pl-2 gap-[4px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Label
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-1.5 pl-2 gap-[4px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Label
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-1.5 pl-2 gap-[4px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Label
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-1.5 pl-2 gap-[4px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Label
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
          <div className="h-6 rounded-radius-full box-border hidden flex-row items-center justify-start py-spacing-xxs pr-1.5 pl-2 gap-[4px] border-[1.5px] border-solid border-component-colors-utility-error-utility-error-600">
            <div className="self-stretch relative text-sm leading-[20px] font-medium font-text-md-semibold text-component-colors-utility-error-utility-error-700 text-center">
              Label
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-1.svg"
            />
          </div>
          <div className="rounded-radius-md overflow-hidden shrink-0 hidden flex-row items-center justify-center p-3">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowright-8.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[14px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[418px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
              {/* <input
                className="w-10 [border:none] [outline:none] font-medium font-text-md-semibold text-sm bg-[transparent] h-5 relative leading-[20px] text-colors-text-text-secondary-700 text-left inline-block p-0"
                placeholder="Name"
                type="text"
              />
              <div className="self-stretch h-11 rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-[13px] max-w-full border-[1px] border-solid border-colors-border-border-primary">
                <div className="self-stretch flex-1 max-w-full" />
              </div> */}
              <InputField label="Name" />
            </div>
          </div>
          <Languge label="Language" text="English" />
          <div className="mb-[-1px] w-[255px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
            <Languge
              label="Gender"
              text="Boy"
              propWidth="unset"
              propWidth1="unset"
            />
          </div>
          <div className="w-[52px] rounded-rounded-full bg-foundation-green-normal box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[15px] border-[1px] border-solid border-foundation-green-normal cursor-pointer">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FrameComponent1;
