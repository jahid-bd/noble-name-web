'use client';

import SortIcon from '@/assets/icons/SortIcon';
import clsx from 'clsx';
import { useRef, useState } from 'react';
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

const options = [
  {
    label: 'Ascending (A to Z)',
    value: 'Ascending (A to Z)',
  },
  {
    label: 'Descending (Z to A)',
    value: 'Descending (Z to A)',
  },
  {
    label: 'Most Recent',
    value: 'Most Recent',
  },
  {
    label: 'Most Loved',
    value: 'Most Loved',
  },
  {
    label: 'Most Bookmarked',
    value: 'Most Bookmarked',
  },
];

const SortingInput = (
  {
    // label,
    // options,
    // handleSelect,
    // selectedOption,
    // error,
  },
) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectOption] = useState(options[0]);

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
      <div
        className={clsx(
          'relative border border-border-primary px-[14px] py-[10px] flex items-center justify-between cursor-pointer rounded-md w-[210px]',
        )}
        onClick={handleToggle}
        ref={ref}
      >
        <div>
          <span className="font-normal text-text-secondary ">
            {selectedOption?.label}
          </span>
        </div>
        <div>
          <SortIcon />
        </div>

        {showOptions && (
          <div className="absolute left-0 top-full mt-2 bg-white max-h-[300px] overflow-auto z-50 py-2 select-shadow rounded-md w-full border  border-border-primary">
            {options?.map((opt) => (
              <>
                <div
                  key={opt?.value}
                  className={clsx(
                    'py-[11px] px-[14px] transition-all duration-300  hover:bg-gray-100 flex items-center justify-between',
                    selectedOption?.value === opt.value && 'bg-gray-100',
                  )}
                  onClick={() => setSelectOption(opt)}
                >
                  <span className="font-medium text-text-primary ">
                    {opt?.label}
                  </span>
                  <span>
                    {selectedOption?.value === opt?.value && (
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
    </div>
  );
};

export default SortingInput;
