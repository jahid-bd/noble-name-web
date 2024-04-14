import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className="ml-[-1px] self-stretch text-white bg-foundation-green-normal overflow-hidden flex flex-col items-center justify-start py-[34px] px-5 box-border gap-[20px] max-w-full text-right text-base text-component-colors-components-buttons-primary-button-primary-fg font-text-md-semibold">
      <div className="w-[167px] relative leading-[24px] font-semibold inline-block">
        © 2023 Noble Names
      </div>
      <div className="flex flex-row items-start justify-center gap-[20px] max-w-full text-left mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start">
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <div className="relative leading-[24px] cursor-pointer">{`Terms & Conditions`}</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <div className="relative leading-[24px] inline-block min-w-[105px] cursor-pointer">
              Privacy Policy
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="overflow-hidden flex flex-row items-center justify-center">
            <div className="relative leading-[24px] inline-block min-w-[112px] cursor-pointer">
              Fair Use Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
