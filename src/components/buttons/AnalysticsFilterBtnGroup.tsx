'use client';

import { differenceInDays, formatISO, parseISO, subDays } from 'date-fns';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const AnalyticsFilterGroupBtn = () => {
  const [activeTab, setActiveTab] = useState<number | null>(365);
  const searchParams = useSearchParams();
  const to = searchParams.get('to');
  const form = searchParams.get('form');

  useEffect(() => {
    const parseTo = to && parseISO(to);
    const parseForm = form && parseISO(form);

    if (parseTo && parseForm) {
      const difference = differenceInDays(parseForm, parseTo);

      if (difference) {
        setActiveTab(difference);
      }
    } else {
      setActiveTab(365);
    }
  }, [to, form]);

  return (
    <div className="border rounded-md border-border-primary overflow-hidden w-fit bg-white">
      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 365)),
            form: formatISO(new Date()),
          },
        }}
        type="button"
        className={`py-2 text-text-secondary font-semibold  border-x border-border-primary ${
          activeTab === 365 ? 'bg-[#00a991] text-white' : ''
        }`}
      >
        <button type="button" className={`px-3 py-2 font-semibold'}`}>
          12 months
        </button>
      </Link>

      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 30)),
            form: formatISO(new Date()),
          },
        }}
        className={`py-2 text-text-secondary font-semibold  border-x border-border-primary ${
          activeTab === 30 ? 'bg-[#00a991] text-white' : ''
        }`}
      >
        <button type="button" className={`px-3 py-2 font-semibold`}>
          30 days
        </button>
      </Link>

      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 7)),
            form: formatISO(new Date()),
          },
        }}
        className={`py-2 text-text-secondary font-semibold  border-x border-border-primary ${
          activeTab === 7 ? 'bg-[#00a991] text-white' : ''
        }`}
      >
        <button type="button" className={`px-3 py-2 font-semibold`}>
          7 days
        </button>
      </Link>

      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 1)),
            form: formatISO(new Date()),
          },
        }}
        className={`py-2 text-text-secondary font-semibold  border-x border-border-primary ${
          activeTab === 1 ? 'bg-[#00a991] text-white' : ''
        }`}
      >
        <button type="button" className={`px-3 py-2 font-semibold`}>
          24 hours
        </button>
      </Link>
    </div>
  );
};

export default AnalyticsFilterGroupBtn;
