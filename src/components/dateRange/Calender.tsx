'use client';

import { format } from 'date-fns';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-date-range';

const Calender = ({
  label,
  error,
  value,
  handelSelect,
}: {
  label: string;
  error?: string;
  value?: string | null | Date;
  handelSelect: (value: string) => void;
}) => {
  const [date, setDate] = useState(value ? new Date(value) : '');
  const calenderRef = useRef<HTMLDivElement>(null);
  const [openCalender, setOpenCalender] = useState(false);

  const handleSelect = (value: any) => {
    setDate(value);
    handelSelect(value ? format(new Date(value), 'dd/MM/yyyy') : '');
  };

  const handleClickOutside = useCallback((event: any) => {
    if (calenderRef.current && calenderRef?.current?.contains(event.target)) {
      return setOpenCalender(true);
    }

    return setOpenCalender(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative" ref={calenderRef}>
      {label && (
        <label className="font-medium text-sm text-text-secondary pb-[6px] block">
          {label}
        </label>
      )}

      <div
        className="w-full outline-none border border-border-primary px-[14px] py-[12px] rounded-md shadow-sm placeholder:text-text-placeholder flex justify-between items-center"
        onClick={() => setOpenCalender(true)}
      >
        <span>
          {date ? format(new Date(date), 'dd/MM/yyyy') : 'dd/mm/yyyy'}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
          />
        </svg>
      </div>

      {error ? <p className="text-sm text-red-500 pt-[6px]">{error}</p> : null}

      {openCalender && (
        <div className="max-w-[400px] absolute top-14 z-[999999]">
          <Calendar
            date={date ? new Date(date) : new Date()}
            className="border border-border-primary bg-white"
            minDate={new Date()}
            editableDateInputs={true}
            onChange={handleSelect}
          />
        </div>
      )}
    </div>
  );
};

export default Calender;
