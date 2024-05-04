'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import RadioButton from '../form/RadioButton';
import SelectInput from '../form/SelectInput';
import LetterInput from '../inputs/LetterInput';

const originOptions = [
  {
    value: '',
    label: 'Select origin',
  },
  {
    value: 'arabic',
    label: 'Arabic',
  },
  {
    value: 'english:',
    label: 'English',
  },
];

const NameFilterModal = ({
  handleCloseFilter,
}: {
  handleCloseFilter: () => void;
}) => {
  const [tab, setTab] = useState('0to4');
  const [origin, setOrigin] = useState(originOptions[0]);
  const [startLetter, setStartLetter] = useState('');
  const [endLetter, setEndLetter] = useState('');

  const handleStartLetter = (value: string) => {
    setStartLetter(value);
  };

  const handleEndLetter = (value: string) => {
    setEndLetter(value);
  };

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (paramsObject: object) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(paramsObject)) {
        params.set(key, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const onFilter = () => {
    const queryParams: any = {};

    if (origin.value) {
      queryParams.origin = origin.value;
    }

    if (startLetter) {
      queryParams.strting_letter = startLetter;
    }

    if (endLetter) {
      queryParams.ending_letter = endLetter;
    }

    if (tab === '0to4') {
      queryParams.letter_range_from = 0;
      queryParams.letter_range_to = 4;
    }
    if (tab === '4to6') {
      queryParams.letter_range_from = 4;
      queryParams.letter_range_to = 6;
    }
    if (tab === '7+') {
      queryParams.letter_range_from = 7;
      queryParams.letter_range_to = null;
    }

    router.push(pathname + '?' + createQueryString(queryParams));
    handleCloseFilter();
  };

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
      <div className="container mx-auto px-1.5 md:px-20">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-tertiary ">
              Filter Names By
            </h3>

            <button type="button" onClick={handleCloseFilter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16992 14.8299L14.8299 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8299 14.8299L9.16992 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-4">
            <RadioButton
              active={tab === '0to4'}
              onClick={() => setTab('0to4')}
              text="Short names (upto 4 letters)"
            />

            <RadioButton
              active={tab === '4to6'}
              onClick={() => setTab('4to6')}
              text="Medium Name (4-6 letters) "
            />

            <RadioButton
              active={tab === '7+'}
              text="Long Names (7+ letters)"
              onClick={() => setTab('7+')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
            <LetterInput
              onClick={handleStartLetter}
              label="Letter Starts With"
              selected={startLetter}
            />
            <LetterInput
              selected={endLetter}
              onClick={handleEndLetter}
              label="Letter Ends With"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
            <SelectInput
              label="Origin"
              options={originOptions}
              handleSelect={(opt) => setOrigin(opt)}
              selectedOption={originOptions[0]}
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="py-2.5 px-20 rounded-lg bg-primary text-white text-base font-medium"
              onClick={onFilter}
            >
              Filter Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameFilterModal;
