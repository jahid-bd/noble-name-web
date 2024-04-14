import type { NextPage } from 'next';

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-11xl text-colors-text-text-primary-900 font-text-md-semibold">
      <div className=" rounded-radius-2xl bg-colors-background-bg-secondary flex flex-row flex-wrap items-center justify-between p-16 box-border gap-[-2px] max-w-full mq1275:pl-8 mq1275:pr-8 mq1275:box-border">
        <div className="w-[1005px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[12px] max-w-full">
          <div className="w-full flex flex-col items-start justify-start min-w-[480px] max-w-[768px] mq750:max-w-full">
            <h2 className="m-0 self-stretch relative text-inherit leading-[38px] font-semibold font-inherit mq750:text-5xl mq750:leading-[30px] mq450:text-lg mq450:leading-[23px]">
              Suggest a New Name
            </h2>
          </div>
          <div className="relative text-lg leading-[28px] text-colors-text-text-tertiary-600 inline-block max-w-full">{`Take part in our initiative to create the largest database of Muslim names and earn rewards in the hereafter. `}</div>
        </div>
        <button className="cursor-pointer py-2.5 px-[15px] bg-foundation-green-normal rounded-radius-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-foundation-green-normal">
          <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
            <div className="relative text-base leading-[24px] font-semibold font-text-md-semibold text-component-colors-components-buttons-primary-button-primary-fg text-left inline-block min-w-[119px] text-white">
              Add New Name
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
