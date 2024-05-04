'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { useRef } from 'react';

import { useOnClickOutside } from 'usehooks-ts';

interface PropTypes {
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
  selectedOption:
    | {
        value: string;
        label: string;
      }
    | undefined;
  handleSelect: (option: { value: string; label: string }) => void;
  error?: boolean | string;
}

const SelectInput = ({
  label,
  options,
  selectedOption,
  handleSelect,
  error,
}: PropTypes) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggle = () => {
    setShowOptions(!showOptions);
  };

  const ref = useRef(null);

  const handleClickOutside = () => {
    setShowOptions(false);
  };

  const handleClickInside = () => {
    setShowOptions(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div>
      <label
        htmlFor={label}
        className="font-medium text-sm text-text-secondary pb-[6px] block"
      >
        {label}
      </label>
      <div
        className={clsx(
          'w-full relative border border-border-primary px-[14px] py-[10px] flex items-center justify-between cursor-pointer rounded-md',
          error && 'border-red-500',
        )}
        onClick={handleToggle}
        ref={ref}
      >
        <div>
          <span className="font-medium text-text-primary ">
            {selectedOption?.label}
          </span>
        </div>
        <div>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(showOptions && 'rotate-180')}
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

        {showOptions && (
          <div className="absolute left-0 top-full mt-2 bg-white max-h-[600px] overflow-aut z-50 py-2 select-shadow rounded-md w-full border  border-border-primary">
            {options?.map((opt) => (
              <>
                <div
                  key={opt.value}
                  className={clsx(
                    'py-[11px] px-[14px] transition-all duration-300  hover:bg-gray-100 flex items-center justify-between',
                    selectedOption?.value === opt.value && 'bg-gray-100',
                  )}
                  onClick={() => handleSelect(opt)}
                >
                  <span className="font-medium text-text-primary ">
                    {opt.label}
                  </span>
                  <span>
                    {selectedOption?.value === opt.value && (
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6667 1L5.5 10.1667L1.33334 6"
                          stroke="#00A991"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
      {error ? <p className="text-sm text-red-500 pt-[6px]">{error}</p> : null}
    </div>
  );
};

export default SelectInput;
