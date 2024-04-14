import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type LangugeType = {
  label?: string;
  text?: string;

  /** Style props */
  propWidth?: CSSProperties['width'];
  propWidth1?: CSSProperties['width'];
};

const Languge: NextPage<LangugeType> = ({
  label,
  text,
  propWidth,
  propWidth1,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="w-[248px] flex flex-row items-start justify-start text-left text-sm text-colors-text-text-secondary-700 font-text-md-semibold">
      <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
        <div
          className="relative leading-[20px] font-medium inline-block min-w-[67px]"
          style={labelStyle}
        >
          {label}
        </div>
        <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg overflow-hidden flex flex-row items-center justify-start py-2.5 px-[13px] gap-[8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-colors-border-border-primary">
          <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
            <div
              className="relative leading-[24px] font-medium inline-block min-w-[56px]"
              style={textStyle}
            >
              {text}
            </div>
            <div className="self-stretch w-[54px] relative leading-[24px] text-colors-text-text-tertiary-600 hidden">
              @olivia
            </div>
          </div>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="h-[100px] w-[248px] rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] box-border overflow-hidden shrink-0 hidden flex-row items-start justify-start text-base text-colors-text-text-primary-900 border-[1px] border-solid border-colors-border-border-secondary">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start py-spacing-xs px-0">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-px px-spacing-sm">
            <div className="self-stretch flex-1 rounded-spacing-sm bg-colors-background-bg-secondary flex flex-row items-center justify-start py-2.5 pr-2.5 pl-spacing-md gap-[8px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Male
                </div>
                <div className="self-stretch w-[54px] relative leading-[24px] text-colors-text-text-tertiary-600 hidden">
                  @olivia
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-px px-spacing-sm">
            <div className="self-stretch flex-1 rounded-spacing-sm flex flex-col items-start justify-start py-2.5 pr-2.5 pl-spacing-md">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Female
                </div>
                <div className="self-stretch w-[75px] relative leading-[24px] text-colors-text-text-tertiary-600 hidden">
                  @phoenix
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languge;
