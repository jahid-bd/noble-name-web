import type { NextPage } from 'next';

export type InputWithLabelType = {
  label?: string;

  /** Action props */
  onCheckboxGroupItemClick?: () => void;
};

const InputWithLabel: NextPage<InputWithLabelType> = ({
  label,
  onCheckboxGroupItemClick,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-left text-sm text-colors-text-text-secondary-700 font-text-md-semibold">
      <div className="relative leading-[20px] font-medium">{label}</div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px]">
        <div
          className="flex-1 rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg box-border flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[158px] cursor-pointer border-[1px] border-solid border-colors-border-border-primary"
          onClick={onCheckboxGroupItemClick}
        >
          <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-center pt-spacing-xxs px-0 pb-0">
              <div className="h-4 w-4 relative rounded-radius-full box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-border-primary" />
            </div>
            <input
              className="w-[calc(100%_-_16px)] [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-col items-start justify-start font-text-md-semibold font-medium text-base text-colors-text-text-primary-900 min-w-[112px]"
              placeholder="Yes"
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg box-border flex flex-row items-center justify-start py-2.5 px-[15px] min-w-[158px] border-[1px] border-solid border-colors-border-border-primary">
          <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-center pt-spacing-xxs px-0 pb-0">
              <div className="h-4 w-4 relative rounded-radius-full box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-border-primary" />
            </div>
            <input
              className="w-[calc(100%_-_16px)] [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-col items-start justify-start font-text-md-semibold font-medium text-base text-colors-text-text-primary-900 min-w-[112px]"
              placeholder="No"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputWithLabel;
