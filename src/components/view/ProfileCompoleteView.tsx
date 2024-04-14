import type { NextPage } from 'next';
import { useCallback } from 'react';
import ProfileCompleteContent from '../ui/ProfileCompleteContent';

const ProfileCompleteView: NextPage = () => {
  const onCheckboxGroupItemClick = useCallback(() => {
    // Please sync "Basic Information Extended" to the project
  }, []);

  const onCheckboxGroupItem2Click = useCallback(() => {
    // Please sync "Basic Information Extended" to the project
  }, []);

  return (
    <div className="w-full relative bg-component-colors-components-buttons-primary-button-primary-fg overflow-hidden flex flex-col items-center justify-start pt-24 px-5 pb-[198px] box-border gap-[43px] leading-[normal] tracking-[normal] text-center text-11xl text-colors-text-text-primary-900 font-text-md-semibold mq675:gap-[21px]">
      <div className="w-[560px] flex flex-col items-start justify-start gap-[10px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h1 className="m-0 w-[388px] relative text-inherit leading-[38px] font-semibold font-inherit inline-block mq450:text-lg mq450:leading-[23px] mq750:text-[24px] mq750:leading-[30px]">
            Basic Personal Information
          </h1>
        </div>
        <div className="self-stretch relative text-lg leading-[28px] text-colors-text-text-tertiary-600 text-left">
          Provide us with basic personal information for better experience
        </div>
      </div>
      <div className="w-[560px] flex flex-row items-start justify-start pt-0 px-[27px] pb-[17px] box-border max-w-full">
        <ProfileCompleteContent />
      </div>
      <div className="w-[560px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
        <button className="cursor-pointer py-2.5 px-5 bg-foundation-green-normal flex-1 rounded-radius-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden flex flex-row items-start justify-center max-w-full border-[1px] border-solid border-foundation-green-normal hover:bg-lightseagreen hover:box-border hover:border-[1px] hover:border-solid hover:border-lightseagreen text-white">
          <div className="relative text-base leading-[24px] font-semibold font-text-md-semibold text-component-colors-components-buttons-primary-button-primary-fg text-left inline-block min-w-[55px]">
            Submit
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProfileCompleteView;
