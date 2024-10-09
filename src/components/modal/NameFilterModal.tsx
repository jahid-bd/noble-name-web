'use client';
import useSearchQueryParam from '@/hooks/useSearchQueryParam';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
    value: 'persian',
    label: 'Persian',
  },
  {
    value: 'turkish',
    label: 'Turkish',
  },
  {
    value: 'central asian',
    label: 'Central Asian',
  },
  {
    value: 'urdu',
    label: 'Urdu',
  },
  {
    value: 'european',
    label: 'European',
  },
  {
    value: 'south east asian',
    label: 'South East Asian',
  },
  {
    value: 'east asian',
    label: 'East Asian',
  },
  {
    value: 'african',
    label: 'African',
  },
];

const NameFilterModal = ({
  handleCloseFilter,
}: {
  handleCloseFilter: () => void;
}) => {
  const [tab, setTab] = useState('');
  const searchParams = useSearchParams();
  const [endLetter, setEndLetter] = useState('');
  const [startLetter, setStartLetter] = useState('');
  const [origin, setOrigin] = useState(originOptions[0]);
  const { setQueryParams, deleteParams } = useSearchQueryParam();

  const handleStartLetter = (value: string) => {
    setStartLetter((prev) => (prev === value ? '' : value));
  };

  const handleEndLetter = (value: string) => {
    setEndLetter((prev) => (prev === value ? '' : value));
  };

  const router = useRouter();

  const onFilter = () => {
    const queryParams: any = {};
    let url: string = searchParams.toString();

    if (searchParams.get('page')) {
      url = deleteParams(url, 'origin');
    }

    url = origin.value
      ? setQueryParams(url, 'origin', origin.value)
      : deleteParams(url, 'origin');
    url = startLetter
      ? setQueryParams(url, 'starting_letter', startLetter)
      : deleteParams(url, 'starting_letter');
    url = endLetter
      ? setQueryParams(url, 'ending_letter', endLetter)
      : deleteParams(url, 'ending_letter');

    if (tab === '0to3') {
      url = setQueryParams(url, 'letter_range_from', '0');
      url = setQueryParams(url, 'letter_range_to', '3');
    } else if (tab === '4to6') {
      url = setQueryParams(url, 'letter_range_from', '4');
      url = setQueryParams(url, 'letter_range_to', '6');
    } else if (tab === '7+') {
      url = setQueryParams(url, 'letter_range_from', '7');
      url = setQueryParams(url, 'letter_range_to', 'null');
    } else {
      url = deleteParams(url, 'letter_range_from');
      url = deleteParams(url, 'letter_range_to');
    }

    router.push(`/name-search${url ? `?${url}` : ''}`);
    handleCloseFilter();
  };

  useEffect(() => {
    const origin = searchParams.get('origin');
    const starting_letter = searchParams.get('starting_letter');
    const ending_letter = searchParams.get('ending_letter');
    const letter_range_from = searchParams.get('letter_range_from');
    const letter_range_to = searchParams.get('letter_range_to');

    if (origin) {
      const find = originOptions.find((item) => item.value === origin);

      find && setOrigin(find);
    }

    ending_letter && setEndLetter(ending_letter);
    starting_letter && setStartLetter(starting_letter);

    if (letter_range_from && letter_range_to) {
      letter_range_from === '0' && letter_range_to === '3' && setTab('0to3');
      letter_range_from === '4' && letter_range_to === '6' && setTab('4to6');
      letter_range_from === '7' && letter_range_to === 'null' && setTab('7+');
    }
  }, []);

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[9999999999]">
      <div className="container mx-auto px-1.5 md:px-20 max-md:h-[80%] overflow-y-auto">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal">
          <div className="flex items-center justify-end mb-4">
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
              active={tab === '0to3'}
              onClick={() => setTab('0to3')}
              text="Short Name (up to 3 letters)"
            />

            <RadioButton
              active={tab === '4to6'}
              onClick={() => setTab('4to6')}
              text="Medium Name (4-6 letters) "
            />

            <RadioButton
              active={tab === '7+'}
              text="Long Name (7+ letters)"
              onClick={() => setTab('7+')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
            <LetterInput
              onClick={handleStartLetter}
              label="Name Starts With"
              selected={startLetter}
            />
            <LetterInput
              selected={endLetter}
              onClick={handleEndLetter}
              label="Name Ends With"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
            <SelectInput
              label="Origin"
              options={originOptions}
              selectedOption={origin}
              handleSelect={(opt) => setOrigin(opt)}
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
