import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type GenderFemaleType = {
  label?: string;
  text?: string;

  /** Style props */
  inputMinWidth?: CSSProperties['minWidth'];
  textMinWidth?: CSSProperties['minWidth'];
  supportingTextMinWidth?: CSSProperties['minWidth'];
};

const GenderFemale: NextPage<GenderFemaleType> = ({
  label,
  text,
  inputMinWidth,
  textMinWidth,
  supportingTextMinWidth,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: inputMinWidth,
    };
  }, [inputMinWidth]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: textMinWidth,
    };
  }, [textMinWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: supportingTextMinWidth,
    };
  }, [supportingTextMinWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-sm text-colors-text-text-secondary-700 font-text-md-semibold">
      <div className="flex-1 flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div
          className="relative leading-[20px] font-medium inline-block min-w-[27px]"
          style={labelStyle}
        >
          {label}
        </div>
        <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg box-border overflow-hidden flex flex-row flex-wrap items-center justify-start py-2.5 px-[13px] gap-[8px] max-w-full text-base text-colors-text-text-primary-900 border-[1px] border-solid border-colors-border-border-primary">
          <div
            className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[31px] max-w-full"
            style={contentStyle}
          >
            <div
              className="relative leading-[24px] font-medium inline-block min-w-[31px]"
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
      <div className="w-[506px] rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] box-border overflow-hidden shrink-0 hidden flex-row items-start justify-start max-w-full text-base text-colors-text-text-primary-900 border-[1px] border-solid border-colors-border-border-secondary">
        <div className="flex-1 flex flex-col items-start justify-start py-spacing-xs px-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm box-border max-w-full">
            <div className="flex-1 rounded-spacing-sm bg-colors-background-bg-active flex flex-row flex-wrap items-center justify-start py-2.5 pr-2.5 pl-spacing-md box-border gap-[8px] max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[37px] max-w-full">
                <div className="h-6 relative leading-[24px] font-medium inline-block">
                  Male
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
          <div className="self-stretch h-[46px] flex flex-row items-center justify-start py-px px-spacing-sm box-border max-w-full">
            <div className="self-stretch flex-1 rounded-spacing-sm flex flex-col items-start justify-start py-2.5 pr-2.5 pl-spacing-md box-border max-w-full">
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

export default GenderFemale;
