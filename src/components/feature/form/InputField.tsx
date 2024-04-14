import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type InputFieldType = {
  label?: string;
  contentPlaceholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties['minWidth'];
};

const InputField: NextPage<InputFieldType> = ({
  label,
  contentPlaceholder,
  propMinWidth,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start w-full text-left text-sm text-colors-text-text-secondary-700 font-text-sm-semibold">
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div
          className="relative leading-[20px] font-medium inline-block min-w-[47px]"
          style={labelStyle}
        >
          {label}
        </div>
        <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border flex flex-row items-center justify-start py-2.5 px-[13px] max-w-full border-[1px] border-solid border-colors-border-border-primary">
          <input
            className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-text-sm-semibold text-base text-colors-text-text-placeholder min-w-[199px] max-w-full"
            placeholder={contentPlaceholder}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
